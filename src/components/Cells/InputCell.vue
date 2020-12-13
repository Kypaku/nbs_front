<template>
    <div class="input-cell">
        <v-textarea v-model="content"></v-textarea>        
    </div>
</template>

<script lang='ts'>
    import { InputCell } from '@/types/Cell'
    import { Vue } from 'vue-property-decorator'
    import { PropType } from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

    export default Vue.extend({
        props: {
            item: Object as PropType<InputCell>,
            id: String,
        },
        components: {

        },
        data() {
            return {
                
            }
        },
        computed: {
            content: {
                get(): string {
                    return this.item.content || ''
                },
                set(nV: string) {
                    this.EDIT_CELL({ id: this.id, input: { ...this.item, content: nV } })
                }
            }
        },
        methods: {
            ...mapMutations(['EDIT_CELL']),
        },
    })

    </script>

<style lang="scss" scoped>

</style>
