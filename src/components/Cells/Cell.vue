<template>
    <div class="cell">
        <InputCell/>
        <OutputCell/>
    </div>
</template>

<script lang='ts'>
    import { Vue } from 'vue-property-decorator'
	import InputCell from './InputCell.vue'
	import OutputCell from './OutputCell.vue'

    export default Vue.extend({
        components: {
        	OutputCell,
		    InputCell,
            
		
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
