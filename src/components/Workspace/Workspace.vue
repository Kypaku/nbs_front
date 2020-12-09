<template>
    <div class="workspace">
        <Navigation/>
        <Notebook v-if="current"/>
    </div>
</template>

<script lang='ts'>
    import { mapGetters } from 'vuex'
    import { Vue } from 'vue-property-decorator'
    import Navigation from './Navigation/Navigation.vue'
    import Notebook from './Notebook.vue'

    export default Vue.extend({
        components: {
            Notebook,
            Navigation,
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters(['current']),

        },
        methods: {

        },
    })

    </script>

<style lang="scss" scoped>

</style>
