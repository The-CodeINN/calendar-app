import { state } from "./state";

const template = `
    <div id="calendar">
        <header class="main">
            <a class="logo">📅</a>
            <button>Today</button>

            <nav>

            <button data-dir="prev">←</button>
            <button data-dir="next">→<button>  

            </nav>

            <h2> September 2022 </h2>
        </header>
    </div>
`;

export function initHeader() {
    state.$element.insertAdjacentHTML("beforeend", template);

    const header = document.querySelector("header.main");
    header.addEventListener("click", ev => {
        const { target } = ev;

        switch (target.tagName) { 
            case "BUTTON": {
                const parent = target.parentElement;

                parent.tagName === "NAV" ? OnNavClick(target) : onTodayClick();
            }
        }

        // Todo: Listen for calendar change - update label
    });

    function OnNavClick(target) {

    }

    function onTodayClick() { 
        
    }
}
