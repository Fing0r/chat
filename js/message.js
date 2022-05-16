"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const date_fns_1 = require("date-fns");
const config_1 = require("./config");
class Message {
    constructor({ text, user: { email, name }, createdAt }) {
        this.email = email;
        this.text = text;
        this.name = name;
        this.time = createdAt || (0, date_fns_1.getTime)(new Date());
        this.template = document.querySelector("#messageTemplate");
    }
    createItem() {
        const clone = this.template.content.cloneNode(true);
        const item = clone.querySelector(".message");
        const itemAuthor = item.querySelector(".message__name");
        const itemText = item.querySelector(".message__text");
        const itemTime = item.querySelector(".message__time");
        const isAuthorUser = this.email === config_1.AUTHOR.EMAIL;
        if (isAuthorUser)
            item.classList.add("message--user");
        itemAuthor.textContent = isAuthorUser ? config_1.AUTHOR.NAME : this.name;
        itemText.textContent = this.text;
        itemTime.textContent = (0, date_fns_1.format)(new Date(this.time), "HH:mm");
        return clone;
    }
    appendItem(element) {
        element.append(this.createItem());
    }
    prependItem(element) {
        element.prepend(this.createItem());
    }
}
exports.Message = Message;
