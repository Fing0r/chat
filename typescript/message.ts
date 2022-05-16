import { format, getTime } from "date-fns";
import { AUTHOR } from "./config";
import { IMessageInfo } from "./interfaces"

export class Message {
  private readonly text: string;
  private readonly email: string;
  private readonly name: string;
  private readonly time: string | number;
  private readonly template: HTMLTemplateElement;

  constructor({ text, user: { email, name }, createdAt }: IMessageInfo) {
    this.email = email;
    this.text = text;
    this.name = name;
    this.time = createdAt || getTime(new Date());
    this.template = document.querySelector("#messageTemplate") as HTMLTemplateElement;
  }

  createItem(): DocumentFragment {
    const clone = this.template.content.cloneNode(true) as DocumentFragment;
    const item = clone.querySelector(".message") as HTMLLIElement;
    const itemAuthor = item.querySelector(".message__name") as HTMLSpanElement;
    const itemText = item.querySelector(".message__text") as HTMLSpanElement;
    const itemTime = item.querySelector(".message__time") as HTMLDivElement;

    const isAuthorUser: boolean = this.email === AUTHOR.EMAIL;
    if (isAuthorUser) item.classList.add("message--user");
    itemAuthor.textContent = isAuthorUser ? AUTHOR.NAME : this.name;

    itemText.textContent = this.text;
    itemTime.textContent = format(new Date(this.time), "HH:mm");

    return clone;
  }

  appendItem(element: HTMLUListElement): void {
    element.append(this.createItem());
  }

  prependItem(element: HTMLUListElement): void {
    element.prepend(this.createItem());
  }
}
