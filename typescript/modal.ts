import { IModal, IModalActions } from "./interfaces"

class Modal implements IModal {
  modal: HTMLDivElement;
  closeBtn: HTMLButtonElement;
  form: HTMLFormElement;

  constructor(private readonly dataset: string) {
    this.modal = document.querySelector(`#${this.dataset}`) as HTMLDivElement;
    this.closeBtn = this.modal.querySelector(".modal__close") as HTMLButtonElement;
    this.form = this.modal.querySelector(".form") as HTMLFormElement;
  }
}

class ModalActions extends Modal implements IModalActions {
  constructor(dataset: string) {
    super(dataset);
    this.eventListener()
  }

  closeOutsideOfContent(e: MouseEvent) {
    if (e.target === this.modal) this.close();
  }

  close() {
    this.modal.classList.remove("open");
  }

  open() {
    this.modal.classList.add("open");
  }

  eventListener() {
    this.closeBtn.addEventListener("click", this.close.bind(this));
    this.modal.addEventListener("click", (e:MouseEvent) => this.closeOutsideOfContent(e));
  }
}

export const INIT_MODAL = {
  SETTINGS: new ModalActions("settings"),
  AUTHORIZATION: new ModalActions("authorization"),
  CONFIRMATION: new ModalActions("confirmation"),
};
