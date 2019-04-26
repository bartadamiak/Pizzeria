import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
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
    }
});
