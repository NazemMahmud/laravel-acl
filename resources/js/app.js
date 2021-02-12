/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import {authConfig} from './auth';
// import 'es6-promise/auto'
import Vue from 'vue'
// import VueAuth from '@websanova/vue-auth'

// import router from './router'// Set Vue globally

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`;

// Vue.use(VueAuth, auth)// Load Index

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: router,
    config: authConfig,
    render: h => h(App),
});

console.log('sdda: ', app);