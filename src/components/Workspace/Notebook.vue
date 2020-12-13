<template>
    <div class="notebook">
        <v-btn  @click="save">SAVE</v-btn>
        <div class="cell-wrap" :class="{active: cell.id === (currentCell && currentCell.id)}" v-for="(cell, i) in current.cells || []" :key="cell.id">
            <Cell :item="cell"/>
            <v-btn text @click="add(i)">+</v-btn>
        </div>
        <v-btn v-if="!current.cells || !current.cells.length" text @click="add(0)">+</v-btn>
    </div>
</template>

<script lang='ts'>
    import { mapActions, mapGetters, mapMutations } from 'vuex'
    import { Vue } from 'vue-property-decorator'
    import Cell from './../Cells/Cell.vue'
    import CellInterface from '@/types/Cell'

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
            ...mapActions(['saveFile']),
            ...mapMutations(['INSERT_CELL', 'DELETE_CELL', 'ADD_CELL']),
			add(pos: number) {
                const cell = { input: {}, output: {} }
                pos ? this.INSERT_CELL({ cell, pos }) : this.ADD_CELL(cell)
            },
            delete(cell: CellInterface) {
                this.DELETE_CELL(cell.id)
            },
            save() {
                this.saveFile({ file: this.current.filename, body: this.current })
            }
        },
    })

    </script>

<style lang="scss" scoped>

</style>
