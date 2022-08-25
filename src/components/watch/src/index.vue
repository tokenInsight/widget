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