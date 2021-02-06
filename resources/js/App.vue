<template>
    <div class="container">
        <div class="text-center" style="margin: 20px 0px 20px 0px;">
            <span class="text-secondary">Laravel Vue ACL </span>
        </div>
        
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App.vue",
        data() {
            return {
                //
            }
        },
        components: {
            //
        }
    }
</script>

<style scoped>

</style>