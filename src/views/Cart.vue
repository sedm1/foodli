<script setup>

import Header from "@/components/Header.vue";
import FoodItem from "@/components/FoodItem.vue";

import { useCartStore } from "@/stores/cart.ts";

const cartStore = useCartStore();
</script>

<template>
  <Header></Header>

  <main>
    <section class="cart">
      <div class="container">
        <h1 class="cart_title" v-if="cartStore.items.length">Корзина</h1>

        <div class="cart_food" v-if="cartStore.items.length">
          <FoodItem
              v-for="food in cartStore.items"
              :key="food.name"
              :item="food"
          />
        </div>


        <div class="cart_empty" v-else>
          Вы ничего не добавили :(
        </div>
      </div>
    </section>

    <button
        v-if="cartStore.items.length"
        class="cart_button"
    >
      Заказать и забрать заказ: {{ cartStore.totalPrice }} руб.
    </button>
  </main>
</template>

<style scoped>
.cart {
  min-height: 100dvh;
  position: relative;
}

.cart_title {
  font-size: 32px;
  margin-bottom: 20px;
}

.cart_button {
  max-width: 500px;
  width: 90%;
  background: var(--red);
  color: var(--white);
  font-weight: 500;
  border-radius: 10px;
  padding: 8px 0;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.cart_empty {
  font-size: 40px;
  margin-top: 50px;
  text-align: center;
}

.cart_food {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
