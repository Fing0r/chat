import Cookies from "js-cookie";
import { CHAT } from "./uiElements";
import { TokenRequiredError } from "./CustomError";

export function checkJSON(data: string | object , parse: boolean) {
    try {
        return parse ? JSON.parse(<string>data) : JSON.stringify(data);
    } catch (error) {
        if (error instanceof Error) alert(`Ошибка JSON: ${error.message}`)
    }
}

export function clearForm(e: {target: HTMLElement}): void{
    const form = e.target.closest(".form") as HTMLFormElement
    form.reset();
}

export function getValue(e: { target: HTMLElement }): string {
    const input = e.target.querySelector(".form__input") as HTMLInputElement;
    const { value }: { value: string } = input;
    return value.trim();
}

export function getToken(): string | TokenRequiredError {
    const token: string | undefined = Cookies.get("token");
    if (!token) throw new TokenRequiredError("Вы не авторизованны");
    return token;
}

export function scrollToBottom(): void {
    const element = CHAT.LIST.firstElementChild as HTMLLIElement;
    element.scrollIntoView({ block: "end", behavior: "smooth" });
}

export function showArrowOnScroll(): void {
    const isNotStart: boolean = (-CHAT.LIST.scrollTop > CHAT.LIST.offsetHeight);
    CHAT.START.style.opacity = isNotStart ? "1" : '';
    CHAT.START.style.visibility = isNotStart ? "visible" : '';
}

export function setCookiesToken(token: string) {
    const lifetime: Date = new Date(new Date().getTime() + 3600 * 10000);
    Cookies.set("token", token, { expires: lifetime });
}

export function showMessage(e: Event, text: string | unknown) {
    const form = e.target as HTMLFormElement;
    const formError = form.querySelector(".alert") as HTMLSpanElement;
    form.classList.add("note");
    if (typeof text === "string") formError.textContent = text;
}

export function hideMessage(e: Event) {
    const form = e.target as HTMLFormElement;
    const formError = form.querySelector(".alert") as HTMLSpanElement;
    if (!formError) return;
    form.classList.remove("note");
}

export function hideAlert(e: Event): void {
    const input = e.target as HTMLInputElement;
    console.log("=> input", input);
    if (!input.dataset.input) return;
    console.log(123)
    const form = input.closest(".form") as HTMLFormElement
    const isNotHasNote: boolean = !form.classList.contains("note");

    if (isNotHasNote) return;
    form.classList.remove("note");
}

export function throttle<F extends (...args: any[]) => any>(func: F, waitFor: number) {
    const now = () => new Date().getTime()
    const resetStartTime = () => startTime = now()
    let timeout: number
    let startTime: number = now() - waitFor

    return (...args: Parameters<F>): Promise<ReturnType<F>> =>
        new Promise((resolve) => {
            const timeLeft = (startTime + waitFor) - now()
            if (timeout) {
                clearTimeout(timeout)
            }
            if (startTime + waitFor <= now()) {
                resetStartTime()
                resolve(func(...args))
            } else {
                timeout = setTimeout(() => {
                    resetStartTime()
                    resolve(func(...args))
                }, timeLeft)
            }
        })
}

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
