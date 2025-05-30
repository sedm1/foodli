<script setup>
import { useUserStore } from "@/stores/userStore";
import Header from "@/components/Header.vue";
import { reactive } from "vue";

const {user} = useUserStore();

// Локальные значения и флаги редактирования
const form = reactive({
  fio: user.fio,
  phone: user.phone,
  email: user.email,
  address: user.address,
});

const isEditing = reactive({
  fio: !user.fio,
  phone: !user.phone,
  email: !user.email,
  address: !user.address,
});

function startEdit(field) {
  isEditing[field] = true;
}

function saveField(field) {
  user[field] = form[field];
  isEditing[field] = false;
}
</script>

<template>
  <Header/>

  <section class="main">
    <div class="container">
      <h1 class="main_title">Личный кабинет</h1>

      <div class="main_info">
        <!-- FIO -->
        <div class="main_infoItem">
          <div class="main_infoItemTitle">ФИО</div>
          <div class="main_infoItemValue">
            <template v-if="isEditing.fio">
              <input v-model="form.fio" placeholder="Введите ФИО"/>
              <button @click="saveField('fio')">Сохранить</button>
            </template>
            <template v-else>
              <div class="main_infoItemValueValue">{{ user.fio }}</div>

              <button @click="startEdit('fio')">Изменить</button>
            </template>
          </div>
        </div>

        <!-- Phone -->
        <div class="main_infoItem">
          <div class="main_infoItemTitle">Номер телефона</div>
          <div class="main_infoItemValue">
            <template v-if="isEditing.phone">
              <input v-model="form.phone" placeholder="Введите телефон"/>
              <button @click="saveField('phone')">Сохранить</button>
            </template>
            <template v-else>
              <div class="main_infoItemValueValue">{{ user.phone }}</div>

              <button @click="startEdit('phone')">Изменить</button>
            </template>
          </div>
        </div>

        <!-- Email -->
        <div class="main_infoItem">
          <div class="main_infoItemTitle">Email</div>
          <div class="main_infoItemValue">
            <template v-if="isEditing.email">
              <input v-model="form.email" placeholder="Введите email" type="email"/>
              <button @click="saveField('email')">Сохранить</button>
            </template>
            <template v-else>
              <div class="main_infoItemValueValue">{{ user.email }}</div>

              <button @click="startEdit('email')">Изменить</button>
            </template>
          </div>
        </div>

        <!-- Address -->
        <div class="main_infoItem">
          <div class="main_infoItemTitle">Адрес доставки</div>
          <div class="main_infoItemValue">
            <template v-if="isEditing.address">
              <input v-model="form.address" placeholder="Введите адрес"/>
              <button @click="saveField('address')">Сохранить</button>
            </template>
            <template v-else>
              <div class="main_infoItemValueValue">{{ user.address }}</div>
              <button @click="startEdit('address')">Изменить</button>
            </template>
          </div>
        </div>

        <div class="role-switcher">
          <button
              :class="['role-button', user.role === 'покупатель' ? 'active' : '']"
              @click="user.role = 'покупатель'"
          >
            Покупатель
          </button>
          <button
              :class="['role-button', user.role === 'пекарь' ? 'active' : '']"
              @click="user.role = 'пекарь'"
          >
            Пекарь
          </button>
        </div>
      </div>

    </div>
  </section>

  <section class="his">
    <div class="container">
      <h1 class="main_title">История заказов</h1>

      <p>Вы пока не делали заказов</p>
    </div>
  </section>
</template>

<style scoped>
.main_title {
  font-size: 32px;
  margin-bottom: 40px;
}

.main_info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.main_infoItem {
  display: flex;
  justify-content: space-between;
}

.main_infoItemTitle {
  font-size: 18px;
  font-weight: 700;
}

.main_infoItemValue {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 200px;
  gap: 10px;
}

.main_infoItemValue button {
  color: var(--red);
}

.main_infoItemValue input {
  display: block;
  width: 100%;
  padding: 6px 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: 0 none;
}

.main_infoItemValueValue {
  font-weight: 600;
  text-align: right;
  font-size: 20px;
}

.role-switcher {
  display: flex;
  width: 100%;
  gap: 10px;
}

.role-button {
  flex: 1;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--white);
  color: var(--red);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--red);
}

.role-button.active {
  background-color: var(--red);
  color: white;
}

.his {
  margin-top: 50px;
}


</style>
