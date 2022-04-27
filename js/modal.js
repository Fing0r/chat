function ModalActions(e) {
  this.dataModal = e.target.dataset.modal;
  this.modal = document.querySelector(`#${this.dataModal}`);
  this.closeBtn = this.modal.querySelector(".modal__close");
  this.form = this.modal.querySelector(".modal__form");

  this.closeModal = () => {
    this.modal.classList.remove("open");
    this.removeListeners();
  };

  this.submitCloseModal = () => {
    this.form.addEventListener("submit", this.closeModal);
  };

  this.closeModalOutsideOfContent = (event) => {
    if (event.target !== this.modal) return;
    this.closeModal();
  };

  this.removeListeners = () => {
    this.modal.removeEventListener("click", this.closeModal);
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.modal.removeEventListener("click", this.closeModalOutsideOfContent);
  };

  this.modal.classList.add("open");
  this.closeBtn.addEventListener("click", this.closeModal);
  this.modal.addEventListener("click", this.closeModalOutsideOfContent);
}

export default function newModal(e) {
  return new ModalActions(e);
}
