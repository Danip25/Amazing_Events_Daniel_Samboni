import { data } from "./data.js";
import { onUpdateCard } from "./card.js";
import { getCategories } from './filters.js'



// Obtener el contenedor de las cards
const cardContainer = document.getElementById("cardContainer")


cardContainer.innerHTML = ""

console.log(cardContainer)


// Crear la estructura de la card


    

// Llenlas cards con la informacion
// const myCard = createCard("Daniel", "../resources/img/food_fair.jpg", "Esta es una descripcion", "2500", "3")

const events = data.events

getCategories(events)

onUpdateCard(events)



/*

    <div class="card h-300px">
        <img src="./resources/img/food_fair.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Festival of the collectivities</h5>
          <p class="card-text">
            <span class="fw-semibold">Description:</span> "Enjoy your favorite dishes from different countries in a unique event for the whole family." <br>
            <span class="fw-semibold">Price:</span> 5
          </p>
          <a href="./pages/Details.html" class="btn btn-primary">Details</a>
        </div>
    </div>

*/
