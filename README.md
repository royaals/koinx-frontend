# KoinX Frontend Assignment

A frontend application that displays cryptocurrency data using the Coingecko API and TradingView widgets. The application is designed to be responsive and closely follows the provided Figma design.

## Features

- Display Bitcoin price in USD and INR with 24-hour change.
- Embed TradingView's BTCUSD chart.
- Show top 3 trending coins using Coingecko's trending API.
- "You May Also Like" section with trending coins' logo, symbol, price, price change, and price graph.
- Horizontally scrollable carousel for trending coins.
- Responsive UI design.
- Dynamic token display based on URL.

## Hosted Link

You can access the live application at [KoinX.devprojects.world](https://koinx.devprojects.world).

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Axios
- Chart.js
- TradingView Widget

## Installation

1. Clone the repository:

```bash
git clone https://github.com/royaals/koinx-frontend.git
cd koinx-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## API References

- [Coingecko API Documentation](https://www.coingecko.com/api/documentation)
- [TradingView Widget Documentation](https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/)

## Sample API Responses

- `/simple/price` API:

  ```json
  {
    "bitcoin": {
      "inr": 5697177,
      "inr_24h_change": 3.6596920153414336,
      "usd": 68726,
      "usd_24h_change": 3.6767559459431545
    }
  }
  ```

- `/search/trending` API: [Sample Response](https://www.notion.so/Sample-API-Response-search-trending-e85623b447e94deb9da67d3b112b8761?pvs=21)
