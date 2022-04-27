import { UI_ELEMENTS } from "./uiElements";
import Message from "./message";
import newModal from "./modal";

const MESSAGES = [];
const URL = "https://mighty-cove-31255.herokuapp.com/api/user";

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

  await fetch(URL, options);
}

export function getCode(e) {
  e.preventDefault();
  const { value } = e.target.querySelector(".modal__input");
  if (!value) return;
  newModal(e);
  const modal = e.target.closest(".modal");
  modal.classList.remove("open");
  requestForCode(value);
}
