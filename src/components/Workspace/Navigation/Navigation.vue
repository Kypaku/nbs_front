<template>
    <div class="navigation d-flex">
        <div class="nav-item pointer" :class="{active: nb.filename === (current && current.filename)}" v-for="nb in notebooks" :key="nb.filename" @click="activate(nb)">
            {{nb.filename}}
            <v-btn text @click="close(nb)">X</v-btn>
        </div>
    </div>
</template>

<script lang='ts'>
    // Horizontal Scroll, Drag, Autosort
    import { mapGetters, mapMutations } from 'vuex'
    import { Vue } from 'vue-property-decorator'
    import Notebook from '@/types/Notebook'

    export default Vue.extend({
        components: {

        },
        data() {
            return {
                
            }
        },
		computed: {
            ...mapGetters(['notebooks', 'current']),
            
        },
        methods: {
            ...mapMutations(['SET_CURRENT', 'DELETE_NOTEBOOK']),
            close(nb: Notebook) {
                this.DELETE_NOTEBOOK(nb.filename)
            },
			activate(nb: Notebook) {
                this.SET_CURRENT(nb)
			},
        },
    })

    </script>

<style lang="scss" scoped>
	.nav-item {
		background: rgb(221, 230, 233);
	}
	.active{
        background: rgb(230, 237, 240);
	}

</style>
