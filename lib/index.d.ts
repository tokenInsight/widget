declare type WidgetName = "CoinTicker" | "CoinMarket" | "CoinPrice";
declare type params = {
    widgetName: WidgetName;
    el: string;
};
declare class TokenInsightWidget {
    widgetName: string;
    el: string;
    constructor({ widgetName, el }: params);
    initWidget(): "" | undefined;
}
export default TokenInsightWidget;
