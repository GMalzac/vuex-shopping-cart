import Vuex from 'Vuex'

import Vue from 'vue'

Vue.use(Vuex)

new Vue.Store({
  state: { //data
    products: []
  },
  getters: { //computed properties
    productsCount () {
      //...
    }
  },
  actions: {
    //make API call
  },
  mutations: { //set and update the state
    setProducts () {
      //update products
    }
  }
})
