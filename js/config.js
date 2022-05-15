"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.METHODS = exports.HEADERS = exports.MESSAGES = exports.AUTHOR = exports.URL = void 0;
exports.URL = {
    AUTHORIZATION: "https://mighty-cove-31255.herokuapp.com/api/user",
    CHANGE_NAME: "https://mighty-cove-31255.herokuapp.com/api/user/me",
    MESSAGE: "https://mighty-cove-31255.herokuapp.com/api/messages",
    SOCKET: "wss://mighty-cove-31255.herokuapp.com/websockets?",
};
exports.AUTHOR = {
    NAME: "Я",
    COMPANION: "Собеседник мой",
    EMAIL: "",
};
exports.MESSAGES = {
    START: 1,
    END: 20,
    STORAGE: [],
    USER: document.getElementsByClassName("message--user"),
};
exports.HEADERS = {
    JSON: "application/json;charset=utf-8",
    TOKEN: (token) => `Bearer ${token}`,
};
exports.METHODS = {
    PATCH: "PATCH",
    POST: "POST",
};
