import { loadData } from "./modules/data.js";

const highestAssistance = document.getElementById("highestAssistanceField");
const lowestAssistance = document.getElementById("lowestAssistanceField");
const largestCapacity = document.getElementById("largerCapacityField");

const upcomingEventsContainer = document.getElementById("upcomingEvents");
const pastEventsContainer = document.getElementById("pastEvents");
upcomingEventsContainer.innerHTML = "";
pastEventsContainer.innerHTML = "";


loadData().then((data) => {
  const events = data.events;

  const pastEvents = events.filter((event) =>
    event.hasOwnProperty("assistance")
  );

  const upcomingEvents = events.filter((event) =>
    event.hasOwnProperty("estimate")
  );

  const eventWithMoreAssistance = pastEvents.reduce((acc, event) => {
    if (event.assistance > acc.assistance) {
      return event;
    }
    return acc;
  });

  const eventWithLessAssistance = pastEvents.reduce((acc, event) => {
    if (event.assistance < acc.assistance) {
      return event;
    }
    return acc;
  });

  const eventsWithLargerCapacity = pastEvents.reduce((acc, event) => {
    if (event.capacity > acc.capacity) {
      return event;
    }
    return acc;
  });

  highestAssistance.innerHTML = `
        <h5 class="card-title">${eventWithMoreAssistance.name}</h5>
        <p class="card-text">
            <span class="fw-semibold">Assistance:</span> ${eventWithMoreAssistance.assistance} <br>
        </p>
    `;

  lowestAssistance.innerHTML = `
        <h5 class="card-title">${eventWithLessAssistance.name}</h5>
        <p class="card-text">
            <span class="fw-semibold">Assistance:</span> ${eventWithLessAssistance.assistance} <br>
        </p>
    `;

  largestCapacity.innerHTML = `
        <h5 class="card-title">${eventsWithLargerCapacity.name}</h5>
        <p class="card-text">
            <span class="fw-semibold">Capacity:</span> ${eventsWithLargerCapacity.capacity} <br>
        </p>
    `;

  // Dividir en categorias
  // Calcular porcentajes de assistance y revenues (price * estimate) por categoria

  const categories = upcomingEvents.reduce((acc, event) => {
    // Si la categoria no existe, la crea
    if (!acc[event.category]) {
      acc[event.category] = {
        events: [event],
        assistance: event.estimate,
        revenues: event.price * event.estimate,
      };
    } else {
      acc[event.category].events.push(event);
      acc[event.category].assistance += event.estimate;
      acc[event.category].revenues += event.price * event.estimate;
    }

    return acc;
  }, {});

  const totalAssistance = upcomingEvents.reduce((acc, event) => {
    return acc + event.estimate;
  }, 0);


  for (let category in categories) {
    const percentage = (categories[category].assistance / totalAssistance) * 100;
    upcomingEventsContainer.innerHTML += `
                <tr>
                  <td>
                    <p class="text-center">
                         <b>${category}</b> 
                    </p>
                  </td>
                  <td>
                    <p class="text-center">
                         <b>$${categories[category].revenues.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</b> USD 
                    </p>
                  </td>
                  <td>
                  
                    <p class="text-center">
                         <b>${percentage.toString() ? percentage.toFixed(1) : percentage}%</b>
                    </p>
                  </td>
                </tr>
    `;
  }

  const categoriesPast = pastEvents.reduce((acc, event) => {
    // Si la categoria no existe, la crea
    if (!acc[event.category]) {
      acc[event.category] = {
        events: [event],
        assistance: event.assistance,
        revenues: event.price * event.assistance,
      };
    } else {
      acc[event.category].events.push(event);
      acc[event.category].assistance += event.assistance;
      acc[event.category].revenues += event.price * event.assistance;
    }

    return acc;
  }, {});

  const totalAssistancePast = pastEvents.reduce((acc, event) => {
    return acc + event.assistance;
  }, 0);

  for (let category in categoriesPast) {
    const percentage = ((categoriesPast[category].assistance / totalAssistancePast) * 100).toFixed(1);
    pastEventsContainer.innerHTML += `
                <tr>
                  <td>
                    <p class="text-center">
                         <b>${category}</b> 
                    </p>
                  </td>
                  <td>
                    <p class="text-center">
                         <b>$${categoriesPast[category].revenues.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</b> USD 
                    </p>
                  </td>
                  <td>
                  
                    <p class="text-center">
                         <b>${percentage}%</b>
                    </p>
                  </td>
                </tr>
    `;
  }

});
