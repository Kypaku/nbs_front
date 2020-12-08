<template>
    <div class="notebook">
        <div class="cell-wrap" :class="{active: cell.id === currentCell.id}" v-for="(cell, i) in current.cells" :key="cell.id">
            <Cell :item="cell"/>
            <v-btn text @click="add(i)">+</v-btn>
        </div>
    </div>
</template>

<script lang='ts'>
    import { mapGetters, mapMutations } from 'vuex'
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
            ...mapGetters(['current', 'currentCell']),

        },
        methods: {
            ...mapMutations(['INSERT_CELL', 'DELETE_CELL']),
			add(pos: Number) {
                this.INSERT_CELL({cell, pos})
            },
            delete(cell){
                this.DELETE_CELL(cell.id)
            },
            save(){
                //save action
            }            
        },
    })

    </script>

<style lang="scss" scoped>

</style>
