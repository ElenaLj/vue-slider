// ARRAY IMMAGINI
const imagesArray = [
    "img/01.jpg", // indice 0
    "img/02.jpg", // indice 1
    "img/03.jpg", // indice 2
    "img/04.jpg", // indice 3
    "img/05.jpg", // indice 4
];

const myThumbnail = document.querySelector(".thumbnail");
const mySlider = document.querySelector(".slider");

 for (let i = 0; i < imagesArray.length; i++) {
    mySlider.innerHTML += `
    <div class="slider-items">
        <img src="${imagesArray[i]}" alt="">
    </div>
    `

    myThumbnail.innerHTML += `
     <div class="img-container">
         <img src="${imagesArray[i]}" alt="">
     </div>
     `
 };

//selezioniamo tutto per rendere il primo attivo
const imgContainer = document.getElementsByClassName("img-container");
// console.log(imgContainer);

const sliderItems = document.getElementsByClassName("slider-items");
// console.log(sliderItems);

// creo una variabile per incrememntare l'indice di volta in volta
let imgActive = 0; 
imgContainer[imgActive].classList.add("active");
sliderItems[imgActive].classList.add("active");
    
//Quando clicco sulla freccia cambia immagine
const up = document.querySelector(".arrow-up");
const down = document.querySelector(".arrow-down");

down.addEventListener("click", function() {
   if (imgActive < imagesArray.length - 1) {
        //rimuovere classe active al primo elemento
        imgContainer[imgActive].classList.remove("active");
        sliderItems[imgActive].classList.remove("active");
        //incrememnto
        imgActive++;

        //aggiugno classe all'elemento incremmentato
        imgContainer[imgActive].classList.add("active");
        sliderItems[imgActive].classList.add("active");
   }

});

up.addEventListener("click", function (){

    if (imgActive > 0) {
        //togliere la classe active
    imgContainer[imgActive].classList.remove("active");
    sliderItems[imgActive].classList.remove("active");
    
    //incremento l'indice 
    imgActive--;

    //aggiungo la classe active all'elemento incrementato
    imgContainer[imgActive].classList.add("active");
    sliderItems[imgActive].classList.add("active");
    }
});

