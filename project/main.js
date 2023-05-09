var App = Vue.component('App', {
    template: `
        <div class="container">
           <products-list></products-list>
        </div>
    `,
    data() {
        return {
            };
    }
});

Vue.component('products-list', {

    template: `
    <div>
        <h2>Elenco Prodotti</h2>

        <div>
            <product-box v-for="product in productsList" :key="product.id" v-bind:item="product"></product-box>
        </div>
    </div>
    `,
    data() {
        return {
            productsList: [
                {
                    id: 1,
                    nome: 'Prodotto 1',
                    descrizione: 'Breve descrizione del prodotto',
                    prezzo: 15,
                    disp: 100
                },
                {
                    id: 2,
                    nome: 'Prodotto 2',
                    descrizione: 'Breve descrizione del prodotto',
                    prezzo: 25,
                    disp: 120
                },
                {
                    id: 3,
                    nome: 'Prodotto 3',
                    descrizione: 'Breve descrizione del prodotto',
                    prezzo: 5,
                    disp: 10
                },
                {
                    id: 4,
                    nome: 'Prodotto 4',
                    descrizione: 'Breve descrizione del prodotto',
                    prezzo: 150,
                    disp: 200
                },
                {
                    id: 5,
                    nome: 'Prodotto 5',
                    descrizione: 'Breve descrizione del prodotto',
                    prezzo: 60,
                    disp: 90
                },
                {
                    id: 6,
                    nome: 'Prodotto 6',
                    descrizione: 'Breve descrizione del prodotto',
                    prezzo: 1500,
                    disp: 170
                }
            ]
        }
    }

});

Vue.component('product-box', {

    template: `
        <div class="card" style="width: 240px; float: left; margin: 16px;">
            <img class="card-img-top" v-bind:src="'https://picsum.photos/240/240?image=' + item.id">
            <div class="card-body">
                <h4 class="card-title">{{ item.nome }}</h4>
                <p class="card-text">{{ item.descrizione }}</p>
                <p class="card-text text-right"><strong>{{ item.prezzo }} €</strong></p>
                <a href="#" class="btn btn-primary" v-on:click="testClick(item.nome)">Dettaglio</a>
            </div>
        </div>
    `,
    props: ['item'],
    data() {
        return {
        }
    },
    methods: {
        testClick(productName) {
            alert(productName);
        }
    }

})

new Vue({
    el: "#app"
});

