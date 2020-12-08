<template>
    <div class="workspace">
        <Navigation/>
        <Notebook/>
    </div>
</template>

<script lang='ts'>
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

        },
        methods: {

        },
    })

    </script>

<style lang="scss" scoped>

</style>
