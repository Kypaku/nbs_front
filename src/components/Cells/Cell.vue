<template>
    <div class="cell">
        <InputCell :item="item.input"/>
        <OutputCell :item="item.output"/>
    </div>
</template>

<script lang='ts'>
    import { Vue } from 'vue-property-decorator'
    import InputCell from './InputCell.vue'
    import OutputCell from './OutputCell.vue'
    import { PropType } from 'vue'
    import Cell from '@/types/Cell'

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

        },
        methods: {

        },
    })

    </script>

<style lang="scss" scoped>

</style>
