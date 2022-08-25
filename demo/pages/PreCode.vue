<template>
  <pre v-html="props.code"></pre>
</template>
    
<script setup lang="ts">
const props = defineProps<{code:string}>();
</script>
    
<style>
    
</style>