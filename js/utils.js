"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = exports.hideAlert = exports.hideMessage = exports.showMessage = exports.setCookiesToken = exports.showArrowOnScroll = exports.scrollToBottom = exports.getToken = exports.getValue = exports.clearForm = exports.checkJSON = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
const uiElements_1 = require("./uiElements");
const CustomError_1 = require("./CustomError");
function checkJSON(data, parse) {
    try {
        return parse ? JSON.parse(data) : JSON.stringify(data);
    }
    catch (error) {
        if (error instanceof Error)
            alert(`Ошибка JSON: ${error.message}`);
    }
}
exports.checkJSON = checkJSON;
function clearForm(e) {
    const form = e.target.closest(".form");
    form.reset();
}
exports.clearForm = clearForm;
function getValue(e) {
    const input = e.target.querySelector(".form__input");
    const { value } = input;
    return value.trim();
}
exports.getValue = getValue;
function getToken() {
    const token = js_cookie_1.default.get("token");
    if (!token)
        throw new CustomError_1.TokenRequiredError("Вы не авторизованны");
    return token;
}
exports.getToken = getToken;
function scrollToBottom() {
    const element = uiElements_1.CHAT.LIST.firstElementChild;
    element.scrollIntoView({ block: "end", behavior: "smooth" });
}
exports.scrollToBottom = scrollToBottom;
function showArrowOnScroll() {
    const isNotStart = (-uiElements_1.CHAT.LIST.scrollTop > uiElements_1.CHAT.LIST.offsetHeight);
    uiElements_1.CHAT.START.style.opacity = isNotStart ? "1" : '';
    uiElements_1.CHAT.START.style.visibility = isNotStart ? "visible" : '';
}
exports.showArrowOnScroll = showArrowOnScroll;
function setCookiesToken(token) {
    const lifetime = new Date(new Date().getTime() + 3600 * 10000);
    js_cookie_1.default.set("token", token, { expires: lifetime });
}
exports.setCookiesToken = setCookiesToken;
function showMessage(e, text) {
    const form = e.target;
    const formError = form.querySelector(".alert");
    form.classList.add("note");
    if (typeof text === "string")
        formError.textContent = text;
}
exports.showMessage = showMessage;
function hideMessage(e) {
    const form = e.target;
    const formError = form.querySelector(".alert");
    if (!formError)
        return;
    form.classList.remove("note");
}
exports.hideMessage = hideMessage;
function hideAlert(e) {
    const input = e.target;
    if (!input.dataset.input)
        return;
    const form = input.closest(".form");
    const isNotHasNote = !form.classList.contains("note");
    if (isNotHasNote)
        return;
    form.classList.remove("note");
}
exports.hideAlert = hideAlert;
function throttle(func, waitFor) {
    const now = () => new Date().getTime();
    const resetStartTime = () => startTime = now();
    let timeout;
    let startTime = now() - waitFor;
    return (...args) => new Promise((resolve) => {
        const timeLeft = (startTime + waitFor) - now();
        if (timeout) {
            clearTimeout(timeout);
        }
        if (startTime + waitFor <= now()) {
            resetStartTime();
            resolve(func(...args));
        }
        else {
            timeout = setTimeout(() => {
                resetStartTime();
                resolve(func(...args));
            }, timeLeft);
        }
    });
}
exports.throttle = throttle;
// export function debounce(func: Function, ms: number) {
//     let timer: number;
//
//     return (...args: any) => {
//         const funcCall = () => func.apply(this, args) as F;
//         clearTimeout(timer);
//
//         timer = setTimeout(funcCall, ms);
//     };
// }
// export function throttle(func: Function, ms: number): Function {
//     let stopper: boolean = false;
//     let thisFunc: Function | null;
//     let thisArguments: any;
//
//     function wrapper(this: Function | null, ...args: any) {
//         if (stopper) {
//             thisFunc = this;
//             thisArguments = args;
//             return;
//         }
//
//         stopper = true;
//         func.apply(this, args);
//
//         setTimeout(() => {
//             stopper = false;
//             if (thisArguments) {
//                 wrapper.apply(thisFunc, thisArguments);
//                 thisFunc = null;
//                 thisArguments = null;
//             }
//         }, ms);
//     }
//     return wrapper;
// }
