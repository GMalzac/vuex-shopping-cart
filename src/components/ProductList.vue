<template>
  <div>
    <h1>Products List</h1>
    <img
      v-if="loading"
      src="https://i.imgur.com/JfPpwOA.gif"
    >
    <ul v-else>
      <li v-for="product in products">
        {{product.title}} - {{product.price}}
      </li>
    </ul>
  </div>
</template>

<script>

import shop from '@/api/shop'
import store from '@/store/index'

export default {

  name: 'ProductList',

  data () {
    return {
      loading: false
    }
  },

  computed: {
    products () {
      return store.getters.availableProducts
    }
  },


  created () {
    this.loading = true
    store.dispatch('fetchProducts')
      .then(() => this.loading = false)
  }
}
</script>

<style lang="css" scoped>
</style>
