import { observer } from "mobx-react-lite";
import trades from "./store";
import { useEffect, useState, useRef } from "react";

const App = observer(() => {
  const [symbol, setSymbol] = useState("btcusdt");

  const ws = useRef(null);

  let timeFrame = "15m";

  const handleSymbol = async (e) => {
    await ws.current.close();
    setSymbol(e.target.value);
    trades.addSymbol(symbol);
    console.log(trades.symbol);
    await wsStart();
  };

  const wsStart = () => {
    ws.current = new WebSocket(
      `wss://stream.binance.com:9443/ws/${trades.symbol}@kline_${timeFrame}`
    );
  };

  useEffect(() => {
    ws.current = new WebSocket(
      `wss://stream.binance.com:9443/ws/${trades.symbol}@kline_${timeFrame}`
    );
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");
    ws.current.addEventListener("message", function (event) {
      let messageObject = JSON.parse(event.data);
      console.log(messageObject);

      trades.data.push(messageObject.k);
      console.log(trades.data[trades.data.length - 1].l);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => ws.current.close()}>Dicconnect</button>

        <button value="BTCUSDT" onClick={(e) => handleSymbol(e)}>
          BTC/USD
        </button>
        <button value="ETHUSDT" onClick={(e) => handleSymbol(e)}>
          ETH/USD
        </button>

        <button onClick={wsStart()}>Start WS</button>
      </div>
      <ul className="trades"></ul>
    </div>
  );
});

export default App;
