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

    /** Contiene la parte grafica del componente che viene renderizzata. */
    template: `
        <div class="card" style="width: 240px; float: left; margin: 16px;">
            <img class="card-img-top" v-bind:src="'https://picsum.photos/240/240?image=' + item.id">
            <div class="card-body">
                <h4 class="card-title">{{ item.nome }}</h4>
                <h5 class="card-title">Proprietario: {{ fullName }}</h5>
                <p class="card-text">{{ item.descrizione }}</p>
                <p class="card-text text-right"><strong>{{ item.prezzo }} €</strong></p>
                <a href="#" class="btn btn-primary" @click="testClick(item.nome)">Dettaglio</a>
                <!-- Il v-model:value="fullName" effettua il collegamento diretto fra il valore del campo dell'input e il campo
                    fullName inserito in computed che viene gestito automaticamente con le function set (quando viene modificato)
                    e get (quando deve essere graficato) -->
                <p class="card-text" style="margin-top: 12px">Cambio Proprietario</p>
                <input type="text" v-model:value="fullName">
            </div>
        </div>
    `,

    /** Il campo props contiene l'array delle props inviate dal componente padre tramite il binding. In questo caso viene passata
     *  la props 'item' relativa al singolo prodotto che deve essere graficato (passato tramite v-bind:item="product").
     */
    props: ['item'],

    /** Contiene le variabili del componente e può contenere anche funzioni. */
    data() {
        return {
            nome: 'Mario',
            cognome: 'Rossi'
        }
    },

    /** Le funzioni inserite in computed vengono richiamate come se fossere dei campi del componente e quindi con accessibilità più veloce
     *  rispetto alle funzioni inserite e chiamate in methods. Inoltre, chiamata per la prima volta, viene salvata in cache Vue e se 
     *  richiamata successivamente si accederà piu velocemente invece che rielaborare il tutto.
     */
    computed: {
        fullName: {
            get: function() {
                return this.nome + ' ' + this.cognome;
            },
            set: function(newValue) {
                var valSplitted = newValue.split(' ');
                this.nome = valSplitted[0];
                
                if (valSplitted.length > 1) {
                    if (valSplitted.length < 3) {
                        this.cognome = valSplitted[1];
                    } else {
                        this.cognome = valSplitted.slice(1, valSplitted.length).join(' ');
                    }
                } else {
                    this.cognome = '';
                }

            }
        }

    },

    /** Tramite watch, vengono monitorati tutti i cambiamenti delle variabili del componente specificate nel corpo e quando cambia un valore 
     *  viene eseguita una determinata azione. */
    watch: {
        nome: function(nomeValue) {
            console.log('Il valore del campo nome è cambiato: ' + nomeValue);
        }
    },

    /** Contiene i metodo e le funzioni utilizzate dal componente. */
    methods: {
        testClick(productName) {
            alert(productName);
        },

        getFullName () {
            return this.nome + ' ' + this.cognome;
        }
    }

})

new Vue({
    el: "#app"
});

