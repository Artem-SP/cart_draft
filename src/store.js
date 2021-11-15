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

addSymbol(symbol) { this.sympol = symbol }
  
}

export default new Trades();
