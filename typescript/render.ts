import { CHAT } from "./uiElements";
import { MESSAGES } from "./config";
import { Message } from "./message";
import { IMessageInfo} from "./interfaces"


export function renderMessages(
  messages: IMessageInfo[],
  countMessage: number = MESSAGES.COUNT_RENDER
): void {
  if (!messages.length) return;
  const startRenderMessage: number = MESSAGES.COUNT_RENDER - 20;

  for (let i: number = startRenderMessage; i <= countMessage; i++) {
    const messageNumber: number = messages.length - i;
    const messageData: IMessageInfo = messages[messageNumber];

    const newMessage: Message = new Message(messageData);
    newMessage.appendItem(CHAT.LIST);
  }

  MESSAGES.COUNT_RENDER += 20;
}

export function renderMessageOnScroll(): void {
  const positionScroll: number = CHAT.LIST.scrollTop - CHAT.LIST.offsetHeight;
  const threshold: boolean = positionScroll + CHAT.LIST.scrollHeight <= 50;
  if (threshold) renderMessages(MESSAGES.STORAGE);
}
