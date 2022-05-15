"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODAL = exports.FORM = exports.BUTTONS = exports.CHAT = void 0;
exports.CHAT = {
    BODY: document.querySelector(".chat"),
    BOX: document.querySelector(".chat__box"),
    LIST: document.querySelector(".chat__list"),
    EXIT: document.querySelector("[data-action='logout']"),
    NAME: document.querySelector("[name='name']"),
    INPUT: document.querySelector(".form__input"),
    START: document.querySelector(".chat__btn--start"),
};
exports.BUTTONS = {
    SETTINGS: (document.querySelector("[data-modal='settings']")),
    CONFIRMATION: (document.querySelector("button[data-modal='confirmation']")),
    AUTHORIZATION: (document.querySelector("[data-modal='authorization']")),
    EXIT: document.querySelector("[data-action='logout']"),
};
exports.FORM = {
    CONFIRMATION: (document.querySelector(".form[data-modal='confirmation']")),
    BODY: document.querySelector(".form"),
    CHANGE_NAME: (document.querySelector("[data-action='changeName']")),
    LOGIN: document.querySelector("[data-action='login']"),
    CODE: document.querySelector("[data-action='code']"),
    MESSAGE: (document.querySelector("[data-action='sendMessage']")),
};
exports.MODAL = {
    SETTINGS: document.querySelector("#settings"),
    CONFIRMATION: document.querySelector("#confirmation"),
    AUTHORIZATION: document.querySelector("#authorization"),
};
