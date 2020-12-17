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
        background: rgb(247, 243, 244);
	}
	.fs-wrap{
		width: 25%;
        background: rgb(233, 203, 208);
        padding: 8px;
	}

</style>
