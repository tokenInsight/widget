<template>
  <div>{{ text }}</div>
</template>
<script setup lang="ts" name="Price">
type PriceProps={
  text:string
}

defineProps<PriceProps>()
</script>

<style lang="less" scoped>
  div{
    width: 700px;
  }
</style>