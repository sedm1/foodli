<template>
  <Header/>

  <Menu @update:menu="selectedMenu = $event"/>

  <main>
    <section class="food">
      <div class="container">
        <FoodItem
            v-for="food in selectedFood"
            :key="food.name"
            :item="food"
        />
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import FoodItem from "@/components/FoodItem.vue";
import { foodByCategory } from "@/products";

const selectedMenu = ref('Хлеб');

const selectedFood = computed(() => foodByCategory[selectedMenu.value] || []);
</script>

<style scoped>
.food {
  margin-top: 20px;
}

.food .container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
