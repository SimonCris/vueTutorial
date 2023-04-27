var App = Vue.component('App', {
    template: `
        <div class="container">
            <h1> {{ titolo }} </h1>
            <p>{{ 5+3 }}</p>
            <p>{{ user.firstName }} {{ user.secondName }}</p>
            <p>{{ user.getFullName() }}</p>
        </div>
    `,
    data() {
        return {
            titolo: "Ciao a tutti!",
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

