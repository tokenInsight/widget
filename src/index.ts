type WidgetName = "CoinTicker" | "CoinMarket" | "CoinPrice";

type params = { widgetName: WidgetName; el: string };

// class TokenInsightWidget {
//   widgetName: string;
//   el: string;
//   constructor({ widgetName, el }: params) {
//     this.widgetName = widgetName;
//     this.el = el;
//   }
//   static createTicker(){

//   }
//   // TODO
//   initWidget() {
//     switch (this.widgetName) {
//       case "CoinTicker":
//         InitButton(this.el);
//         return;
//       case "CoinMarket":
//         return;
//       case "CoinPrice":
//         return;
//       default:
//         return "";
//     }
//   }
// }

// export default TokenInsightWidget;
