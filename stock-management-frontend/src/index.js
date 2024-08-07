import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { StockStoreContext, StockStore} from './stores/stockStore';
import './index.css'; // Use your custom CSS

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StockStoreContext.Provider value={new StockStore()}>
    <Router>
      <App />
    </Router>
  </StockStoreContext.Provider>
);
