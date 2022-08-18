<template>
  <div class="ti-watch-contaienr">
    <img src="../../../assets/logo.png" alt="" />
    <div class="ti-watch-header">
      <div>
        <span>Market Cap</span>
        <span>$1081B</span>
      </div>
      <div>
        <span>24H volume</span>
        <span>$75.89B</span>
      </div>
    </div>
    <ul class="ti-watch-body">
      <li v-for="item in 10" :key="item">
        <div class="ti-watch-coin-des">
          <img src="" alt="" />
          <div class="ti-watch-coin-des-container">
            <div class="ti-watch-coin-names">
              <span class="ti-watch-coin-name">Bitcoin</span>
              <span class="ti-watch-coin-symbol">BTC</span>
            </div>
            <span class="ti-watch-coin-level">AA</span>
          </div>
        </div>
        <div class="ti-watch-coin-price">
          $ 23,427.66
        </div>
        <div class="ti-watch-coin-price-change">
          +123.1%
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { HttpRequestType } from 'src/request';
import { onMounted } from 'vue';
interface Props {
  backgroundColor?: string;
  request: HttpRequestType;
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'rgba(123, 97, 255, 0.05)'
});

onMounted(() => {
  console.log(1);
});

console.log(props);
</script>

<style lang="less" scoped>
ul {
  padding: 0;
  li {
    list-style: none;
  }
}
.ti-watch-contaienr {
  width: 506px;
  height: 810px;
  border-radius: 14px;
  box-sizing: border-box;
  padding: 26px 21px;
  text-align: center;
}
.ti-watch-header {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  > div {
    display: flex;
    flex-direction: column;
  }
  > div:first-child {
    align-items: flex-start;
  }
  > div:last-child {
    align-items: flex-end;
  }
}
.ti-watch-body {
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: 14px 0;
    .ti-watch-coin-des {
      display: flex;
      img {
        width: 31px;
        height: 31px;
        border-radius: 50%;
        border: 1px solid #ccc;
        margin-right: 7px;
      }
      .ti-watch-coin-des-container {
        display: flex;
        align-items: flex-start;
        .ti-watch-coin-names {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .ti-watch-coin-name {
            font-weight: 500;
            font-size: 16px;
            line-height: 100%;
            color: #171717;
          }
          .ti-watch-coin-symbol {
            color: #9e9e9e;
            font-size: 14px;
            line-height: 100%;
          }
        }
        .ti-watch-coin-level {
          font-size: 12px;
          line-height: 14px;
          padding: 0 6px;
          background: #33BA3C;
          color: #fff;
          border-radius: 51px;
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
