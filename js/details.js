import { loadData } from "./modules/data.js";

const detailContainer = document.getElementById("detailContainer");
detailContainer.innerHTML = ""
loadData().then((data) => {
  const events = data.events;

  const getSearchParams = () => {
    let search = location.search;
    search = search.slice(1);
    search = search.split("=");
    return Object.fromEntries([search]);
  };

  const searchParams = getSearchParams();

  const id = searchParams.id;


  const event = events.find((event) => event._id == id);

  console.log(event, id);

  const setDetails = () => {
    detailContainer.innerHTML = "";
    const card = `
            <div class="card mb-3">
        <div class="row g-0 flex-1 bg-color-smooth">
          <div class="col-md-4">
            <img src="${event.image}" class="img-fluid rounded-start h-100 object-fit-cover h-full" alt="${event.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-2xl text-center">${event.name}</h5>
              <article class="card-text text-xl bg-white">
                <span class="fw-semibold">Date:</span> ${event.date}<br>
                <span class="fw-semibold">Description:</span> ${event.description} <br>
                <span class="fw-semibold">Category:</span> ${event.category} <br>
                <span class="fw-semibold">Place:</span> ${event.place} <br>
                <span class="fw-semibold">Capacity:</span> ${event.capacity} <br>
                <span class="fw-semibold">Assistance:</span> ${event.assistance} <br>
                <span class="fw-semibold text-right">Price:</span> $${event.price} USD
              </article>
            </div>
          </div>
        </div>
      </div>
    `;
    detailContainer.innerHTML = card;
  };

  setDetails();
})
.catch((error) => {
  console.error(error);
  alert("An error occurred. Please try again later.");
});
