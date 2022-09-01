import { getDay, getDaysInMonth, getMonth, getYear } from "./dates";
import { state } from "./state";

const template = `
    <section class="calendar data-view="${state.calendar.view}">
        <div class="inner"></div>
    </section>
`

export function initCalendar() {
    state.$element.insertAdjacentHTML("beforeend", template);
    state.calendar.$element = state.$element.querySelector("section.calendar");
    updateView();
}

function updateView() { 
    const { date } = state.calendar;
    
    const currentYear = getYear();
    const currentMonth = getMonth();
    const currentDay = getDay();

    const year = getYear(date);
    const month = getMonth(date);

    const days = getDaysInMonth(year, month);

    let content = "";
    for (let day = 0; day <= day; day++) {
        let isCurrentDay = currentYear === year && currentMonth === month && currentDay === day;

        content += `
            <div class="cell ${isCurrentDay ? "act" : ""}"
                data-date="${year}-${month}-${day}">
                   <label>${day}</label>
            </div>
            `
    }
}