<template>
    <div class="filesystem">
        <v-btn text @click="up">..</v-btn>
        <Teatree :roots="formatted">
            <template slot="node-toggle" slot-scope="{ node }">
                <NodeToggle :node="node" />
            </template>
            <template slot="node-name" slot-scope="{ node }">
                <NodeName
                :node="node"
                :handleNodeLeftClick="() => open(node)"
                :handleNodeRightClick="() => {}"
                />
            </template>
        </Teatree>
        <!-- {{files}} -->
    </div>
</template>

<script lang='ts'>
	import { parentDirectory } from './../../../node_modules/gm_node/index.js'
    import { Directory, File } from '@/types/FileSystem'
    import { Vue } from 'vue-property-decorator'
    import { Teatree, NodeType, NodeName, NodeToggle } from 'vue-teatree'
    import { mapActions, mapGetters } from 'vuex'

    function formatFile(file: File | Directory, state) {
        const splitted = file.name.split('/')
        return {
            name: splitted[splitted.length - 1],
            show: true,
            children: file.files ? file.files.map(el => formatFile(el, state)) : [],
            showChildren: !!state[file.name],
            data: file,
            selected: false,
        }
    }

    const treeState = {}

    export default Vue.extend({
        components: {
            Teatree,
            NodeName,
            NodeToggle,
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters(['files', 'root']),
            formatted(): NodeType[] {
                return this.files.map(el => formatFile(el, treeState))
            }
        },
        methods: {
            ...mapActions(['openFile', 'getFiles']),
			up() {
                this.getFiles(parentDirectory(this.root))
			},
			open(node: NodeType) {
                if (node.data.info.isDir) {
                    this.getFiles(node.data.name)
                    treeState[node.data.name] = !node.showChildren
                } else {
                    this.openFile(node.data.name)
                }
                
                return true
			},
            // getList
            // open notebook
            // open in editor
            // rename
            // delete to trash
        },
    })

    </script>

<style lang="scss" scoped>

</style>
