"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMessageOnScroll = exports.renderMessages = void 0;
const uiElements_1 = require("./uiElements");
const config_1 = require("./config");
const message_1 = require("./message");
function renderMessages(messages, startMessage = config_1.MESSAGES.START, countMessage = config_1.MESSAGES.END) {
    if (!messages.length)
        return;
    for (let i = startMessage; i <= countMessage; i++) {
        const newMessage = new message_1.Message(messages[messages.length - i]);
        newMessage.appendItem(uiElements_1.CHAT.LIST);
    }
    config_1.MESSAGES.START += 20;
    config_1.MESSAGES.END += 20;
}
exports.renderMessages = renderMessages;
function renderMessageOnScroll() {
    const positionScroll = uiElements_1.CHAT.LIST.scrollTop - uiElements_1.CHAT.LIST.offsetHeight;
    const threshold = positionScroll + uiElements_1.CHAT.LIST.scrollHeight <= 50;
    if (threshold)
        renderMessages(config_1.MESSAGES.STORAGE);
}
exports.renderMessageOnScroll = renderMessageOnScroll;
