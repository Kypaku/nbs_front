import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import fileSystem from './modules/fileSystem'
import kernels from './modules/kernels'
import settings from './modules/settings'
import notebooks from './modules/notebooks'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        fileSystem,
        kernels,
        settings,
        notebooks
    },
    getters,
    plugins: [vuexLocal.plugin]
})
