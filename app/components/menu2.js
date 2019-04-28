import Component from '@ember/component';




export default Component.extend({
    clicker(e) {
        
        let element = document.querySelector('.sum');
        element.classList.remove('hidden');
        element.querySelector('.name').innerText = this.querySelector('.name').innerText;
        element.querySelector('.price').innerText = this.querySelector('.price').innerText;

    },
    menu: [{
        pizza: "Wrocławska",
        price: "17.00",
    }, 
    {
        pizza: "Górska",
        price: "19.00",
    },
    {
        pizza: "Hawajska",
        price: "19.00"
    },
    {
        pizza: "Morska",
        price: "20.00",
    },
    {
        pizza: "Serowa",
        price: "23.00",
    },
    {
        pizza: "Z rukolą",
        price: "24.00",
    },
    {
        pizza: "Bardzo ostra",
        price: "25.00",
    },
    {
        pizza: "Giga",
        price: "40.00"
    }
]
});
