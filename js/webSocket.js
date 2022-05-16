"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOCKET = void 0;
const message_1 = require("./message");
const uiElements_1 = require("./uiElements");
const utils_1 = require("./utils");
const config_1 = require("./config");
class Socket {
    constructor() {
        this.socket = null;
    }
    init(token) {
        this.socket = new WebSocket(`${config_1.URL.SOCKET}${token}`);
    }
    disconnect() {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.close(1000, "Работа закончена");
    }
    reconnect(token) {
        this.disconnect();
        this.init(token);
    }
}
class ListenerSocket extends Socket {
    init(token) {
        var _a, _b;
        super.init(token);
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.addEventListener("close", (e) => this.close(e));
        (_b = this.socket) === null || _b === void 0 ? void 0 : _b.addEventListener("error", this.error);
    }
    error() {
        console.log("Ошибка соединения");
    }
    close(e) {
        if (e.wasClean) {
            console.log(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`);
        }
        else {
            console.log("[close] Соединение прервано");
            const token = (0, utils_1.getToken)();
            if (typeof token === "string")
                this.init(token);
        }
    }
    ;
}
class MessageSocket extends ListenerSocket {
    init(token) {
        var _a;
        super.init(token);
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.addEventListener("message", (e) => this.renderMessage(e));
    }
    sendMessage(text) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send((0, utils_1.checkJSON)({ text }, false));
    }
    renderMessage(e) {
        const newData = (0, utils_1.checkJSON)(e.data, true);
        const message = new message_1.Message(newData);
        message.prependItem(uiElements_1.CHAT.LIST);
        (0, utils_1.scrollToBottom)();
    }
    ;
}
exports.SOCKET = new MessageSocket();
