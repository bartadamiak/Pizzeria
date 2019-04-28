import Component from '@ember/component';




export default Component.extend({
    clicker(e) {
        
        let element = document.querySelector('.sum');
        element.classList.remove('hidden');
        element.querySelector('.name').innerText = this.querySelector('.name').innerText;
        element.querySelector('.price').innerText = this.querySelector('.price').innerText;

    },
    menu: [{
        pizza: "Warszawska",
        price: 25.00,
        ingredients: ["ser", " sos pomidorowy", " ogórki"]
    }, 
    {
        pizza: "Serowa",
        price: 27.50,
        ingredients: ["ser", " sos pomidorowy", " sery: kozi, owczy, pleśniowy"]
    },
    {
        pizza: "Hawajska",
        price: 29.00,
        ingredients: ["ser", " sos pomidorowy", " ananas", " szynka"]
    },
    {
        pizza: "Morska",
        price: 29.00,
        ingredients: ["ser", " sos pomidorowy", " tuńczyk", " krewetki", " oliwki"],
    },
    {
        pizza: "Ostra",
        price: 33.00,
        ingredients: ["ser", " sos chili", " papryka chili", ' salami'],
    },
    {
        pizza: "Szpinakowa",
        price: 33.00,
        ingredients: ["ser", " sos czosnkowy", " szpinak", ' pomidor'],
    },
    {
        pizza: "Bardzo ostra",
        price: 35.00,
        ingredients: ["ser", " sos chili", " pieprz cayenne", " salami", " rukola"],
    },
    {
        pizza: "Bardzo Bardzo ostra",
        price: 42.00,
        ingredients: ["ser", " sos chili", " pieprz cayenne", " papryczki jalapeno", " szynka"]
    },
    {
        pizza: "Wegańska",
        price: 42.00,
        ingredients: ["tofu", " sos pomidorowy", " ogórki", " fasola", " bób", " szpinak", " czosnek"],
    },
    {
        pizza: "Giga",
        price: 55.00,
        ingredients: "30 losowo wybranych składników"
    },
    
]
});
