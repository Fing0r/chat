"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loader = void 0;
function loader(element) {
    const loaderEl = element.querySelector(".loader");
    const loaderElActive = element.querySelector(".loader.active");
    const animateEl = element.querySelector(".sk-chase");
    loaderEl.classList.toggle("active");
    animateEl.classList.toggle("active");
    if (loaderElActive) {
        loaderElActive.focus();
        loaderElActive.addEventListener("blur", () => {
            loaderElActive.focus();
        });
    }
}
exports.loader = loader;
