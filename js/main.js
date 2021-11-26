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
        ],
        currentImage: 0,
    },
    methods: {
        nextImage: function() {
            if(this.currentImage == this.houses.length - 1){
                this.currentImage = 0;
            } else {
                this.currentImage++;
            }
        },
        prevImage: function() {
            if(this.currentImage == 0){
                this.currentImage = this.houses.length - 1;
            } else {
                this.currentImage--;
            }
        },
        setActiveClass: function(index) {
            if(index == this.currentImage) {
                return 'active';
            } else {
                return '';
            }
        }
    }
});