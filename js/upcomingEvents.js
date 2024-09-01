import { loadData } from "./modules/data.js";
import { onUpdateCard } from "./modules/card.js";
import { getTimeDate } from "./modules/date.js";
import { getCategories } from './modules/filters.js'

loadData().then(data =>{
const cardContainer = document.getElementById('cardContainer')
cardContainer.innerHTML = ""

const events = data.events
const currentDate = data.currentDate

const upcomingEvents = []



const currentDateNumber = getTimeDate(currentDate)

for(let event of events) {
    const dateTimeNumber = getTimeDate(event.date)
    if(dateTimeNumber > currentDateNumber) {
        upcomingEvents.push(event)
    }
}


getCategories(upcomingEvents)

onUpdateCard(upcomingEvents)
})