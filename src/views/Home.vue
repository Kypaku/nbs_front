<template>
    <div class="home">
        <div class="fs-wrap">
            <FileSystem/>
        </div>
        <div class="ws-wrap">
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
	}
	.fs-wrap{
		width: 25%;
        border: 1px solid lightblue;
	}

</style>
