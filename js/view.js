import Cookies from "js-cookie";
import { UI_ELEMENTS } from "./uiElements";
import {
  requestForCode, requestForChangeName, importMessage, requestForAccountData,
} from "./request";
import { AUTHOR, MESSAGES } from "./config";
import newModal from "./modal";
import {
  showMessage, hideMessage, setCookiesToken, clearForm, getValue, getToken,
} from "./helper";
import { renderMessages } from "./render";
import loader from "./loader";
import SOCKET from "./webSocket";

export function sendMessage(e) {
  e.preventDefault();
  const { value } = UI_ELEMENTS.INPUT;
  if (!value) return;
  SOCKET.sendMessage(value);
  UI_ELEMENTS.INPUT.value = "";
}

export async function getCode(e) {
  e.preventDefault();

  try {
    const value = getValue(e);

    const modal = e.target.closest(".modal");
    const response = await requestForCode(value);
    if (!response.ok) throw new Error("Ошибка запроса");
    newModal(e);
    hideMessage(e);
    clearForm(e);
    modal.classList.remove("open");
    UI_ELEMENTS.AUTHORIZATION.dataset.modal = "confirmation";
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

    // hideMessage(e);
    const token = getToken();
    await requestForChangeName(name, token);
  } catch (error) {
    showMessage(e, error.message);
  }
}

function stateUIElements(email, name) {
  AUTHOR.EMAIL = email;
  AUTHOR.NAME = name || "Я";
  UI_ELEMENTS.NAME.value = AUTHOR.NAME;
  UI_ELEMENTS.EXIT.style.display = name ? "block" : "none";
  UI_ELEMENTS.AUTHORIZATION.style.display = name ? "none" : "block";
}

async function getAccountData(token) {
  const response = await requestForAccountData(token);
  if (!response.ok) throw new Error("Ошибка запроса");
  const { email, name } = await response.json();
  stateUIElements(email, name);
}

export async function saveToken(e) {
  try {
    e.preventDefault();
    const token = getValue(e);

    await getAccountData(token);
    setCookiesToken(token);
    document.querySelector(".chat__btns").style.zIndex = "101";

    const modal = e.target.closest(".modal");
    modal.classList.remove("open");

    loader(UI_ELEMENTS.DIALOG);
    clearForm(e);
    MESSAGES.STORAGE = await importMessage();
    renderMessages(MESSAGES.STORAGE);

    SOCKET.init(token);
  } catch (error) {
    showMessage(e, "Введите верный код");
  } finally {
    loader(UI_ELEMENTS.DIALOG);
    document.querySelector(".chat__btns").style.zIndex = null;
  }
}

export async function loadPage() {
  loader(UI_ELEMENTS.CHAT);
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
    loader(UI_ELEMENTS.CHAT);
  }
}

export function signOut() {
  Cookies.remove("token");
  SOCKET.disconnect();
  UI_ELEMENTS.MESSAGES.replaceChildren();
  stateUIElements();
  MESSAGES.START = 1;
  MESSAGES.END = 20;
  MESSAGES.STORAGE = [];
  UI_ELEMENTS.AUTHORIZATION.dataset.modal = "authorization";
}
