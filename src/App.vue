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
    import { startDir } from './api'

    export default Vue.extend({
        name: 'App',

        components: {
            
        },

        data: () => ({
            //
        }),
        methods: {
            ...mapActions(['addKernel', 'getKernels', 'getFiles']),
        },
        async created() {
            this.getFiles(startDir)
            await this.getKernels()
            this.addKernel({ name: 'Default', status: 'started' })
        },
    })
</script>

<style>
    @import "../node_modules/gm_scss/index.css";
</style>
