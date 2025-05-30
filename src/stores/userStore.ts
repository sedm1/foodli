import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useUserStore = defineStore('user', () => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || {};

    const user = ref({
        role: storedUser.role || '',
        fio: storedUser.fio || '',
        email: storedUser.email || '',
        phone: storedUser.phone || '',
        address: storedUser.address || '',
    });

    watch(user, (newVal) => {
        localStorage.setItem('user', JSON.stringify(newVal));
    }, { deep: true });

    function toggleRole() {
        user.value.role = user.value.role === 'пекарь' ? 'покупатель' : 'пекарь';
    }

    return {
        user,
        toggleRole,
    };
});
