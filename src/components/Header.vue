<template>
  <header class="header">
    <div class="container">
      <h2 class="header_logo">
        Foodli
      </h2>

      <nav>
        <ul class="header_menu">
          <li>
            <router-link to="/">Главная</router-link>
          </li>
          <li>
            <router-link to="/cart">Корзина <span class="cart" v-if="cartStore.totalCount">{{
                cartStore.totalCount
              }}</span>
            </router-link>
          </li>

          <li>
            <router-link to="/profile">Профиль</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from "@/stores/cart.js";

const cartStore = useCartStore();
</script>

<style scoped>
.header {
  padding: 20px 0;
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header_logo {
  font-size: 30px;
  font-weight: 700;
}

.header_menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

li {
  position: relative;
}

.cart {
  color: var(--white);
  width: 15px;
  height: 15px;
  border-radius: 15px;
  position: absolute;
  background: red;
  top: -4px;
  right: -10px;
  text-align: center;
  font-size: 12px;
}
</style>
