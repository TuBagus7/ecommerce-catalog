<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <img :src="product.image" alt="product image" class="product-image">
        <h6 class="card-subtitle mb-2 text-muted">{{ product.category }}</h6>
        <p class="card-text">{{ product.description }}</p>
        <a href="#" class="card-link">Add to cart</a>
      </div>
    </div>
    <div v-if="isLoading" class="isLoading">Loading...</div>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="nextProduct">Next Product</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDisplay",
  data() {
    return {
      isLoading: true,
      product: {},
      productId: 1,
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      this.isLoading = true;
      fetch(`https://fakestoreapi.com/products/${this.productId}`)
        .then((response) => response.json())
        .then((data) => {
          this.product = data;
          this.isLoading = false;
        });
    },
    nextProduct() {
      this.productId++;
      this.fetchProduct();
    },
  },
};
</script>


<style scoped>
  @import "@/components/women/styles.css"
  
</style>
