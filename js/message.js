import { format, getTime } from "date-fns";
import { AUTHOR } from "./config";

export default class Message {
  constructor({
    text, user: { email, name }, createdAt: time, status,
  }) {
    this.email = email;
    this.text = text;
    this.name = name;
    this.time = time || getTime(new Date());
    this.status = status || "unread";
  }

  createItem() {
    this.template = document.querySelector("#messageTemplate");
    this.item = document.createElement("li");
    this.item.classList.add("message");
    this.item.append(this.template.content.cloneNode(true));
    this.itemAuthor = this.item.querySelector(".message__name");
    this.itemText = this.item.querySelector(".message__text");
    this.itemTime = this.item.querySelector(".message__time");

    const isAuthorUser = this.email === AUTHOR.EMAIL;
    if (isAuthorUser) this.item.classList.add("message--user");

    if (this.status) this.item.classList.add("message--sent");

    this.itemAuthor.textContent = isAuthorUser ? AUTHOR.NAME : this.name;
    this.itemText.textContent = this.text;
    this.itemTime.textContent = format(new Date(this.time), "HH:mm");

    return this.item;
  }

  appendItem = (element) => element.append(this.createItem());

  prependItem = (element) => element.prepend(this.createItem());
}
