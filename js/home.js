import { loadData } from "./modules/data.js";
import { onUpdateCard } from "./modules/card.js";
import { getCategories } from './modules/filters.js'

const cardContainer = document.getElementById("cardContainer")
cardContainer.innerHTML = ""
loadData().then(data => {
  // Obtener el contenedor de las cards
  
  
  cardContainer.innerHTML = ""
  
  console.log(cardContainer)
  
  
  // Llenas cards con la informacion
  
  const events = data.events
  
  getCategories(events)
  
  onUpdateCard(events)
  

})  

