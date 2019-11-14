import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: Cookie.get("name"), //用户名
    menuOpen: [""], // 菜单栏的激活子项
    menuActive: ""  // 菜单栏打开的栏目
  },
  mutations: {
    setName(state, name) {
      state.name = name;
      Cookie.set("name", name);
    },
    setMenu(state, { open, active }) {
      state.menuActive = active;
      state.menuOpen = [open];
    }
  }
})