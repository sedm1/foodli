<script setup lang="ts">
defineProps<{
  baker: {
    fullName: string,
    specialty: string,
    rating: number,
    reviews: { fullname: string, comment: string }[],
  };
}>();
</script>

<template>
  <router-link :to="`/seller/${encodeURIComponent(baker.fullName)}`" class="seller-card">
    <img src="/images/profile.png" alt="Фото профиля" class="profile-img"/>
    <div class="info">
      <h1>{{ baker.fullName }}</h1>
      <p class="specialty">{{ baker.specialty }}</p>
      <p class="rating">⭐ {{ baker.rating }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.seller-card {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 1.5rem;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #eee;
}

.specialty {
  margin-top: 0.4rem;
  color: #777;
  font-style: italic;
}

.rating {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: #f5a623;
}

@media (max-width: 600px) {
  .seller-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-img {
    width: 100px;
    height: 100px;
  }
}
</style>
