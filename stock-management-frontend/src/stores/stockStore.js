import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

class StockStore {
  portfolio = [];

  constructor() {
    makeAutoObservable(this);
  }

  addStock(symbol, quantity) {
    this.portfolio.push({ symbol, quantity });
  }

  removeStock(symbol) {
    this.portfolio = this.portfolio.filter(stock => stock.symbol !== symbol);
  }

  async savePortfolio() {
    // Implement the logic to save the portfolio to the backend
  }
}

const StockStoreContext = createContext(new StockStore());

export const useStockStore = () => useContext(StockStoreContext);
export { StockStoreContext, StockStore }; // Ensure StockStore is exported here
