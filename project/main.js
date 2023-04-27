var App = Vue.component('App', {
    template: `
        <div class="container">
           <form>
                <div class="form-group">
                   <template v-if="loginType ==='username'">
                      <label>Username</label>
                      <input key="username" class="form-control" placeholder="Enter your username">             
                   </template>
                   <template v-else>
                        <label>Email</label>
                        <input key="address" class="form-control" placeholder="Enter your email address">             
                     </template>
                </div>
           </form>
           <button v-on:click="byUsername()" class="btn btn-primary">Per Username</button>
           <button v-on:click="byEmail()" class="btn btn-primary">Per Email</button>
        </div>
    `,
    data() {
        return {
            loginType: "username",
            byUsername() {
                this.loginType = "username";
            },
            byEmail() {
                this.loginType = "email";
            }
        };
    }
});

new Vue({
    el: "#app"
});

