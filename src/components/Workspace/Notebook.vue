<template>
    <div class="notebook">
        <Cell/>
    </div>
</template>

<script lang='ts'>
    import { Vue } from 'vue-property-decorator'
	import Cell from './../Cells/Cell.vue'

    export default Vue.extend({
        components: {
	        Cell,
		
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
