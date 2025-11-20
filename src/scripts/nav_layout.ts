const HAMBURGER_BUTTON_ID: string = "nav-hamburger-button";
const HAMBURGER_BAR_1_ID: string = "nav-hamburger-bar-1";
const HAMBURGER_BAR_2_ID: string = "nav-hamburger-bar-2";
const HAMBURGER_BAR_3_ID: string = "nav-hamburger-bar-3";
const HAMBURGER_MENU_ID: string = "nav-hamburger-menu";

const hamburger_button: HTMLElement | null = document.getElementById(HAMBURGER_BUTTON_ID);
const hamburger_bar_1: HTMLElement | null = document.getElementById(HAMBURGER_BAR_1_ID);
const hamburger_bar_2: HTMLElement | null = document.getElementById(HAMBURGER_BAR_2_ID);
const hamburger_bar_3: HTMLElement | null = document.getElementById(HAMBURGER_BAR_3_ID);
const hamburger_menu: HTMLElement | null = document.getElementById(HAMBURGER_MENU_ID);

if (
    hamburger_button === null ||
    hamburger_bar_1 === null ||
    hamburger_bar_2 === null ||
    hamburger_bar_3 === null ||
    hamburger_menu === null
) {
    throw new Error("Failed to find hamburger menu element!");
}

let is_hamburger_open: boolean = false;

hamburger_button.addEventListener("click", () => {
    is_hamburger_open = !is_hamburger_open;

    if (is_hamburger_open) {
        hamburger_bar_1.style.setProperty("transform", "translateY(0.75rem) rotate(-45deg)");
        hamburger_bar_2.style.setProperty("transform", "rotate(45deg)");
        hamburger_bar_3.style.setProperty("transform", "scale(0.0)");

        hamburger_menu.style.setProperty("transform", "translateX(0)");
    }
    else {
        hamburger_bar_1.style.removeProperty("transform");
        hamburger_bar_2.style.removeProperty("transform");
        hamburger_bar_3.style.removeProperty("transform");

        hamburger_menu.style.removeProperty("transform");
    }
});