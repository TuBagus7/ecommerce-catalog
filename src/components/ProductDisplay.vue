<template>
  <div>
    
<div v-if="loading" class="loading">Loading...</div>    <div v-else>
      <div v-for="(product, index) in products" :key="index" class="product">
        <h3>{{ product.title }}</h3>
        <img :src="product.image" alt="">        
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
      </div>
      <button @click="getNextProduct">Next Product</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDisplay',
  data() {
    return {
      products: [],
      currentIndex: 0,
      loading: true
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          this.products = data
          this.loading = false
        })
    },
    getNextProduct() {
      this.currentIndex++
      if (this.currentIndex >= this.products.length) {
        this.currentIndex = 0
      }
    }
  }
}
</script>

<style scoped>
    @import "@/assets/style/page.css";
</style>
