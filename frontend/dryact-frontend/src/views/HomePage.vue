<template>
  <div class="home-page">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </div>
    <button class="btn-round" @click="goToFhyPage">開始</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToFhyPage = () => {
  router.push('/fhy');
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.logo-container {
  margin-bottom: 2rem;
}

.logo {
  max-width: 200px;
}

.btn-round {
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-round:hover {
  background-color: #45a049;
}
</style>
