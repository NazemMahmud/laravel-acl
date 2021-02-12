<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Login</div>
            <div class="card-body">
                <div class="alert alert-danger" v-if="has_error">
                    <p>Error, give correct info</p>
                </div>
                <form autocomplete="off" @submit.prevent="login" method="post">
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" class="form-control" placeholder="user@example.com"
                               v-model="email" required>
                    </div>
                    <div class="form-group">
<!--                        Mot de passe-->
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="password" required>
                    </div>
<!--                    Connexion-->
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import {authConfig} from '../auth';
    export default {
        data() {
            return {
                email: null,
                password: null,
                has_error: false
            }
        },
        mounted() {
            //
        },
        methods: {
            login() {
                // get the redirect object
                // var redirect = authConfig.login.redirect;
                var app = this;
                const formData = {email: this.email, password: this.password};
                // console.log('red: ', redirect);
                console.log('Auths sd: ', authConfig);
                // baseURL: 'http://localhost:8000/api',
                // loginData: {url: '/auth/login', method: 'POST', redirect: '', fetchUser: true},
                axios.post(authConfig.baseURL + authConfig.loginData.url, formData).then(response => {
                    console.log('response: ', response);
                    if(response.status == 200){
                        const data = response.data;
                        const redirectTo = data.role === 'admin' ? 'admin.dashboard' : 'dashboard';
                        this.$router.push({name: redirectTo});

                    }
                });
                // authConfig.login({
                //     params: {
                //         email: app.email,
                //         password: app.password
                //     },
                //     success: function () {
                //         // handle redirection
                //         const redirectTo = redirect ? redirect.from.name : this.$auth.user().role === 2 ? 'admin.dashboard' : 'dashboard'
                //         this.$router.push({name: redirectTo})
                //     },
                //     error: function () {
                //         app.has_error = true
                //     },
                //     rememberMe: true,
                //     fetchUser: true
                // })
            }
        }
    }
</script>
