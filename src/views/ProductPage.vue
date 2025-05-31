<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import { foodByCategory } from "@/products.js";
import Header from "@/components/Header.vue";
import { toast } from 'vue3-toastify';

const route = useRoute();
const cart = useCartStore();

const productName = route.params.name;
const sellerName = route.query.seller;

const product = computed(() => {
  for (const category of Object.values(foodByCategory)) {
    const found = category.find(p => p.name === productName);
    if (found) return found;
  }
  return null;
});

function addToCart(product) {
  cart.addToCart(product);
  toast("Продукт успешно добавлен в корзину", {
    type: toast.TYPE.SUCCESS,
    position: toast.POSITION.TOP_RIGHT,
  });
}
</script>

<template>
  <Header></Header>

  <section class="product" v-if="product">
    <div class="container">
      <div class="productImg">
        <img :src="'/images/products/' + product.img" :alt="product.name"/>
      </div>

      <div class="productInfo">
        <h1 class="productInfoTitle">{{ product.name }}</h1>
        <p class="productInfoDescription">{{ product.desc }}</p>
        <p class="productInfoPrice"><strong>{{ product.price }} ₽ / кг</strong></p>
        <button class="productInfoButton" @click="addToCart(product)">
          {{ sellerName ? `Купить у ${sellerName}` : 'Добавить в корзину' }}
        </button>
      </div>
    </div>
  </section>
</template>


<style scoped>
.product .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.productImg {
  max-width: 500px;
  width: 100%;
  margin: 0 auto 20px;
}

.productInfoTitle {
  font-size: 25px;
  margin-bottom: 10px;
}

.productInfoDescription {
  margin-bottom: 10px;
}

.productInfoButton {
  max-width: 500px;
  width: 100%;
  padding: 10px 0;
  background: var(--red);
  color: var(--white);
  font-weight: 500;
  margin-top: 20px;
  border-radius: 20px;
}
</style>
