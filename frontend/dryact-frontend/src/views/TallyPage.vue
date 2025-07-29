<template>
  <div class="tally-page">
    <iframe data-tally-src="https://tally.so/r/mBWe85?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="乾旱問卷"></iframe>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = "https://tally.so/widgets/embed.js";
  script.async = true;
  document.head.appendChild(script);
});
</script>

<style scoped>
.tally-page {
  margin: 0;
  height: 100vh;
  overflow: hidden;
}

iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 0;
}
</style>