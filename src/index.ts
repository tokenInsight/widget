type WidgetName = "CoinTicker" | "CoinMarket" | "CoinPrice";
import InitButton from "./components/button/index";

type params = { widgetName: WidgetName; el: string };

class TokenInsightWidget {
  widgetName: string;
  el: string;
  constructor({ widgetName, el }: params) {
    this.widgetName = widgetName;
    this.el = el;
  }
  // TODO
  initWidget() {
    switch (this.widgetName) {
      case "CoinTicker":
        InitButton(this.el);
        return;
      case "CoinMarket":
        return;
      case "CoinPrice":
        return;
      default:
        return "";
    }
  }
}

export default TokenInsightWidget;
