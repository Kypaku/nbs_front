<template>
    <div class="output-cell">
        
    </div>
</template>

<script lang='ts'>
    import { OutputCell } from '@/types/Cell'
    import { Vue } from 'vue-property-decorator'
    import { PropType } from 'vue'

    export default Vue.extend({
        props: {
            item: Object as PropType<OutputCell>,
        },
        components: {

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
