export const CHAT = {
  BODY: document.querySelector(".chat"),
  BOX: document.querySelector(".chat__box"),
  LIST: document.querySelector(".chat__list"),
  EXIT: document.querySelector("[data-action='logout']"),
  NAME: document.querySelector("[name='name']"),
  INPUT: document.querySelector(".form__input"),

  START: document.querySelector(".chat__btn--start"),
};

export const BUTTONS = {
  SETTINGS: document.querySelector("[data-modal='settings']"),
  CONFIRMATION: document.querySelector("[data-modal='confirmation']"),
  AUTHORIZATION: document.querySelector("[data-modal='authorization']"),
  EXIT: document.querySelector("[data-action='logout']"),
};

export const FORM = {
  BODY: document.querySelector(".form"),
  CHANGE_NAME: document.querySelector("[data-action='changeName']"),
  LOGIN: document.querySelector("[data-action='login']"),
  CODE: document.querySelector("[data-action='code']"),
  MESSAGE: document.querySelector("[data-action='sendMessage']"),
};

export const MODAL = {
  SETTINGS: document.querySelector("#settings"),
  CONFIRMATION: document.querySelector("#confirmation"),
  AUTHORIZATION: document.querySelector("#authorization"),
};
