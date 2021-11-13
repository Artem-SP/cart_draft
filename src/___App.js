import { observer } from "mobx-react-lite";
import trades from './store'
import {useEffect, useState, useRef} from 'react'
import {wsServer} from "./wsServer";


import { io } from "socket.io-client";




const App = observer(() => {



  let dump = 'dump'
  let dumpArray = [0,1,2,3,4,5]

let timeFrame = '15m'
let symbol = 'btcusdt'




const [isConnected, setConnected] = useState(false);




// let output = trades.data.map(it => <li>it.c</li>)

  return (
    <div className="App">

      <div>
            <button onClick={() => wsServer().wsStart()}>
                Connect
            </button>
            <button onClick={() => 
               wsServer().wsсlose()}>
               Dicconnect
            </button>
        </div>
                 <ul className="trades">{dump}</ul>

    </div>
  );
})

export default App