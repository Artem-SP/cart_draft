



let timeFrame = '15m'
let symbol = 'btcusdt'

export const wsServer = () => {

const ws = null

const wsStart = () => {


ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@kline_${timeFrame}`);
  ws.onopen = () => console.log("ws opened");
  ws.onclose = () => console.log("ws closed");
  ws.addEventListener('message', function (event) {
      
          console.log(event.data)
       
          let messageObject = JSON.parse(event.data)
          console.log(messageObject.k)
     
// setTrades(... messageObject)
// trades.data.push(messageObject.k) 

          // messageObjects.push(messageObject.k)
          // console.log(messageObjects)
          // console.log(trades.data[trades.data.length-1])
          // console.log(typeof(trades.data[trades.data.length-1]))

 
  // return () => {
  //     ws.current.close();
  })}

const wsClose = () =>{
  ws.close();

}


}

// export default wsSerwer


  