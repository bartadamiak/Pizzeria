import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            pizza: "Warszawska",
            price: "25.00",
        }, 
        {
            pizza: "Serowa",
            price: "27.50",
        },
        {
            pizza: "Hawajska",
            price: "29.00"
        },
        {
            pizza: "Morska",
            price: "29.00",
        },
        {
            pizza: "Ostra",
            price: "33.00",
        },
        {
            pizza: "Szpinakowa",
            price: "33.00",
        },
        {
            pizza: "Bardzo ostra",
            price: "35.00",
        },
        {
            pizza: "Bardzo Bardzo ostra",
            price: "42.00"
        },
        {
            pizza: "Wegańska",
            price: "42.00",
        },
        {
            pizza: "Giga",
            price: "55.00"
        }
    ]
    }
});
