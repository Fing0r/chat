import { throttle, scrollToBottom, showArrowOnScroll } from "./helper";
import { CHAT, FORM, BUTTONS } from "./uiElements";
import {
  sendMessage, getCode, saveToken, changeName, loadPage, signOut, codeIsThere,
} from "./view";
import { renderMessageOnScroll } from "./render";
import INIT_MODAL from "./modal";

const renderMessageOnScrollThrottle = throttle(renderMessageOnScroll, 300);
const showArrowOnScrollThrottle = throttle(showArrowOnScroll, 200);

document.addEventListener("DOMContentLoaded", loadPage);

BUTTONS.SETTINGS.addEventListener("click", INIT_MODAL.SETTINGS.openModal);
BUTTONS.AUTHORIZATION.addEventListener("click", INIT_MODAL.AUTHORIZATION.openModal);
BUTTONS.CONFIRMATION.addEventListener("click", codeIsThere);
BUTTONS.EXIT.addEventListener("click", signOut);

FORM.CODE.addEventListener("submit", getCode);
FORM.MESSAGE.addEventListener("submit", sendMessage);
FORM.LOGIN.addEventListener("submit", saveToken);
FORM.CHANGE_NAME.addEventListener("submit", changeName);

CHAT.START.addEventListener("click", scrollToBottom);
CHAT.LIST.addEventListener("scroll", renderMessageOnScrollThrottle);
CHAT.LIST.addEventListener("scroll", showArrowOnScrollThrottle);
