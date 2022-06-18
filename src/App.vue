<template>
  <div id="btc"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import TokenInsightWidget from './index';
onMounted(() => {
  const widget = new TokenInsightWidget('cec31bc1-b8d9-4c93-8c38-aaf740793101');
  widget.createPrice({
    el: '#btc',
    tid: 'bitcoin'
  });
});

</script>
<style>
#btc {
  width: 500px;
  height: 300px;
}
</style>
