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
export default {

  name: 'ProductList',

  data () {
    return {
      products: []

    }
  }
}
</script>

<style lang="css" scoped>
</style>
