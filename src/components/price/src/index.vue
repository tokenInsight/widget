<template>
  <div class="ti-price-container" :style="bgColor">
    <a href="https://www.tokeninsight.com/en/coins/bitcoin/overview" target="_blank">
      <div class="ti-price-wrapper">
        <img v-if="logo" class="ti-price-logo" :src="logo" alt="">
        <span v-else class="ti-price-logo"></span>
        <div class="ti-price-name">
          <span class="symbol">{{ symbol }}</span>
          <span class="abbreviate">{{ name }}</span>
        </div>
      </div>
      <div class="ti-coin-price-wrapper">
        <span class="ti-coin-price">${{ coinPrice.price }}</span>
        <div class="ti-coin-changes">
          <span class="ti-coin-change24" :class="coinPrice.change24 > 0 ? 'green' : 'red'">{{ coinPrice.change24
          }}%</span>
          <span>24H</span>
        </div>
      </div>
    </a>
  </div>
</template>
<script setup lang="ts" name="Price">
import { HttpRequestType } from 'src/request';
import { computed, onMounted, ref, reactive } from 'vue';

const logo = ref('');
const name = ref('-');
const symbol = ref('-');
const coinPrice = reactive({
  price: '-',
  change24: 0
});

interface Props {
  tid?: string;
  backgroundColor?: string;
  request: HttpRequestType
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: 'rgba(123, 97, 255, 0.05)'
});

const bgColor = computed(() => {
  return `background:${props.backgroundColor}`;
});

onMounted(async () => {
  try {
    const res = await props.request.get(`https://api.tokeninsight.com/api/v1/coins/${props.tid}`);
    if (res?.status.code === 0) {
      logo.value = res.data.logo;
      name.value = res.data.name;
      symbol.value = res.data.symbol;
      if (res.data.market_data.price.length > 0) {
        coinPrice.price = (res.data.market_data.price[0].price_latest).toFixed(2);
        const change24 = (res.data.market_data.price[0].price_change_percentage_24h * 100).toFixed(2);
        coinPrice.change24 = Number(change24);
      }
    }
  } catch (error) {
    console.log(error);
  }
});





</script>

<style lang="less" scoped>
.ti-price-container {
  width: 282px;
  height: 62px;
  border: 1px solid rgba(123, 97, 255, 0.1);
  border-radius: 5px;

  a {
    padding: 13px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    text-decoration: none;
    color: #000;
  }

  .ti-price-wrapper {
    display: flex;
    height: 37px;

    .ti-price-logo {
      width: 37px;
      height: 37px;
      border-radius: 50%;
      margin-right: 10px;
      border-radius: 50%;
      display: block;
      background: #ccc;
    }

    .ti-price-name {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .symbol {
        font-size: 18px;
        line-height: 18px;
      }

      .abbreviate {
        font-size: 14px;
        line-height: 14px;
        color: #888888;
      }
    }
  }

  .ti-coin-price-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    height: 37px;

    .ti-coin-price {
      font-size: 18px;
    }

    .ti-coin-changes {
      font-size: 14px;
      display: flex;
      justify-content: flex-end;

      span {
        margin-left: 5px;
      }

      span:last-child {
        color: #888;
      }
    }
  }
}

.red {
  color: #e96975;
}

.green {
  color: #32be88;
}
</style>