//creazione della struttura base vue.js
const app = new Vue({
    el: "#root",
    data: {
        houses: [
            { 
                image: "img/game-of-thrones.jpeg",
                title: "Game of Thrones",
                text: "All Men Must Die"
            },
            { 
                image: "img/house-of-lannister.jpeg",
                title: "House of Lannister",
                text: "Hear Me Roar"
            },
            { 
                image: "img/house-of-stark.jpeg",
                title: "House of Stark",
                text: "Winter Is Coming"
            },
            { 
                image: "img/house-of-targaryen.jpeg",
                title: "House of Targaryen",
                text: "Fire And Blood"
            },
            { 
                image: "img/house-of-baratheon.jpeg",
                title: "House of Baratheon",
                text: "Ours Is The Fury"
            },
        ]
    },
});