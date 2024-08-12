import { data } from "./data.js"

const events = data.events


const getSearchParams = ()=>{
    let search = location.search
    search = search.slice(1)
    search = search.split('=')
    return Object.fromEntries([search])
}

const searchParams = getSearchParams()

const id = searchParams.id

const detailContainer = document.getElementById("detailContainer")



const event = events.find(event => event._id === id)

console.log(event)

const setDetails = ()=> {
    detailContainer.innerHTML = ""
    const card = `
            <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${event.image}" class="img-fluid rounded-start h-100" alt="${event.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text">
                <span class="fw-semibold">Date:</span> ${event.date}<br>
                <span class="fw-semibold">Description:</span> ${event.description} <br>
                <span class="fw-semibold">Category:</span> ${event.category} <br>
                <span class="fw-semibold">Place:</span> ${event.place} <br>
                <span class="fw-semibold">Capacity:</span> ${event.capacity} <br>
                <span class="fw-semibold">Assistance:</span> ${event.assistance} <br>
                <span class="fw-semibold">Price:</span> ${event.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    `
    detailContainer.innerHTML = card
}

setDetails()

/*

        _id: "639c723b992482e5f2834be9",
        name: "Collectivities Party",
        image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        date: "2022-12-12",
        description:
          "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        assistance: 42756,
        price: 5,
        __v: 0,
*/
