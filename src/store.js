import { makeAutoObservable, configure } from "mobx";



configure({
    useProxies: "never"
})

class Trades {
  data = [];
  symbol = 'btcusdt'
  constructor() {
    makeAutoObservable(this);
  }


  
}

export default new Trades();
