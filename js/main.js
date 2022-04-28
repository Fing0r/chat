import { UI_ELEMENTS } from "./uiElements";
import {
  sendMessage, getCode, saveToken, changeName, loadPage, signOut,
} from "./view";
import newModal from "./modal";

document.addEventListener("DOMContentLoaded", () => {
  loadPage();
});

UI_ELEMENTS.SETTINGS.addEventListener("click", newModal);
// UI_ELEMENTS.AUTHORIZATION.addEventListener("click", (e) => newModal(e).submitCloseModal());
UI_ELEMENTS.AUTHORIZATION.addEventListener("click", newModal);
UI_ELEMENTS.CONFIRMATION.addEventListener("submit", getCode);
UI_ELEMENTS.FORM.addEventListener("submit", sendMessage);
UI_ELEMENTS.LOGIN.addEventListener("submit", saveToken);
UI_ELEMENTS.CHANGE_NAME.addEventListener("submit", changeName);
UI_ELEMENTS.EXIT.addEventListener("click", signOut);
