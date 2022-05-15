export function loader(element: HTMLElement): void {
    const loaderEl = element.querySelector(".loader") as HTMLElement
    const loaderElActive = element.querySelector(".loader.active") as HTMLElement;
    const animateEl = element.querySelector(".sk-chase") as HTMLElement

    loaderEl.classList.toggle("active");
    animateEl.classList.toggle("active");

    if (loaderElActive) {
        loaderElActive.focus();

        loaderElActive.addEventListener("blur", () => {
            loaderElActive.focus();
        });
    }
}
