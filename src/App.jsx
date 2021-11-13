

import { observer } from "mobx-react-lite";
import trades from './store'
import {useEffect, useState, useRef} from 'react'

import { io } from "socket.io-client";




const App = observer(() => {


//  const [trades, setTrades] = useState([])
// const [symbol, setSymbol] = useState['btcusdt']

const ws = useRef(null);
  let messageObjects = []
  let dump = 'dump'
  let dumpArray = [0,1,2,3,4,5]

let timeFrame = '15m'
// let symbol = 'btcusdt'

const handleSymbol = async (e) => {

   await ws.current.close()

 trades.symbol = e.target.value
console.log(trades.symbol)

await wsStart()

}




// setSymbol('btcusdt')

const [isConnected, setConnected] = useState(false);


const wsStart = () => {
  
    // ws.current = new WebSocket(`wss://stream.binance.com:9443/ws/${trades.symbol}@kline_${timeFrame}`);
    ws.current = new WebSocket(`wss://stream.binance.com:9443/ws/ETHUSDT@kline_${timeFrame}`);

    ws.current.onopen = () => console.log("ws opened");
   ws.current.onclose = () => console.log("ws closed");

    ws.current.addEventListener('message', function (event) {
            let messageObject = JSON.parse(event.data)
            console.log(messageObject.k)
            trades.data.push(messageObject.k) 
            messageObjects.push(messageObject.k)
            console.log(trades.data[trades.data.length-1].l)
  })

}

useEffect(() => {
  wsStart()

//   ws.current = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@kline_${timeFrame}`);
//   ws.current.onopen = () => console.log("ws opened");
//   ws.current.onclose = () => console.log("ws closed");
//   ws.current.addEventListener('message', function (event) {
      
//           console.log(event.data)
       
//           let messageObject = JSON.parse(event.data)
//           console.log(messageObject.k)
     
// // setTrades(... messageObject)
// trades.data.push(messageObject.k) 

//           messageObjects.push(messageObject.k)
//           // console.log(messageObjects)
//           console.log(trades.data[trades.data.length-1.['s']])
//           console.log(trades.data[0].l)
//           console.log(trades.data[trades.data.length-1].l)

 
//   // return () => {
//   //     ws.current.close();
//   // };
// }, [null])});
}, [] );



// let output = trades.data.map(it => <li>it.c</li>)

  return (
    <div className="App">

      <div>
            <button onClick={() => setConnected(!isConnected)}>
                {isConnected ? "Connect" : "Dicconnect"}
            </button>
            <button onClick={() => 
               ws.current.close()}>
               Dicconnect
            </button>

            <button value='BTCUSDT' onClick={(e) => handleSymbol(e)} >BTC/USD</button>
            <button value='ETHUSDT' onClick={(e) => handleSymbol(e)} >ETH/USD</button>
        
        </div>
                 <ul className="trades">{dump}</ul>

    </div>
  );
})

export default App