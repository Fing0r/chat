export const UI_ELEMENTS = {
  CHAT: document.querySelector(".chat"),
  DIALOG: document.querySelector(".chat__dialog"),
  SETTINGS: document.querySelector("[data-modal='settings']"),
  CONFIRMATION: document.querySelector("[data-modal='confirmation']"),
  AUTHORIZATION: document.querySelector("[data-modal='authorization']"),
  EXIT: document.querySelector("[data-action='logout']"),
  LOGIN: document.querySelector("[data-action='login']"),
  CHANGE_NAME: document.querySelector(".modal__form--settings"),
  FORM: document.querySelector(".form"),
  NAME: document.querySelector("[name='name']"),
  INPUT: document.querySelector(".form__input"),
  MESSAGES: document.querySelector(".chat__list"),
  START: document.querySelector(".chat__btn--start"),
};

export const FORM = {
  CHANGE_NAME: document.querySelector("[data-action='changeName']"),
  LOGIN: document.querySelector("[data-action='login']"),
  CODE: document.querySelector("[data-action='code']"),
  MESSAGE: document.querySelector("[data-action='sendMessage']"),
};

export const MODAL = {
  SETTINGS: document.querySelector("#settings"),
  CONFIRMATION: document.querySelector("#confirmation"),
  AUTHORIZATION: document.querySelector("#authorization"),
  FORM_CODE: document.querySelector("[data-action='code']"),
};
