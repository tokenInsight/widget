<template>
  <div class="selection-container" @click="showSelectiion=true">
    {{ cuurentSelect }}
    <ul v-show="showSelectiion" class="selection-body">
      <li v-for="(item, index) in selectList.list" :key="index" @click.stop="change(item)">
        {{ item['name'] }}
      </li>
    </ul>
  </div>

  <!-- <select v-model="selectValue">
    <option v-for="(item, index) in selectList.list" :key="index" :value="item['id']">
      {{ item['name'] }}
    </option>
  </select> -->
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';

const selectList = reactive({ list: [] });

const cuurentSelect = ref('请选择');

const showSelectiion = ref(false);

const change = (item)=>{
   emit('change', item['id']);
   showSelectiion.value = false;
   cuurentSelect.value = item['name'];
};

onMounted(() => {
  const options = {
    method: 'GET',
    headers: { Accept: 'application/json', TI_API_KEY: 'cec31bc1-b8d9-4c93-8c38-aaf740793101' }
  };

  fetch('https://api.tokeninsight.com/api/v1/coins/list', options)
    .then((response) => response.json())
    .then((response) => {
      selectList.list = response.data;
    })
    .catch((err) => console.error(err));
});

const emit = defineEmits([ 'change' ]);

</script>

<style lang="less" scoped>

.selection-container {
  width: 404px;
  height: 34px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 10px;
  color: #ccc;
  cursor: pointer;
  position: relative;
  .selection-body {
    width: 404px;
    height: 300px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    top: 40px;
    border-radius: 4px;
    background: #fff;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    li {
      list-style: none;
      display: flex;
      align-items: center;
      height: 34px;
      box-sizing: border-box;
      padding-left: 10px;
      color: #000;
      transition: all 0.3s;
      &:hover{
        background: #efefef;
      }
    }
  }
}
</style>
