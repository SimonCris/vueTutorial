var App = Vue.component('App', {
    template: `
        <div class="container">
            <h1> {{ titolo }} </h1>
            <p> <span :style = "colorRed"> Totale: </span>{{ 5+3 }} </p>
            <p>{{ user.firstName }} {{ user.secondName }}</p>
            <p>{{ user.getFullName() }}</p>

            <button class="btn btn-primary" :disabled="isDisabled"> Click </button>
            <p>Bottone disabilitato: {{ isDisabled ? 'Si' : 'No' }}</p>
        </div>
    `,
    data() {
        return {
            titolo: "Ciao a tutti!",
            colorRed: "color: red",
            isDisabled: false,
            user: {
                firstName: "Mario",
                secondName: "Rossi",
                getFullName: function() {
                    return this.firstName + " " + this.secondName
                }
            }
        };
    }
});

new Vue({
    el: "#app"
});

