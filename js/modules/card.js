const cardContainer = document.getElementById("cardContainer")


function createCard (name, image, desc, _price, id) {

    const card = document.createElement("div")
    // card.classList.add("card");
    // card.classList.add("h-300px");
    card.className = "card h-300px"
    
    const img = document.createElement('img') //<img/>
    img.setAttribute('src', image)
    img.className = "card-img-top"

    const cardBody = document.createElement('div')
    cardBody.className="card-body"

    const title = document.createElement('h5')
    title.className= "card-title"
    title.innerHTML= name // <h5>sdfsdfsdf</h5>

    const text = document.createElement('p')
    text.className= "card-text"
    
    const description = document.createElement('span')
    description.className = "fw-semibold"
    description.innerHTML = "Description: "
    
    
    const price = document.createElement('span')
    price.className = "fw-semibold"
    price.innerHTML = "Price: $"

    const br = document.createElement('br')

    text.appendChild(description)
    text.innerHTML = text.innerHTML + desc
    text.appendChild(br)
    text.appendChild(price)
    text.innerHTML = text.innerHTML + _price


    const detailLink = document.createElement('a')
    let link = "./pages/Details.html?id="+id
    if(window.location.pathname.includes('/pages')){
        link = "Details.html?id="+id
    }
    detailLink.setAttribute('href', link)
    detailLink.className = "btn btn-primary"
    detailLink.innerHTML = "Details"

    cardBody.appendChild(title)
    cardBody.appendChild(text)
    cardBody.appendChild(detailLink)

    card.appendChild(img)
    card.appendChild(cardBody)
    cardContainer.appendChild(card)
}

export const onUpdateCard = (list) => {
    cardContainer.innerHTML = ""
    list.forEach(item => createCard(item.name, item.image, item.description, item.price, item._id) )
    
}

// for(let event of events) {
//     const card = createCard(event.name, event.image, event.description, event.price, event._id)
//     cardContainer.appendChild(card)
//   }
  