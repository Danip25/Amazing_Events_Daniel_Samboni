import { onUpdateCard } from "./card.js"

const checkboxContainer = document.getElementById("checkboxContainer")
const showMessageError = document.getElementById("showMessageError")


checkboxContainer.innerHTML = ""

let listEvents;


export const getCategories = (events) => {

    listEvents = events

    const categoriesArray = events.map(event => event.category)

    const categoriesSet = new Set(categoriesArray)
    
    const categories = Array.from(categoriesSet)

    categories.forEach(category => createCheckBox(category))
    
    createSearchInput()
}

const createSearchInput = ()=> {
    const input = document.createElement('input')
    input.placeholder = "Busca por nombre"
    input.id = "search"
    input.addEventListener('input', applyFilters)
    checkboxContainer.appendChild(input)
}

const createCheckBox = (value)=>{
    
    
    const div = document.createElement('div')
    div.className = "form-check"
    
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.className = "form-check-input"
    checkbox.id = value
    checkbox.value = value

    checkbox.addEventListener('change', applyFilters)
    
      const label = document.createElement('label')
      label.htmlFor = value
      label.className = "form-check-label"
      label.innerText = value


      div.appendChild(checkbox)
      div.appendChild(label)


      checkboxContainer.appendChild(div)


//     const element = `
//           <div class="form-check">
//           <input class="form-check-input" type="checkbox" value="${value}" id="flexCheckDefault">
//           <label class="form-check-label" for="flexCheckDefault">
//             ${value}
//           </label>
//         </div>
//     `
//   checkboxContainer.innerHTML += element
}

export const applyFilters = ()=>{
    const getCheckedElements = document.querySelectorAll("input[type='checkbox']:checked")
    const getSearchElement = document.getElementById('search')
    const search = getSearchElement.value
    const checkedArray = Array.from(getCheckedElements)
    const checkedCheckbox = checkedArray.map(checkbox => checkbox.value)
    console.log(checkedCheckbox)

    let filterEvents = listEvents

    if(search.length > 0) {
        filterEvents = filterEvents.filter(event => event.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(checkedCheckbox.length > 0) {
        filterEvents = filterEvents.filter(event =>  checkedCheckbox.includes(event.category) )
    }

    showErrorMessage(filterEvents.length === 0) 
    onUpdateCard(filterEvents)
}

const showErrorMessage = (show)=> {
    showMessageError.innerHTML = ""
    console.log('show :>> ', show, showMessageError);
    showMessageError.className = "d-flex flex-column  justify-content-center align-items-center"
    showMessageError.style.minHeight = "60vh"
    if(show === false) {
        showMessageError.className += "d-none"
        return
    }
    const error = `
        <img src="https://img.freepik.com/premium-vector/hand-drawn-no-data-illustration_23-2150696443.jpg" style='height: 250px'/>
        <p>No se encontraron resultados</p>
    `
    showMessageError.innerHTML += error
}