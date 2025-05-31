<template>
  <header class="header">
    <div class="container">
      <h2 class="header_logo">Foodli</h2>

      <!-- Бургер-иконка -->
      <div class="burger" @click="toggleMenu">
        ☰
      </div>

      <!-- Меню -->
      <nav :class="{ open: isMenuOpen }">
        <ul class="header_menu">
          <li>
            <router-link to="/">Главная</router-link>
          </li>
          <li>
            <router-link to="/bakers">Продавцы</router-link>
          </li>
          <li>
            <router-link to="/profile">Профиль</router-link>
          </li>
          <li>
            <router-link to="/cart">Корзина
              <span class="cart" v-if="cartStore.totalCount">
                {{ cartStore.totalCount }}
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart.js";

const cartStore = useCartStore();
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
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

.burger {
  display: none;
  font-size: 30px;
  cursor: pointer;
}

/* Меню по умолчанию */
.header_menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

nav {
  transition: all 0.3s ease;
}

/* Мобильная версия */
@media (max-width: 768px) {
  .burger {
    display: block;
  }

  nav {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    display: none;
    z-index: 20;
  }

  nav.open {
    display: block;
  }

  .header_menu {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
  }
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
