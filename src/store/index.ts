import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import fileSystem from './modules/fileSystem'
import kernels from './modules/kernels'
import settings from './modules/settings'
import notebooks from './modules/notebooks'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        fileSystem,
        kernels,
        settings,
        notebooks
    },
    getters
})
