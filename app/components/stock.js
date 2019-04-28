import Component from '@ember/component';

export default Component.extend({
    clicker(e) {
        
        let element = document.querySelector('.sum2');
        element.classList.remove('hidden');
        element.querySelector('.name').innerText = this.querySelector('.name').innerText;
        element.querySelector('.price').innerText = this.querySelector('.price').innerText;

    },
    list: [{
        name: "Pomidor",
        counter: 1,
    },
    {
        name: "Rukola",
        counter: 1
    },
    {
        name: "Ser żółty",
        counter: 4
    },
    {
        name: "Szynka",
        counter: 6
    },
    {
        name: "Tuńczyk",
        counter: 7
    }, 
    {
        name: "Ogórki",
        counter: 2
    },
    {
        name: "Ser kozi",
        counter: 10
    },
    {
        name: "Ser owczy",
        counter: 10
    },
    {
        name: "Ser pleśniowy",
        counter: 10
    },
    {
        name: "Krewetki",
        counter: 10
    },
    {
        name: "Oliwki",
        counter: 3
    },
    {
        name: "Pieprz cayenne",
        counter: 1
    },
    {
        name: "Papryka chilli",
        counter: 3
    },
    {
        name: "Czosnek",
        counter: 2
    },
    {
        name: "Salami",
        counter: 10
    },
    {
        name: "Jalapeno",
        counter: 5
    },
    {
        name: "Fasola",
        counter: 2
    },
    {
        name: "Bób",
        counter: 2
    },
    {
        name: "Szpinak",
        counter: 2
    }

    ],
    
});
