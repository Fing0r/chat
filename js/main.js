import { throttle, scrollToBottom, showArrowOnScroll } from "./helper";
import { UI_ELEMENTS, FORM } from "./uiElements";
import {
  sendMessage, getCode, saveToken, changeName, loadPage, signOut,
} from "./view";
import newModal from "./modal";
import { renderMessageOnScroll } from "./render";

const renderMessageOnScrollThrottle = throttle(renderMessageOnScroll, 300);
const showArrowOnScrollThrottle = throttle(showArrowOnScroll, 200);

document.addEventListener("DOMContentLoaded", loadPage);

UI_ELEMENTS.SETTINGS.addEventListener("click", newModal);
UI_ELEMENTS.AUTHORIZATION.addEventListener("click", newModal);

FORM.CODE.addEventListener("submit", getCode);
FORM.MESSAGE.addEventListener("submit", sendMessage);
FORM.LOGIN.addEventListener("submit", saveToken);
FORM.CHANGE_NAME.addEventListener("submit", changeName);

UI_ELEMENTS.EXIT.addEventListener("click", signOut);
UI_ELEMENTS.START.addEventListener("click", scrollToBottom);
UI_ELEMENTS.MESSAGES.addEventListener("scroll", renderMessageOnScrollThrottle);
UI_ELEMENTS.MESSAGES.addEventListener("scroll", showArrowOnScrollThrottle);
