<script setup>

import Header from "@/components/Header.vue";
import BakerCard from "@/components/BakerCard.vue";
import { BAKERS } from "@/bakers.js";
</script>

<template>
  <Header/>

  <main class="bakers">
    <div class="container">
      <div class="bakers_block">
        <BakerCard
            v-for="baker in BAKERS"
            :baker
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.bakers_block {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* 3 колонки */
  gap: 1rem;
}

@media screen and (min-width: 750px) {
  .bakers_block {
    grid-template-columns: repeat(2, 1fr); /* 3 колонки */
  }
}
</style>
