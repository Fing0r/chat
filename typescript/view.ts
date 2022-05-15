import Cookies from "js-cookie";
import { CHAT, BUTTONS } from "./uiElements";
import {
    requestForCode, requestForChangeName, importMessage, requestForAccountData,
} from "./request";
import { AUTHOR, MESSAGES } from "./config";
import { INIT_MODAL } from "./modal";
import {
    showMessage, hideMessage, setCookiesToken, clearForm, getValue, getToken,
} from "./helper";
import { renderMessages } from "./render";
import { loader } from "./loader";
import { SOCKET } from "./webSocket";
import { ResponseError } from "./CustomError";

export function codeIsThere() {
    INIT_MODAL.AUTHORIZATION.close();
    INIT_MODAL.CONFIRMATION.open();
}

export function sendMessage(e: Event): void {
    e.preventDefault();
    const { value }: {value: string} = CHAT.INPUT;
    if (!value) return;
    SOCKET.sendMessage(value);
    CHAT.INPUT.value = "";
}

export async function getCode(e: any): Promise<void> {
    e.preventDefault();

    try {
        const value: string = getValue(e);
        if (!value) return;
        await requestForCode(value);
        INIT_MODAL.AUTHORIZATION.close();
        INIT_MODAL.CONFIRMATION.open();
        hideMessage(e);
        clearForm(e);
    } catch (error) {
        if (error instanceof ResponseError) console.log(error.message);
        if (error instanceof Error) showMessage(e, error.message);
    }
}

function changeNameOldMessages(): void {
    [...MESSAGES.USER].forEach((element) => {
        const messageName = element.querySelector(".message__name") as HTMLLIElement;
        messageName.textContent = AUTHOR.NAME;
    });
}

export async function changeName(e: any): Promise<void> {
    try {
        e.preventDefault();
        const { value: name }: {value: string} = e.target.querySelector(".form__input") as HTMLInputElement;
        if (!name) return;
        showMessage(e, "Вы сменили ник");
        AUTHOR.NAME = name.trim();
        changeNameOldMessages();
        const token = getToken();
        if (typeof token === "string") {
            await requestForChangeName(name, token);
            SOCKET.reconnect(token);
        }
    } catch (error) {
        if (error instanceof Error) showMessage(e, error.message);
    }
}

function stateUIElements(email?: string, name?: string): void {
    AUTHOR.EMAIL = email || "";
    AUTHOR.NAME = name || "Я";
    CHAT.NAME.value = AUTHOR.NAME;
    BUTTONS.EXIT.style.display = name ? "block" : "none";
    BUTTONS.AUTHORIZATION.style.display = name ? "none" : "block";
}

async function getAccountData(token: string): Promise<void> {
    const response = await requestForAccountData(token);
    if (!response.ok) throw new Error("Ошибка запроса");
    const { email, name } = await response.json();
    stateUIElements(email, name);
}

export async function saveToken(e: any): Promise<void> {
    const chatBtns = document.querySelector(".chat__btns") as HTMLLIElement;
    try {
        e.preventDefault();
        const token = getValue(e);
        if (!token) return;
        await getAccountData(token);
        setCookiesToken(token);

        INIT_MODAL.CONFIRMATION.close();
        SOCKET.init(token);

        chatBtns.style.zIndex = "101";
        loader(CHAT.BOX);
        clearForm(e);
        MESSAGES.STORAGE = await importMessage();
        renderMessages(MESSAGES.STORAGE);
    } catch (error) {
        showMessage(e, "Введите верный код");
        chatBtns.style.zIndex = "101";
        loader(CHAT.BOX);
    } finally {
        chatBtns.style.zIndex = '';
        loader(CHAT.BOX);
    }
}

export async function loadPage(): Promise<void> {
    loader(CHAT.BODY);
    try {
        const token = getToken();
        if (typeof token === "string") {
            await getAccountData(token);
            SOCKET.init(token);
        }
        MESSAGES.STORAGE = await importMessage();
        renderMessages(MESSAGES.STORAGE);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        stateUIElements();
    } finally {
        loader(CHAT.BODY);
    }
}

export function signOut(): void {
    Cookies.remove("token");
    SOCKET.disconnect();
    CHAT.LIST.replaceChildren();
    stateUIElements();
    MESSAGES.START = 1;
    MESSAGES.END = 20;
    MESSAGES.STORAGE = [];
}



// export async function getCode(e: {target: HTMLElement, preventDefault(): void}): Promise<void> {
