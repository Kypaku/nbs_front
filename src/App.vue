<template>
    <v-app>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang="ts">
	import { mapActions, mapGetters, mapMutations } from 'vuex'
    import Vue from 'vue'
    import { startDir } from './api'

    export default Vue.extend({
        name: 'App',

        components: {
            
        },

        data: () => ({
            //
        }),
        computed: {
            ...mapGetters(['kernels'])
        },
        methods: {
            ...mapActions(['addKernel', 'getKernels', 'getFiles']),
            ...mapMutations(['SET_CURRENT_KERNEL'])
        },
        async created() {
            this.getFiles(startDir)
            await this.getKernels()
            await this.addKernel({ name: 'Default', status: 'started' })
            this.SET_CURRENT_KERNEL(this.kernels[this.kernels.length - 1])
        },
    })
</script>

<style>
    @import "../node_modules/gm_scss/index.css";
</style>
