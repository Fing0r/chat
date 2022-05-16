"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = exports.loadPage = exports.saveToken = exports.changeName = exports.getCode = exports.sendMessage = exports.codeIsThere = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
const uiElements_1 = require("./uiElements");
const request_1 = require("./request");
const config_1 = require("./config");
const modal_1 = require("./modal");
const utils_1 = require("./utils");
const render_1 = require("./render");
const loader_1 = require("./loader");
const webSocket_1 = require("./webSocket");
const CustomError_1 = require("./CustomError");
function codeIsThere() {
    modal_1.INIT_MODAL.AUTHORIZATION.close();
    modal_1.INIT_MODAL.CONFIRMATION.open();
}
exports.codeIsThere = codeIsThere;
function sendMessage(e) {
    e.preventDefault();
    const { value } = uiElements_1.CHAT.INPUT;
    if (!value)
        return;
    webSocket_1.SOCKET.sendMessage(value);
    uiElements_1.CHAT.INPUT.value = "";
}
exports.sendMessage = sendMessage;
function getCode(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const value = (0, utils_1.getValue)(e);
            if (!value)
                return;
            yield (0, request_1.requestForCode)(value);
            modal_1.INIT_MODAL.AUTHORIZATION.close();
            modal_1.INIT_MODAL.CONFIRMATION.open();
            (0, utils_1.hideMessage)(e);
            (0, utils_1.clearForm)(e);
        }
        catch (error) {
            if (error instanceof CustomError_1.ResponseError) {
                (0, utils_1.showMessage)(e, error.message);
            }
            else if (error instanceof Error) {
                (0, utils_1.showMessage)(e, error.message);
            }
        }
    });
}
exports.getCode = getCode;
function changeNameOldMessages() {
    [...config_1.MESSAGES.USER].forEach((element) => {
        const messageName = element.querySelector(".message__name");
        messageName.textContent = config_1.AUTHOR.NAME;
    });
}
function changeName(e) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            e.preventDefault();
            const { value: name } = e.target.querySelector(".form__input");
            if (!name)
                return;
            (0, utils_1.showMessage)(e, "Вы сменили ник");
            config_1.AUTHOR.NAME = name.trim();
            changeNameOldMessages();
            const token = (0, utils_1.getToken)();
            if (typeof token === "string") {
                yield (0, request_1.requestForChangeName)(name, token);
                webSocket_1.SOCKET.reconnect(token);
            }
        }
        catch (error) {
            if (error instanceof CustomError_1.TokenRequiredError) {
                (0, utils_1.showMessage)(e, error.message);
            }
            else if (error instanceof CustomError_1.ResponseError) {
                (0, utils_1.showMessage)(e, error.message);
            }
            else {
                throw error;
            }
        }
    });
}
exports.changeName = changeName;
function stateUIElements(email, name) {
    config_1.AUTHOR.EMAIL = email || "";
    config_1.AUTHOR.NAME = name || "Я";
    uiElements_1.CHAT.NAME.value = config_1.AUTHOR.NAME;
    uiElements_1.BUTTONS.EXIT.style.display = name ? "block" : "none";
    uiElements_1.BUTTONS.AUTHORIZATION.style.display = name ? "none" : "block";
}
function getAccountData(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, request_1.requestForAccountData)(token);
        if (!response.ok)
            throw new CustomError_1.ResponseError("Ошибка запроса");
        const { email, name } = yield response.json();
        stateUIElements(email, name);
    });
}
function saveToken(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const chatBtns = document.querySelector(".chat__btns");
        try {
            e.preventDefault();
            const token = (0, utils_1.getValue)(e);
            if (!token)
                return;
            yield getAccountData(token);
            (0, utils_1.setCookiesToken)(token);
            modal_1.INIT_MODAL.CONFIRMATION.close();
            webSocket_1.SOCKET.init(token);
            chatBtns.style.zIndex = "101";
            (0, loader_1.loader)(uiElements_1.CHAT.BOX);
            (0, utils_1.clearForm)(e);
            config_1.MESSAGES.STORAGE = yield (0, request_1.importMessage)();
            (0, render_1.renderMessages)(config_1.MESSAGES.STORAGE);
        }
        catch (error) {
            (0, utils_1.showMessage)(e, "Введите верный код");
            chatBtns.style.zIndex = "101";
            (0, loader_1.loader)(uiElements_1.CHAT.BOX);
        }
        finally {
            chatBtns.style.zIndex = '';
            (0, loader_1.loader)(uiElements_1.CHAT.BOX);
        }
    });
}
exports.saveToken = saveToken;
function loadPage() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, loader_1.loader)(uiElements_1.CHAT.BODY);
        try {
            const token = (0, utils_1.getToken)();
            if (typeof token === "string") {
                yield getAccountData(token);
                webSocket_1.SOCKET.init(token);
            }
            config_1.MESSAGES.STORAGE = yield (0, request_1.importMessage)();
            (0, render_1.renderMessages)(config_1.MESSAGES.STORAGE);
        }
        catch (error) {
            stateUIElements();
            if (error instanceof CustomError_1.TokenRequiredError) {
                console.log(error.message);
            }
            else if (error instanceof CustomError_1.ResponseError) {
                console.log(error.message);
            }
            else {
                throw error;
            }
        }
        finally {
            (0, loader_1.loader)(uiElements_1.CHAT.BODY);
        }
    });
}
exports.loadPage = loadPage;
function signOut() {
    js_cookie_1.default.remove("token");
    webSocket_1.SOCKET.disconnect();
    uiElements_1.CHAT.LIST.replaceChildren();
    stateUIElements();
    config_1.MESSAGES.COUNT_RENDER = 20;
    config_1.MESSAGES.STORAGE = [];
}
exports.signOut = signOut;
// export async function getCode(e: {target: HTMLElement, preventDefault(): void}): Promise<void> {
