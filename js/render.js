import { UI_ELEMENTS } from "./uiElements";
import { MESSAGES } from "./config";
import Message from "./message";

export function renderMessages(messages, startMessage = MESSAGES.START, countMessage = MESSAGES.END) {
  if (!messages.length) return;

  for (let i = startMessage; i <= countMessage; i++) {
    const newMessage = new Message(messages[messages.length - i]);
    newMessage.appendItem(UI_ELEMENTS.MESSAGES);
  }

  MESSAGES.START += 20;
  MESSAGES.END += 20;
}

export function renderMessageOnScroll() {
  const positionScroll = UI_ELEMENTS.MESSAGES.scrollTop - UI_ELEMENTS.MESSAGES.offsetHeight;
  const threshold = positionScroll + UI_ELEMENTS.MESSAGES.scrollHeight <= 50;
  if (threshold) renderMessages(MESSAGES.STORAGE);
}
