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
