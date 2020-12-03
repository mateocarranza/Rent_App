import Vue from 'vue'
import Vuex from 'vuex'
import dptosNamespace from './modules/dptos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dptosNamespace
  }
})
