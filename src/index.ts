import HttpRequest, { HttpRequestType } from './request/index';
import createPrice from './components/price';
import { PriceType } from './components/price';

class TokenInsightWidget {
  key: string;
  request: HttpRequestType;

  constructor(key: string) {
    this.key = key;
    this.request = new HttpRequest(this.key);
  }
  createPrice(params: PriceType) {
    createPrice(params, this.request);
  }
}

export default TokenInsightWidget;
