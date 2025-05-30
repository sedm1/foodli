<script setup lang="ts">
defineProps<{
  item: {
    name: string;
    desc: string;
    img: string;
    price: number;
    quantity?: number
  };
}>();
</script>

<template>
  <div class="foodItem">
    <div class="foodItem_img"><img :src="'/images/products/' + item.img" alt="FoodItemImg"></div>

    <div class="foodItem_info">
      <h3 class="foodItem_infoTitle">
        {{ item.name }} / {{ item.quantity }} штук
      </h3>
      <p class="foodItem_infoDescription">
        {{ item.desc }}
      </p>
      <router-link :to="`/product/${item.name}`" class="foodItem_infoButton">
        Подробнее
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.foodItem {
  display: flex;
  align-items: center;
  gap: 20px;
}

.foodItem_img {
  min-width: 150px;
  width: 150px;
}

.foodItem_info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.foodItem_infoButton {
  background: var(--red);
  border-radius: 15px;
  width: fit-content;
  padding: 8px 25px;
  color: var(--white);
  font-weight: 500;
  font-size: 14px;
}
</style>
