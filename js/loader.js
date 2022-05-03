export default function loader(element) {
  element.querySelector(".loader").classList.toggle("active");
  element.querySelector(".sk-chase").classList.toggle("active");
  const elem = element.querySelector(".loader.active");

  if (elem) {
    elem.focus();

    elem.addEventListener("blur", () => {
      elem.focus();
    });
  }
}
