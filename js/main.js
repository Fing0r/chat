import { throttle, scrollToBottom, showArrowOnScroll } from "./helper";
import { CHAT, FORM, BUTTONS } from "./uiElements";
import {
  sendMessage, getCode, saveToken, changeName, loadPage, signOut,
} from "./view";
import newModal from "./modal";
import { renderMessageOnScroll } from "./render";

const renderMessageOnScrollThrottle = throttle(renderMessageOnScroll, 300);
const showArrowOnScrollThrottle = throttle(showArrowOnScroll, 200);

document.addEventListener("DOMContentLoaded", loadPage);

BUTTONS.SETTINGS.addEventListener("click", newModal);
BUTTONS.AUTHORIZATION.addEventListener("click", newModal);
BUTTONS.EXIT.addEventListener("click", signOut);

FORM.CODE.addEventListener("submit", getCode);
FORM.MESSAGE.addEventListener("submit", sendMessage);
FORM.LOGIN.addEventListener("submit", saveToken);
FORM.CHANGE_NAME.addEventListener("submit", changeName);

CHAT.START.addEventListener("click", scrollToBottom);
CHAT.LIST.addEventListener("scroll", renderMessageOnScrollThrottle);
CHAT.LIST.addEventListener("scroll", showArrowOnScrollThrottle);
