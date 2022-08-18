<template>
  <select v-model="selectValue">
    <option v-for="(item,index) in selectList.list" :key="index" :value="item['id']">
      {{ item['name'] }}
    </option>
  </select>
</template>
    
<script setup lang='ts'>
import { reactive, ref, watch, onMounted } from 'vue';

const selectValue = ref('bitcoin');

const selectList = reactive({ list: [] });

onMounted(()=>{
  const options = {
  method: 'GET',
  headers: { Accept: 'application/json', TI_API_KEY: 'cec31bc1-b8d9-4c93-8c38-aaf740793101' }
};

fetch('https://api.tokeninsight.com/api/v1/coins/list', options)
  .then(response => response.json())
  .then(response => {
    selectList.list = response.data;
  })
  .catch(err => console.error(err));
});



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