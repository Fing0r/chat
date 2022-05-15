import { CHAT } from "./uiElements";
import { MESSAGES } from "./config";
import { Message, MessageInfo } from "./message";

export function renderMessages(
  messages: MessageInfo[],
  startMessage: number = MESSAGES.START,
  countMessage: number = MESSAGES.END
): void {
  if (!messages.length) return;

  for (let i: number = startMessage; i <= countMessage; i++) {
    const newMessage = new Message(messages[messages.length - i]);
    newMessage.appendItem(CHAT.LIST);
  }

  MESSAGES.START += 20;
  MESSAGES.END += 20;
}

export function renderMessageOnScroll(): void {
  const positionScroll: number = CHAT.LIST.scrollTop - CHAT.LIST.offsetHeight;
  const threshold: boolean = positionScroll + CHAT.LIST.scrollHeight <= 50;
  if (threshold) renderMessages(MESSAGES.STORAGE);
}
