<template>
    <ul>
        <li><router-link :to="{name: 'home'}" >Home</router-link></li>
        <li v-if="!authenticated"><router-link :to="{name: 'login'}" >Login</router-link></li>
        <li v-if="authenticated">{{authUser.name}}</li>
        <li v-if="authenticated"><router-link :to="{name: 'dashboard'}" >Dashboard</router-link></li>
        <li v-if="authenticated"><a href="#" >Log Out</a></li>
    </ul>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";

    const {mapGetters} = createNamespacedHelpers('auth');
    export default {
        name: "Navigation",
        computed: {
            ...mapGetters(["authenticated", "authUser"])
        }
    }
</script>

<style scoped>

</style>
