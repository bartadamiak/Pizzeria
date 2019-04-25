import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            title: "Pizzeria Warszawa",
            address: "Pruszkowska 115 lok.18",
            hours: "13:00 - 00:00",
            phone: "123-456-789",
            link: "pizzeria1",
        },
        {
            title: "Pizzeria Wrocław",
            address: "Katowicka 290",
            hours: "10:00 - 21:00",
            phone: "987-654-321",
            link: "pizzeria2",
        }        
    ]
    }
});
