import { URL, METHODS, HEADERS } from "./config";
import { ResponseError } from "./CustomError";
import { MessageInfo } from "./message";

export async function requestForCode(email: string): Promise<void | ResponseError> {
    const body: string = JSON.stringify({ email });
    const headers = {
        "Content-Type": HEADERS.JSON,
    };
    const method: string = METHODS.POST;
    const options = { method, body, headers };

    const response: Response = await fetch(URL.AUTHORIZATION, options);

    if (!response.ok) throw new ResponseError("при запросе кода");
}

export async function requestForChangeName(name: string, token: string): Promise<void | ResponseError> {
    const body: string = JSON.stringify({ name });
    const headers = {
        "Content-Type": HEADERS.JSON,
        Authorization: HEADERS.TOKEN(token),
    };
    const method: string = METHODS.PATCH;
    const options = { method, body, headers };

    const response: Response = await fetch(URL.AUTHORIZATION, options);

    if (!response.ok) throw new ResponseError("при смене имени");
}

export async function importMessage(): Promise<MessageInfo[]> {
    const response = await fetch(URL.MESSAGE);
    if (!response.ok) throw new ResponseError("Неполадки на сервере");
    const { messages }: {messages: MessageInfo[]} = await response.json();
    return messages;
}

export function requestForAccountData(token: string): Promise<Response> {
    const headers = {
        Authorization: HEADERS.TOKEN(token),
    };
    const options = { headers };

    return fetch(URL.CHANGE_NAME, options);
}
