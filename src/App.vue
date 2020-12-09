<template>
    <v-app>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang="ts">
	import { mapActions } from 'vuex'
    import Vue from 'vue'

    export default Vue.extend({
        name: 'App',

        components: {
            
        },

        data: () => ({
            //
        }),
        methods: {
            ...mapActions(['addKernel']),
        },
        created() {
            this.addKernel({ name: 'Default', status: 'started' })
        },
    })
</script>

<style>
    @import "../node_modules/gm_scss/index.css";
</style>
