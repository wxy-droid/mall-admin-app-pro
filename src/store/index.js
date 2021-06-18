import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 切换菜单 false为开 true为闭
    collapsed: false
  },
  mutations: {
    setCollapsed(state) {
      state.collapsed = !state.collapsed;
    }
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('setCollapsed');
    }
  },
  modules: {
  }
})
