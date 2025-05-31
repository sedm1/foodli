<template>
  <Header/>
  <div class="seller-container" v-if="baker">
    <BakerCard :baker="baker"/>

    <div class="products">
      <h2>Товары</h2>

      <div class="products_block">
        <FoodItem v-for="(product, index) in baker.products" :item="product"/>
      </div>

    </div>

    <div class=" reviews">
      <h2>Отзывы</h2>
      <div class="review-list" v-if="baker.reviews.length">
        <div v-for="(review, index) in baker.reviews" :key="index" class="review-card">
          <p class="reviewer-name">{{ review.fullName }}</p>
          <p class="review-text">{{ review.comment }}</p>
        </div>
      </div>
      <p v-else><em>Отзывов пока нет</em></p>
    </div>
  </div>

  <div v-else>
    <p>Продавец не найден</p>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { BAKERS } from "@/bakers.ts";
import Header from "@/components/Header.vue";
import BakerCard from "@/components/BakerCard.vue";
import FoodItem from "@/components/FoodItem.vue";

const route = useRoute()
const fullNameParam = decodeURIComponent(route.params.fullName)
const baker = BAKERS.find(b => b.fullName === fullNameParam)
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background-color: #f8f8f8;
  color: #333;
}

.seller-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.products {
  margin-top: 2rem;
}

.products h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.products_block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info h1 {
  margin: 0;
  font-size: 1.8rem;
}

.reviews {
  margin-top: 2rem;
}

.reviews h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.review-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.review-card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.reviewer-name {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.review-text {
  margin: 0;
  color: #555;
}


</style>
