<template>
  <div class="ti-watch-contaienr"></div>
</template>

<script setup lang="ts">
import { HttpRequestType } from 'src/request';
import { onMounted } from 'vue';
interface Props {
  backgroundColor?: string
  request: HttpRequestType
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'rgba(123, 97, 255, 0.05)'
});

onMounted( () => {
  console.log(1);
});

console.log(props);
</script>

<style lang="less" scoped>
.ti-watch-contaienr {
  width: 506px;
  height: 810px;
  border-radius: 14px;
  box-sizing: border-box;
  padding: 26px 21px;
}
</style>
