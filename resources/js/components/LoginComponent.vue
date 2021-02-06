<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form action="#" @submit.prevent="handleLogin">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email Adddress</label>
                                <input id="email" type="email" class="form-control col-md-6" v-model="form.email" required autofocus>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4  col-form-label text-md-right">Password</label>
                                <input id="password" type="password" class="form-control col-md-6" v-model="form.password" required >


                            </div>

<!--                            <div class="form-group row">-->
<!--                                <div class="col-md-6 offset-md-4">-->
<!--                                    <div class="form-check">-->
<!--                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>-->

<!--                                        <label class="form-check-label" for="remember">-->
<!--                                            {{ __('Remember Me') }}-->
<!--                                        </label>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>

<!--                                    @if (Route::has('password.request'))-->
<!--                                    <a class="btn btn-link" href="{{ route('password.request') }}">-->
<!--                                        {{ __('Forgot Your Password?') }}-->
<!--                                    </a>-->
<!--                                    @endif-->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                form: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            handleLogin(){
                axios.get('/sanctum/csrf-cookie').then(response => {
                    console.log('res: ', response);
                    axios.post('/login', this.form).then(res => {
                        console.log('rese: ', res);
                        this.getPosts();

                    }).catch(error => console.log('error: ', error));
                });
            },
            getPosts() {
                axios.get('/api/posts')
                    .then(response => {
                        console.log('rrr: ', response);
                        // this.posts = response.data;
                    });
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>