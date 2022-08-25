<template>
  <div class="ti-price-container" :style="bgColor">
    <a :href="`https://www.tokeninsight.com/en/coins/${id}/overview`" target="_blank">
      <div class="ti-price-wrapper">
        <img v-if="logo" class="ti-price-logo" :src="logo" alt="" />
        <span v-else class="ti-price-logo"></span>
        <div class="ti-price-name">
          <span class="symbol">{{ symbol }}</span>
          <span class="abbreviate">{{ name }}</span>
        </div>
      </div>
      <div class="ti-coin-price-wrapper">
        <span class="ti-coin-price">${{ coinPrice.price }}</span>
        <div class="ti-coin-changes">
          <span class="ti-coin-change24" :class="coinPrice.change24 > 0 ? 'green' : 'red'">{{ coinPrice.change24 }}%</span>
          <span>24H</span>
        </div>
      </div>
    </a>
  </div>
</template>
<script setup lang="ts" name="Price">
import { HttpRequestType } from 'src/request';
import { CoinDetail } from 'src/types';
import { computed, onMounted, ref, reactive } from 'vue';

interface Props {
  tid?: string;
  backgroundColor?: string;
  request: HttpRequestType;
}

const id = ref('');
const logo = ref('');
const name = ref('-');
const symbol = ref('-');
const coinPrice = reactive({
  price: '-',
  change24: 0
});

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'rgba(123, 97, 255, 0.05)'
});

const bgColor = computed(() => {
  return `background:${props.backgroundColor}`;
});

onMounted(async () => {
  try {
    const res = await props.request.get<CoinDetail>(`https://api.tokeninsight.com/api/v1/coins/${props.tid}`);
    if (res.status.code === 0) {
      id.value = res.data.id;
      logo.value = res.data.logo;
      name.value = res.data.name;
      symbol.value = res.data.symbol;
      if (res.data.market_data.price.length > 0) {
        coinPrice.price = res.data.market_data.price[0].price_latest.toFixed(2);
        const change24 = (res.data.market_data.price[0].price_change_percentage_24h * 100).toFixed(2);
        coinPrice.change24 = Number(change24);
      }
    }
  } catch (error) {
    console.log(error);
  }
});
</script>
