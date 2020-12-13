<template>
    <div class="home">
        <div class="fs-wrap h-100vh left">
            <FileSystem/>
        </div>
        <div class="ws-wrap right h-100vh">
            <Workspace/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import FileSystem from './../components/FileSystem/FileSystem.vue'
    import Workspace from './../components/Workspace/Workspace.vue'

    export default Vue.extend({
        name: 'Home',
        components: {
            FileSystem,
            Workspace,
        }
    })
</script>

<style lang="scss" scoped>
	.ws-wrap{
        width: 75%;
        background: rgb(243, 245, 247);
	}
	.fs-wrap{
		width: 25%;
        background: rgb(203, 225, 233);
        padding: 8px;
	}

</style>
