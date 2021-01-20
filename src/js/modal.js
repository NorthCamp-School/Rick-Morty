import { displayCards } from "./card"

const backGround = document.querySelector('body');

const modalParent = document.querySelector('.padre');
const modal = document.createElement('div');
modal.setAttribute('class', 'api_modal');
modalParent.appendChild(modal); 


export function openPopup(event){

   const image = event.currentTarget.querySelector("[data-image]").getAttribute('data-image');
   const name = event.currentTarget.querySelector("[data-name]").getAttribute('data-name');
   const status = event.currentTarget.querySelector("[data-status]").getAttribute("data-status");
   const species = event.currentTarget.querySelector("[data-species]").getAttribute("data-species");
   const gender = event.currentTarget.querySelector("[data-gender]").getAttribute("data-gender");const origin = event.currentTarget.querySelector("[data-origin]").getAttribute("data-origin");const location = event.currentTarget.querySelector("[data-location]").getAttribute("data-location");
  
        
   const clickedChar = `
   <div class="modal"> 
       <div class="modal__container">
            <div clas="modal__box-img">
                <img class="modal__img" src="${image}">
            </div>
            <div class="modal__box-text">
                <h3 class="modal__title">${name}</h3>
                <div class="modal__description">
                    <p class="modal__description-info"><span class="modal__circle"></span><span class="modal__status">${status}</span>-<span class="modal__type">${species}</span></p>
                </div>
                <div class="modal__details">
                    <p class="modal__details-text-light">Gender</p>
                    <p class="modal__details-text-bold">${gender}</p>
                </div>
                <div class="modal__details">
                    <p class="modal__details-text-light">Origin</p>
                   <p class="modal__details-text-bold">${origin}</p>
                </div>
                <div class="modal__details">
                    <p class="modal__details-text-light">Last known Location:</p>
                    <p class="modal__details-text-bold">${location}</p>
                </div>
            </div>
        </div>  
    </div> 
    `

    modal.innerHTML = clickedChar; 

    displayModal();

    hideModal(); 
}

export function displayModal(){
    modalParent.classList.add('padre');
    modal.classList.add('api_modal');
    backGround.classList.add('api_class')
    
}

export function hideModal(){

    modal.addEventListener('click', function(event){
        modal.remove()
        backGround.classList.remove('api_class')
    })    

}

