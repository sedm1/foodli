import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

export interface CartItem {
    name: string;
    price: number;
    img: string;
    quantity: number;
}

export const useCartStore = defineStore('cart', () => {
    // Состояние
    const items = ref<CartItem[]>([]);

    // --- Загрузка из localStorage при старте
    const saved = localStorage.getItem('cart');
    if (saved) {
        items.value = JSON.parse(saved);
    }

    // --- Автосохранение при изменении
    watch(items, (newVal) => {
        localStorage.setItem('cart', JSON.stringify(newVal));
    }, { deep: true });

    // --- Геттеры
    const totalCount = computed(() =>
        items.value.reduce((sum, item) => sum + item.quantity, 0)
    );

    const totalPrice = computed(() =>
        items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    // --- Действия
    function addToCart(product: { name: string; price: number; img: string }) {
        const existing = items.value.find(i => i.name === product.name);
        if (existing) {
            existing.quantity++;
        } else {
            items.value.push({ ...product, quantity: 1 });
        }
    }

    function removeFromCart(name: string) {
        items.value = items.value.filter(item => item.name !== name);
    }

    function changeQuantity(name: string, amount: number) {
        const item = items.value.find(i => i.name === name);
        if (item) {
            item.quantity += amount;
            if (item.quantity <= 0) removeFromCart(name);
        }
    }

    function clearCart() {
        items.value = [];
    }

    return {
        items,
        totalCount,
        totalPrice,
        addToCart,
        removeFromCart,
        changeQuantity,
        clearCart
    };
});
