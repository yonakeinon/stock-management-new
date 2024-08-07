import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import axios from 'axios';

class PortfolioStore {
  portfolio = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchPortfolio = async () => {
    try {
      const response = await axios.get('http://localhost:3000/portfolio');
      this.portfolio = response.data;
    } catch (error) {
      console.error('Failed to fetch portfolio', error);
    }
  };

  savePortfolio = async () => {
    try {
      await axios.post('http://localhost:3000/portfolio', this.portfolio);
      alert('Portfolio saved successfully');
    } catch (error) {
      console.error('Failed to save portfolio', error);
    }
  };
}

const PortfolioStoreContext = createContext(new PortfolioStore());
export const usePortfolioStore = () => useContext(PortfolioStoreContext);
