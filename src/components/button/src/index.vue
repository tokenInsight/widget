<template>
  <div>{{ text }}</div>
</template>
<script setup lang="ts">
type BtnProps={
  text:string
}

defineProps<BtnProps>()
</script>

<style lang="less" scoped>
  div{
    width: 700px;
  }
</style>