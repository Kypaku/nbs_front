<template>
    <div class="filesystem">
        <Teatree :roots="data">
            <template slot="node-toggle" slot-scope="{ node }">
                <NodeToggle :node="node" />
            </template>
            <template slot="node-name" slot-scope="{ node }">
                <NodeName
                :node="node"
                :handleNodeLeftClick="() => {}"
                :handleNodeRightClick="() => {}"
                />
            </template>
        </Teatree>
    </div>
</template>

<script lang='ts'>
    import { Vue } from 'vue-property-decorator'
    import { Teatree, NodeType, NodeName, NodeToggle } from 'vue-teatree'

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

        },
        methods: {
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
