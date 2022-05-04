import Cookies from "js-cookie";
import { CHAT, BUTTONS } from "./uiElements";
import {
  requestForCode, requestForChangeName, importMessage, requestForAccountData,
} from "./request";
import { AUTHOR, MESSAGES } from "./config";
import INIT_MODAL from "./modal";
import {
  showMessage, hideMessage, setCookiesToken, clearForm, getValue, getToken,
} from "./helper";
import { renderMessages } from "./render";
import loader from "./loader";
import SOCKET from "./webSocket";

export function codeIsThere() {
  INIT_MODAL.AUTHORIZATION.closeModal();
  INIT_MODAL.CONFIRMATION.openModal();
}

export function sendMessage(e) {
  e.preventDefault();
  const { value } = CHAT.INPUT;
  if (!value) return;
  SOCKET.sendMessage(value);
  CHAT.INPUT.value = "";
}

export async function getCode(e) {
  e.preventDefault();

  try {
    const value = getValue(e);
    const response = await requestForCode(value);
    if (!response.ok) throw new Error("Ошибка запроса");
    INIT_MODAL.AUTHORIZATION.closeModal();
    INIT_MODAL.CONFIRMATION.openModal();
    hideMessage(e);
    clearForm(e);
  } catch (error) {
    showMessage(e, error.message);
  }
}

function changeNameOldMessages() {
  [...MESSAGES.USER].forEach((element) => {
    const messageName = element.querySelector(".message__name");
    messageName.textContent = AUTHOR.NAME;
  });
}

export async function changeName(e) {
  try {
    e.preventDefault();
    const { value: name } = e.target.querySelector(".form__input");
    showMessage(e, "Вы сменили ник");
    AUTHOR.NAME = name.trim();
    changeNameOldMessages();

    const token = getToken();
    SOCKET.reconnect(token);
    await requestForChangeName(name, token);
  } catch (error) {
    showMessage(e, error.message);
  }
}

function stateUIElements(email, name) {
  AUTHOR.EMAIL = email;
  AUTHOR.NAME = name || "Я";
  CHAT.NAME.value = AUTHOR.NAME;
  BUTTONS.EXIT.style.display = name ? "block" : "none";
  BUTTONS.AUTHORIZATION.style.display = name ? "none" : "block";
}

async function getAccountData(token) {
  const response = await requestForAccountData(token);
  if (!response.ok) throw new Error("Ошибка запроса");
  const { email, name } = await response.json();
  stateUIElements(email, name);
}

export async function saveToken(e) {
  const chatBtns = document.querySelector(".chat__btns");
  try {
    e.preventDefault();
    const token = getValue(e);

    await getAccountData(token);
    setCookiesToken(token);

    INIT_MODAL.CONFIRMATION.closeModal();
    SOCKET.init(token);

    chatBtns.style.zIndex = "101";
    loader(CHAT.BOX);
    clearForm(e);
    MESSAGES.STORAGE = await importMessage();
    renderMessages(MESSAGES.STORAGE);
  } catch (error) {
    showMessage(e, "Введите верный код");
    chatBtns.style.zIndex = "101";
    loader(CHAT.BOX);
  } finally {
    document.querySelector(".chat__btns").style.zIndex = null;
    loader(CHAT.BOX);
  }
}

export async function loadPage() {
  loader(CHAT.BODY);
  try {
    const token = getToken();
    await getAccountData(token);
    SOCKET.init(token);

    MESSAGES.STORAGE = await importMessage();
    renderMessages(MESSAGES.STORAGE);
  } catch (error) {
    console.log(error.message);
    stateUIElements();
  } finally {
    loader(CHAT.BODY);
  }
}

export function signOut() {
  Cookies.remove("token");
  SOCKET.disconnect();
  CHAT.LIST.replaceChildren();
  stateUIElements();
  MESSAGES.START = 1;
  MESSAGES.END = 20;
  MESSAGES.STORAGE = [];
}
