export const CHAT = {
  BODY: <HTMLDivElement>document.querySelector(".chat"),
  BOX: <HTMLDivElement>document.querySelector(".chat__box"),
  LIST: <HTMLUListElement>document.querySelector(".chat__list"),
  EXIT: <HTMLButtonElement>document.querySelector("[data-action='logout']"),
  NAME: <HTMLInputElement>document.querySelector("[name='name']"),
  INPUT: <HTMLInputElement>document.querySelector(".form__input"),
  START: <HTMLButtonElement>document.querySelector(".chat__btn--start"),
};

export const BUTTONS = {
  SETTINGS: <HTMLButtonElement>(document.querySelector("[data-modal='settings']")),
  CONFIRMATION: <HTMLButtonElement>(document.querySelector("button[data-modal='confirmation']")),
  AUTHORIZATION: <HTMLButtonElement>(document.querySelector("[data-modal='authorization']")),
  EXIT: <HTMLButtonElement>document.querySelector("[data-action='logout']"),
};

export const FORM = {
  CONFIRMATION: <HTMLFormElement>(document.querySelector(".form[data-modal='confirmation']")),
  BODY: <HTMLFormElement>document.querySelector(".form"),
  CHANGE_NAME: <HTMLFormElement>(document.querySelector("[data-action='changeName']")),
  LOGIN: <HTMLFormElement>document.querySelector("[data-action='login']"),
  CODE: <HTMLFormElement>document.querySelector("[data-action='code']"),
  MESSAGE: <HTMLFormElement>(document.querySelector("[data-action='sendMessage']")),
};

export const MODAL = {
  SETTINGS: <HTMLDivElement>document.querySelector("#settings"),
  CONFIRMATION: <HTMLDivElement>document.querySelector("#confirmation"),
  AUTHORIZATION: <HTMLDivElement>document.querySelector("#authorization"),
};
