import { Message } from "./message";
import { IMessageInfo, ISocket, IListenerSocket, IMessageSocket } from "./interfaces"
import { CHAT } from "./uiElements";
import {scrollToBottom, getToken, checkJSON} from "./utils";
import { URL } from "./config";

class Socket implements ISocket{
    socket: WebSocket | null;

    constructor() {
        this.socket = null;
    }

    init(token: string) {
        this.socket =  new WebSocket(`${URL.SOCKET}${token}`)
    }

    disconnect() {
        this.socket?.close(1000, "Работа закончена");
    }

    reconnect(token: string) {
        this.disconnect();
        this.init(token);
    }
}

class ListenerSocket extends Socket implements IListenerSocket{
    init(token: string) {
        super.init(token)
        this.socket?.addEventListener("close", (e) => this.close(e));
        this.socket?.addEventListener("error", this.error);
    }

    error() {
        console.log("Ошибка соединения");
    }

    close(e: CloseEvent) {
        if (e.wasClean) {
            console.log(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`);
        } else {
            console.log("[close] Соединение прервано");
            const token = getToken()
            if (typeof token === "string") this.init(token);
        }
    };
}

class MessageSocket extends ListenerSocket implements IMessageSocket{
    init(token: string) {
        super.init(token)
        this.socket?.addEventListener("message", (e) => this.renderMessage(e));
    }

    sendMessage(text: string) {
        this.socket?.send(checkJSON({ text } , false));
    }

    renderMessage(e: MessageEvent) {
        const newData: IMessageInfo = checkJSON(e.data , true);
        const message: Message = new Message(newData);
        message.prependItem(CHAT.LIST);
        scrollToBottom();
    };
}

export const SOCKET: MessageSocket = new MessageSocket();
