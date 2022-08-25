<template>
  <div class="content">
    <div class="slide">
      <div v-for="(item, index) in menuList" :key="index">
        <div class="group">
          {{ item.zh }}
        </div>
        <div class="menus">
          <router-link v-for="(val, a) in item.children" :key="a" :to="val.path" class="menu-item">
            {{ val.zh }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="doc-container">
      <router-view />
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { reactive } from 'vue';
import menus from '../menu';

const menuList = reactive(menus);

</script>
    
<style lang="less" scoped>
.content{
  width: 100%;
  height: 100%;
  display: flex;
}
.slide {
  width: 272px;
  height: 100%;
  border-right: 1px solid #ccc;
  overflow: hidden;
  position: relative;
  z-index: auto;

  .group {
    padding-left: 32px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #767c82;
    font-size: 14px;
  }

  .menus {
    box-sizing: border-box;
    padding: 0 5px;

    .menu-item {
      height: 48px;
      padding-left: 48px;
      border-radius: 4px;
      text-decoration: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: 0.4s;
      color: #171717;

      &:hover {
        background: #eee;
      }
    }

    .router-link-exact-active {
      background: #f9f7ff;
      color: #5334ab;
    }
  }
}
.doc-container{
  padding: 32px 24px 56px 56px;
}
</style>