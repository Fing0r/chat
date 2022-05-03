import { URL } from "./config";

export function requestForCode(email) {
  const data = { email };
  const headers = {
    "Content-Type": "application/json;charset=utf-8",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  };

  return fetch(URL.AUTHORIZATION, options);
}

export function requestForChangeName(name, token) {
  const data = { name };
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json;charset=utf-8",
  };
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers,
  };

  return fetch(URL.AUTHORIZATION, options);
}

export async function importMessage() {
  const response = await fetch(URL.MESSAGE);
  if (!response.ok) throw new Error("Неполадки на сервере");
  const { messages } = await response.json();
  console.log("=> messages", messages);
  return messages;
}

export function requestForAccountData(token) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = { headers };

  return fetch(URL.CHANGE_NAME, options);
}
