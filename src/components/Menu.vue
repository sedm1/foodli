<template>
  <div class="container">
    <div class="menu">
      <button
          class="menu-item"
          v-for="item in menuItems"
          :key="item"
          @click="selectItem(item)"
          :class="{ active: selectedMenu === item }"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(['update:menu']);

const menuItems = [
  "Торты",
  "Пирожные",
  "Булочки",
  "Пироги",
  "Печенье",
  "Кексы",
  "Маффины",
];

const selectedMenu = ref('Торты');

const selectItem = (item) => {
  selectedMenu.value = item;
  emit('update:menu', item);
}

</script>

<style scoped>
.menu {
  max-width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: center;
  padding: 10px 0px;
}

.menu-item {
  font-weight: 500;
  transition: .3s;
}

.menu-item:hover {
  color: var(--red);
}

.menu-item.active {
  color: var(--red);
}

@media screen and (max-width: 1400px) {
  .menu {
    justify-content: flex-start;
  }
}
</style>
