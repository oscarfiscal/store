/** @format */

import { createStore } from "vuex";

export default createStore({
  state: {
    productos: [],
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload;
      console.log(state.productos);
    },
  },
  actions: {
    async fetchData({ commit }) {
      const response = await fetch("http://sva.talana.com:8000/api/product/");
      const data = await response.json();
      console.log(data)
      commit("setProductos", data);
    },
  },
  modules: {},
});
