<template>
    <div class="input-cell">
        
    </div>
</template>

<script lang='ts'>
    import { InputCell } from '@/types/Cell'
    import { Vue } from 'vue-property-decorator'
    import { PropType } from 'vue'

    export default Vue.extend({
        props: {
            item: Object as PropType<InputCell>,
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
