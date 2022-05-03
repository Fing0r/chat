import Cookies from "js-cookie";
import { CHAT } from "./uiElements";

export const clearForm = (e) => e.target.closest(".form").reset();

export function getValue(e) {
  const input = e.target.querySelector(".form__input");
  const { value } = input;
  if (!value) throw new Error("Введите что-то");
  return value.trim();
}

export function getToken() {
  const token = Cookies.get("token");
  if (!token) throw new Error("Вы не авторизованны");
  return token;
}

export function scrollToBottom() {
  const element = CHAT.LIST.firstElementChild;
  const options = { block: "end", behavior: "smooth" };

  element.scrollIntoView(options);
}

export function showArrowOnScroll() {
  const isNotStart = (-CHAT.LIST.scrollTop > CHAT.LIST.offsetHeight);
  CHAT.START.style.opacity = isNotStart ? "1" : null;
  CHAT.START.style.visibility = isNotStart ? "visible" : null;
}

export function setCookiesToken(token) {
  const lifetime = new Date(new Date().getTime() + 3600 * 10000);
  Cookies.set("token", token, { expires: lifetime });
}

export function showMessage(e, text) {
  const form = e.target;
  const formError = form.querySelector(".alert");
  form.classList.add("note");
  formError.textContent = text;
}

export function hideMessage(e) {
  const form = e.target;
  const formError = form.querySelector(".alert");
  if (!formError) return;
  form.classList.remove("note");
}

export function throttle(func, ms) {
  let stopper = false;
  let thisFunc;
  let thisArguments;

  function wrapper(...args) {
    if (stopper) {
      thisFunc = this;
      thisArguments = args;
      return;
    }

    stopper = true;
    func.apply(this, args);

    setTimeout(() => {
      stopper = false;
      if (thisArguments) {
        wrapper.apply(thisFunc, thisArguments);
        thisFunc = null;
        thisArguments = null;
      }
    }, ms);
  }
  return wrapper;
}

export function debounce(func, ms) {
  let timer;

  return (...args) => {
    const funcCall = () => func.apply(this, args);
    clearTimeout(timer);

    timer = setTimeout(funcCall, ms);
  };
}
