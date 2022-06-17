import createPrice from './components/price';
import { priceParams } from './components/price';

type WidgetParams = {
  key: string;
};
class TokenInsightWidget {
  key: string;
  constructor(widget: WidgetParams) {
    this.key = widget.key;
  }
  createPrice(params: priceParams) {
    createPrice(params);
  }
}

const widget = new TokenInsightWidget({
  key: 'cec31bc1-b8d9-4c93-8c38-aaf740793101'
});

widget.createPrice({
  el: '#buttonWidget'
});

export default TokenInsightWidget;
