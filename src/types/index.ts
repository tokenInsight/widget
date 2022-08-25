interface CoinDetail {
  id: string;
  logo: string;
  name: string;
  symbol: string;
  market_data: {
    price: {
      price_latest: number;
      price_change_percentage_24h: number;
    }[];
  };
}

export { CoinDetail };
