<template>
  <div class="container">
    <div class="header">
      <div class="title">
        <img src="../assets/logo_white.svg" alt="">
      </div>
      <div class="nav-menu">
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/docs/introduction">
          Docs
        </router-link>
      </div>
      <div class="nav-menu-right">
        <a target="_blank" href="https://github.com/tokenInsight/widget">Github</a>
        <span>v1.0.0</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  border-bottom: 1px solid #ccc;
}

.header {
  width: 95%;
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    display: flex;
    align-items: center;
    font-size: 16px;

    span {
      margin-left: 10px;
    }
  }

  .nav-menu {
    width: 60%;
    display: flex;

    a {
      margin-right: 30px;
      cursor: pointer;
      color: #171717;
      text-decoration: none;
      &:hover{
        color: #5334ab;
      }
    }

    .router-link-exact-active {
      color: #5334ab;
    }
  }

  .nav-menu-right {
    a {
      text-decoration: none;
      color: #171717;
      margin-right: 30px;

      &:hover {
        color: #5334ab;
      }
    }
  }
}
</style>