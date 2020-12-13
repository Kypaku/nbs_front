<template>
    <div class="cell">
        <InputCell :item="item.input" :id="item.id"/>
        <v-btn text @click="evalCell">eval</v-btn>
        <OutputCell :item="item.output" :id="item.id"/>
    </div>
</template>

<script lang='ts'>
    import { Vue } from 'vue-property-decorator'
    import InputCell from './InputCell.vue'
    import OutputCell from './OutputCell.vue'
    import { PropType } from 'vue'
    import Cell from '@/types/Cell'
    import { mapActions, mapGetters } from 'vuex'

    export default Vue.extend({
        props: {
            item: Object as PropType<Cell>,
        },
        components: {
            OutputCell,
            InputCell,
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters(['kernel']),
        },
        methods: {
            ...mapActions(['eval']),
			evalCell() {
                this.eval({ kernel: this.kernel, cell: this.item })
			},
        },
    })

    </script>

<style lang="scss" scoped>

</style>
