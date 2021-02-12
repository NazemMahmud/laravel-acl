<template>
    <ul>
        <li><router-link :to="{name: home}" ></router-link></li>
        <li><router-link :to="{name: login}" ></router-link></li>
        <li>Account</li>
        <li><router-link :to="{name: dashboard}" ></router-link></li>
        <li><a href="#" >Log Out</a></li>
    </ul>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>
