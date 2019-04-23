<template>
  <div>
    <h1>Products List</h1>
    <ul>
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

  computed: {
    products () {
      return store.getters.availableProducts
    }
  },


  created () {
    shop.getProducts(products => {
      store.commit('setProducts', products)
    })
  }
}
</script>

<style lang="css" scoped>
</style>
