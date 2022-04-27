import { format, getTime } from "date-fns";

const AUTHOR = {
  USER: "Я: ",
  COMPANION: "Собеседник мой: ",
};

export default class Message {
  constructor(text, author, status, time) {
    this.text = text;
    this.author = author || AUTHOR.USER;
    this.status = status || "unread";
    this.time = time || getTime(new Date());
  }

  createObj() {
    return {
      text: this.text,
      author: this.author,
      status: this.status,
      time: this.time,
    };
  }

  createItem() {
    this.template = document.querySelector("#messageTemplate");
    this.item = document.createElement("li");
    this.item.classList.add("message");
    this.item.append(this.template.content.cloneNode(true));
    this.itemAuthor = this.item.querySelector(".message__name");
    this.itemText = this.item.querySelector(".message__text");
    this.itemTime = this.item.querySelector(".message__time");

    const isAuthorNotUser = this.author !== AUTHOR.USER;
    if (isAuthorNotUser) this.item.classList.add("message--received");
    if (this.status) this.item.classList.add("message--sent");

    this.itemAuthor.textContent = this.author;
    this.itemText.textContent = this.text;
    this.itemTime.textContent = format(new Date(this.time), "HH:mm");

    return this.item;
  }

  scrollToBottom() {
    this.item.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }
}
