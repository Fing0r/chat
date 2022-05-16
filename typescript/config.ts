import {IAuthor, IUrl, IMessages, IHeaders, IMethods} from "./interfaces"

export const URL: IUrl = {
  AUTHORIZATION: "https://mighty-cove-31255.herokuapp.com/api/user",
  CHANGE_NAME: "https://mighty-cove-31255.herokuapp.com/api/user/me",
  MESSAGE: "https://mighty-cove-31255.herokuapp.com/api/messages",
  SOCKET: "wss://mighty-cove-31255.herokuapp.com/websockets?",
};

export const AUTHOR: IAuthor = {
  NAME: "Я",
  COMPANION: "Собеседник мой",
  EMAIL: "",
};

export const MESSAGES: IMessages = {
  COUNT_RENDER: 21,
  STORAGE: [],
  USER: document.getElementsByClassName("message--user"),
};

export const HEADERS: IHeaders = {
  JSON: "application/json;charset=utf-8",
  TOKEN: (token: string): string => `Bearer ${token}`,
};

export const METHODS: IMethods = {
  PATCH: "PATCH",
  POST: "POST",
};
