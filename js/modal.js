"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INIT_MODAL = void 0;
class Modal {
    constructor(dataset) {
        this.dataset = dataset;
        this.modal = document.querySelector(`#${this.dataset}`);
        this.closeBtn = this.modal.querySelector(".modal__close");
        this.form = this.modal.querySelector(".form");
    }
}
class ModalActions extends Modal {
    constructor(dataset) {
        super(dataset);
        this.eventListener();
    }
    closeOutsideOfContent(e) {
        if (e.target === this.modal)
            this.close();
    }
    close() {
        this.modal.classList.remove("open");
    }
    open() {
        this.modal.classList.add("open");
    }
    eventListener() {
        this.closeBtn.addEventListener("click", this.close.bind(this));
        this.modal.addEventListener("click", (e) => this.closeOutsideOfContent(e));
    }
}
exports.INIT_MODAL = {
    SETTINGS: new ModalActions("settings"),
    AUTHORIZATION: new ModalActions("authorization"),
    CONFIRMATION: new ModalActions("confirmation"),
};
