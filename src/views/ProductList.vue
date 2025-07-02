<template>
  <div class="container py-4">
    <h2 class="mb-3">商品列表</h2>

    <!-- 搜尋欄 -->
    <div class="mb-3">
      <input
        type="text"
        v-model.trim="search"
        class="form-control"
        placeholder="搜尋商品名稱"
      />
    </div>

    <!-- 商品列表 -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in filteredProducts" :key="product.id">
        <div class="card h-100">
          <img :src="`/images/${product.image}`" class="card-img-top" alt="商品圖片" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">價格：${{ product.price }}</p>
            <span class="badge bg-secondary">{{ product.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import products from '../data/products.js'

// 搜尋欄資料
const search = ref('')

// 商品清單
const filteredProducts = computed(() => {
  return products.filter(product =>
    product.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>
