function ModalActions(dataset) {
  this.dataModal = dataset;
  this.modal = document.querySelector(`#${this.dataModal}`);
  this.closeBtn = this.modal.querySelector(".modal__close");
  this.form = this.modal.querySelector(".form");

  this.closeModalOutsideOfContent = (e) => {
    if (e.target !== this.modal) return;
    this.closeModal();
  };

  this.hideAlert = (e) => {
    this.input = e.target;

    const isNotHasDataInput = this.input.dataset.input === undefined;
    if (isNotHasDataInput) return;

    const isNotHasNote = !this.form.classList.contains("note");
    if (isNotHasNote) return;

    this.form.classList.remove("note");
  };

  this.openModal = () => this.modal.classList.add("open");
  this.closeModal = () => this.modal.classList.remove("open");
  this.form.addEventListener("input", this.hideAlert);
  this.closeBtn.addEventListener("click", this.closeModal);
  this.modal.addEventListener("click", this.closeModalOutsideOfContent);
}

const INIT_MODAL = {
  SETTINGS: new ModalActions("settings"),
  AUTHORIZATION: new ModalActions("authorization"),
  CONFIRMATION: new ModalActions("confirmation"),
};

export default INIT_MODAL;
