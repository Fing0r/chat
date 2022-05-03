import { CHAT } from "./uiElements";
import { MESSAGES } from "./config";
import Message from "./message";

export function renderMessages(messages, startMessage = MESSAGES.START, countMessage = MESSAGES.END) {
  if (!messages.length) return;

  for (let i = startMessage; i <= countMessage; i++) {
    const newMessage = new Message(messages[messages.length - i]);
    newMessage.appendItem(CHAT.LIST);
  }

  MESSAGES.START += 20;
  MESSAGES.END += 20;
}

export function renderMessageOnScroll() {
  const positionScroll = CHAT.LIST.scrollTop - CHAT.LIST.offsetHeight;
  const threshold = positionScroll + CHAT.LIST.scrollHeight <= 50;
  if (threshold) renderMessages(MESSAGES.STORAGE);
}
