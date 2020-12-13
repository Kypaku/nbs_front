<template>
    <div class="filesystem">
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
        {{files}}
    </div>
</template>

<script lang='ts'>
    import { Directory, File } from '@/types/FileSystem'
import { Vue } from 'vue-property-decorator'
    import { Teatree, NodeType, NodeName, NodeToggle } from 'vue-teatree'
import { mapActions, mapGetters } from 'vuex'

    const data: NodeType[] = [
        {
            name: 'parent',
            show: true,
            showChildren: true,
            selected: false,
            children: [
            {
                name: 'child',
                show: true,
                showChildren: true,
                selected: false,
                children: [
                {
                    name: 'grandchild',
                    show: true,
                    showChildren: true,
                    selected: false,
                    children: [],
                },
                ],
            },
            ],
        },
    ]

    export default Vue.extend({
        components: {
            Teatree,
            NodeName,
            NodeToggle,
        },
        data() {
            return {
                data
            }
        },
        computed: {
            ...mapGetters(['files']),
            formatted(): NodeType[] {
                return this.files.map((file: File | Directory) => {
                    const splitted = file.name.split('/')
                    return {
                        name: splitted[splitted.length - 1],
                        show: true,
                        children: [],
                        showChildren: file.info?.isDir,
                        data: file
                    }
                })
            }
        },
        methods: {
            ...mapActions(['openFile', 'getFiles']),
			open(node: NodeType) {
                if (node.data.info.isDir) {
                    //get children
                    // this.getFiles(node.data.name)
                } else {
                    this.openFile(node.data.name)
                }
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
