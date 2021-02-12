<template>
    <div class="login">
        <form @submit.prevent="login" method="post">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" class="form-control" placeholder="user@example.com"
                       v-model="form.email" required>
            </div>
            <div class="form-group">
                <!--                        Mot de passe-->
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="form.password" required>
            </div>
            <!--                    Connexion-->
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>

<script>
    // @ is an alias to /src
    import axios from "axios"

    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    email: null,
                    password: null,
                },
                has_error: false
            }
        },
        components: {},
        methods: {
            login() {
                this.$store.dispatch('auth/login', {_v: this, credentials: this.form});
            }
        }
    }
</script>
