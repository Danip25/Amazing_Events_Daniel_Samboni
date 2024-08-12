import { data } from "./data.js";
import { onUpdateCard } from "./card.js";
import { getTimeDate } from "./date.js";
import { getCategories } from './filters.js'


const cardContainer = document.getElementById('cardContainer')
cardContainer.innerHTML = ""

const events = data.events
const currentDate = data.currentDate

const pastEvents = []



const currentDateNumber = getTimeDate(currentDate)

for(let event of events) {
    const dateTimeNumber = getTimeDate(event.date)
    if(dateTimeNumber < currentDateNumber) {
        pastEvents.push(event)
    }
}


getCategories(pastEvents)

onUpdateCard(pastEvents)

