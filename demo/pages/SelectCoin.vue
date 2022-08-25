<template>
  <div class="selection-container" @click.stop="showSelectiion = true">
    <div v-if="!currentSelect" class="selection-placeholder">
      Choose
    </div>
    <div v-else class="selection-content">
      {{ currentSelect }}
    </div>
    <ul v-show="showSelectiion" ref="selectRef" class="selection-body">
      <li v-for="(item, index) in selectList.list" :key="index" :class="{ act: currentSelect === item['name'] }" @click.stop="change(item)">
        {{ item['name'] }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted } from 'vue';

const selectList = reactive({ list: [] });

const currentSelect = ref('');

const currentId = ref('bitcoin');

const selectRef = ref();

const showSelectiion = ref(false);

const change = (item) => {
  emit('change', item['id'], currentId.value);
  showSelectiion.value = false;
  currentSelect.value = item['name'];
  currentId.value = item['id'];
};

// eslint-disable-next-line id-length
const bodyCloseMenus = (e) => {
  if (!selectRef.value.contains(e.target)){
    showSelectiion.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', bodyCloseMenus);
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

onUnmounted(()=>{
  document.removeEventListener('click', bodyCloseMenus);
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
  cursor: pointer;
  position: relative;
  transition: all 0.3s;

  &:hover{
    border-color: #5334ab;
  }
  .selection-placeholder {
    color: #ccc;
  }
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
      &:hover {
        background: #efefef;
        color: #5334ab;
      }
    }
    .act {
      background: #efefef;
    }
  }
}
</style>
