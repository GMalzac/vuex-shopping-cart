import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

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
    fetchProducts ({commit}) {// actions
      // make API call
      // run setProducts mutation
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },
  mutations: { //set and update the state
    setProducts (state, products) {
      state.products = products
      // update products
    }
  }
})
