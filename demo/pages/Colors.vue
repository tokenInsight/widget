<template>
  <select v-model="selectValue">
    <option value="bitcoin">
      bitcoin
    </option>
    <option value="ethereum">
      eth
    </option>
  </select>
</template>
    
<script setup lang='ts'>
import { ref, watch } from 'vue';

const selectValue = ref('bitcoin');

const emit = defineEmits([ 'change' ]);

watch(
  () => selectValue.value,
   (newValue, oldValue) => {
    console.log('新值:', newValue, '老值:', oldValue);
     emit('change', newValue, oldValue);
  }
);

</script>
    
<style>
    
</style>