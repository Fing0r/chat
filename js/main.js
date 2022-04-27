import { UI_ELEMENTS } from "./uiElements";
import { sendMessage, getCode } from "./view";
import newModal from "./modal";

UI_ELEMENTS.SETTINGS.addEventListener("click", newModal);
UI_ELEMENTS.AUTHORIZATION.addEventListener("click", (e) => newModal(e).submitCloseModal());
UI_ELEMENTS.CONFIRMATION.addEventListener("submit", getCode);
UI_ELEMENTS.FORM.addEventListener("submit", sendMessage);
