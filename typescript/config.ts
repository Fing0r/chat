interface Url {
  AUTHORIZATION: string;
  CHANGE_NAME: string;
  MESSAGE: string;
  SOCKET: string;
}

type MessageInfo = {
  text: string;
  user: {
    email: string;
    name: string;
  };
  createdAt: string;
};

interface Author {
  NAME: string;
  COMPANION: string;
  EMAIL: string;
}

interface Headers {
  JSON: string;
  TOKEN: (token: string) => string
}

interface Methods {
  PATCH: string;
  POST: string;
}

interface Messages {
  START: number;
  END: number;
  STORAGE: MessageInfo[];
  USER: HTMLCollectionOf<Element>;
}

export const URL: Url = {
  AUTHORIZATION: "https://mighty-cove-31255.herokuapp.com/api/user",
  CHANGE_NAME: "https://mighty-cove-31255.herokuapp.com/api/user/me",
  MESSAGE: "https://mighty-cove-31255.herokuapp.com/api/messages",
  SOCKET: "wss://mighty-cove-31255.herokuapp.com/websockets?",
};

export const AUTHOR: Author = {
  NAME: "Я",
  COMPANION: "Собеседник мой",
  EMAIL: "",
};

export const MESSAGES: Messages = {
  START: 1,
  END: 20,
  STORAGE: [],
  USER: document.getElementsByClassName("message--user"),
};

export const HEADERS: Headers = {
  JSON: "application/json;charset=utf-8",
  TOKEN: (token: string): string => `Bearer ${token}`,
};

export const METHODS: Methods = {
  PATCH: "PATCH",
  POST: "POST",
};
