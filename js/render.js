"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMessageOnScroll = exports.renderMessages = void 0;
const uiElements_1 = require("./uiElements");
const config_1 = require("./config");
const message_1 = require("./message");
function renderMessages(messages, countMessage = config_1.MESSAGES.COUNT_RENDER) {
    if (!messages.length)
        return;
    const startRenderMessage = config_1.MESSAGES.COUNT_RENDER - 20;
    for (let i = startRenderMessage; i <= countMessage; i++) {
        const messageNumber = messages.length - i;
        const messageData = messages[messageNumber];
        const newMessage = new message_1.Message(messageData);
        newMessage.appendItem(uiElements_1.CHAT.LIST);
    }
    config_1.MESSAGES.COUNT_RENDER += 20;
}
exports.renderMessages = renderMessages;
function renderMessageOnScroll() {
    const positionScroll = uiElements_1.CHAT.LIST.scrollTop - uiElements_1.CHAT.LIST.offsetHeight;
    const threshold = positionScroll + uiElements_1.CHAT.LIST.scrollHeight <= 50;
    if (threshold)
        renderMessages(config_1.MESSAGES.STORAGE);
}
exports.renderMessageOnScroll = renderMessageOnScroll;
