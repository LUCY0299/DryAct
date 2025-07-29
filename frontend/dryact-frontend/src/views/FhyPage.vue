<template>
  <div class="fhy-page">
    <div class="iframe-container">
      <iframe src="https://fhy.wra.gov.tw/fhyv2/" frameborder="0"></iframe>
    </div>
    <button class="btn-circle" @click="goToTallyPage">→</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToTallyPage = () => {
  router.push('/tally');
};
</script>

<style scoped>
.fhy-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.iframe-container {
  width: 80%;
  height: 80%;
  border: 2px solid #ccc;
  padding: 1rem;
}

iframe {
  width: 100%;
  height: 100%;
}

.btn-circle {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.btn-circle:hover {
  background-color: #45a049;
}
</style>
