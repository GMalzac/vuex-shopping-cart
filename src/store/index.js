import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    products: []
  },
  getters: { // computed properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },
  actions: {
    fetchProducts () {
      // make API call
      // run setProducts mutation
    }
  },
  mutations: { //set and update the state
    setProducts (state, products) {
      state.products = products
      // update products
    }
  }
})
