import HttpRequest, { HttpRequestType } from './request';
import createPrice from './components/price';
import createWatch from './components/watch';
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
  createWatch(params: PriceType) {
    createWatch(params, this.request);
  }
}

export default TokenInsightWidget;
