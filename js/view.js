import Cookies from "js-cookie";
import { UI_ELEMENTS } from "./uiElements";
import Message from "./message";
import newModal from "./modal";
import { URL, AUTHOR } from "./config";

const MESSAGES = [];

function scrollToBottom() {
  const element = UI_ELEMENTS.MESSAGES.firstElementChild;
  const options = { block: "end", behavior: "smooth" };

  element.scrollIntoView(options);
}

export function sendMessage(e) {
  e.preventDefault();
  const { value } = UI_ELEMENTS.INPUT;
  if (!value) return;
  const newMessage = new Message(value);
  const newMessageItem = newMessage.createItem();
  MESSAGES.push(newMessage);
  UI_ELEMENTS.MESSAGES.prepend(newMessageItem);
  UI_ELEMENTS.INPUT.value = "";
  scrollToBottom();
}

async function requestForCode(email) {
  const data = { email };
  const headers = {
    "Content-Type": "application/json;charset=utf-8",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  };

  return fetch(URL.AUTORIZATION, options);
}

export async function getCode(e) {
  e.preventDefault();

  try {
    const { value } = e.target.querySelector(".modal__input");
    if (!value) return;
    const modal = e.target.closest(".modal");
    const response = await requestForCode(value);
    if (!response.ok) throw new Error("Ошибка запроса");
    newModal(e);
    hideMessage(e);
    modal.classList.remove("open");
  } catch (error) {
    showMessage(e, error.message);
  }
}

function showMessage(e, text) {
  const form = e.target;
  const formError = form.querySelector(".message-error");
  form.classList.add("error");
  formError.textContent = text;
}

function hideMessage(e) {
  const form = e.target;
  const formError = form.querySelector(".message-error");
  if (!formError) return;
  form.classList.remove("error");
}

export async function changeName(e) {
  e.preventDefault();
  hideMessage(e);
  const token = Cookies.get("token");
  if (!token) return showMessage(e, "Вы не авторизованны");
  hideMessage(e);

  const input = e.target.querySelector(".modal__input");
  const name = input.value;
  const data = { name: `${name}` };
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json;charset=utf-8",
  };
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers,
  };

  try {
    await fetch(URL.AUTORIZATION, options);
    showMessage(e, "Вы сменили ник");
  } catch (error) {
    showMessage(e, "Ошибка");
  }
}

async function getAccountData(token) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = { headers };
  const response = await fetch(URL.CHANGE_NAME, options);

  if (!response.ok) throw new Error("Ошибка запроса");

  const result = await response.json();
  stateUIElements(result);
}

function stateUIElements({ name }) {
  AUTHOR.USER = name || "Я";
  UI_ELEMENTS.NAME.value = AUTHOR.USER;
  UI_ELEMENTS.EXIT.style.display = name ? "block" : "none";
  UI_ELEMENTS.AUTHORIZATION.style.display = name ? "none" : "block";
}

export async function saveToken(e) {
  try {
    e.preventDefault();
    const { value: token } = e.target.querySelector(".modal__input");
    if (!token) return;
    await getAccountData(token);
    const date = new Date(new Date().getTime() + 3600 * 1000);
    Cookies.set("token", token, { expires: date });
    const modal = e.target.closest(".modal");
    modal.classList.remove("open");
  } catch (error) {
    showMessage(e, "Введите верный код");
  }
}

export async function loadPage() {
  try {
    const token = Cookies.get("token");
    if (!token) throw new Error("Вы не авторизованны");
    await getAccountData(token);
  } catch (error) {
    console.log(error.message);
    stateUIElements({});
  }
}

export function signOut() {
  Cookies.remove("token");
  stateUIElements({});
}