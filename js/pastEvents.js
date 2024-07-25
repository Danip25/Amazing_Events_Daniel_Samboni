import { data } from "./data.js";
import { createCard } from "./card.js";
import { getTimeDate } from "./date.js";

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


for(let pastEvent of pastEvents) {
    const card = createCard(pastEvent.name, pastEvent.image, pastEvent.description, pastEvent.price, pastEvent._id)
    cardContainer.appendChild(card)
}


