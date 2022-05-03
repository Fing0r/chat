import Message from "./message";
import { CHAT } from "./uiElements";
import { getToken, scrollToBottom } from "./helper";
import { URL } from "./config";

function ConnectSocket() {
  this.data = (e) => JSON.parse(e.data);
  this.checkMessage = () => this.socket.addEventListener("message", this.renderMessage);
  this.sendMessage = (text) => this.socket.send(JSON.stringify({ text }));
  this.socket = null;

  this.renderMessage = (e) => {
    const message = new Message(this.data(e));
    message.prependItem(CHAT.LIST);
    scrollToBottom();
  };

  this.checkError = () => {
    this.socket.addEventListener("error", () => {
      console.log(`[error] ${error.message}`);
    });
  };

  this.checkClose = () => {
    this.socket.addEventListener("close", (e) => {
      if (e.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`);
      } else {
        console.log("[close] Соединение прервано");
        const token = getToken();
        this.init(token);
      }
    });
  };

  this.disconnect = () => {
    this.socket.close(1000, "Работа закончена");
  };

  this.init = (token) => {
    this.socket = new WebSocket(`${URL.SOCKET}${token}`);
    this.checkMessage();
    this.checkError();
    this.checkClose();
  };
}

const SOCKET = new ConnectSocket();

export default SOCKET;
