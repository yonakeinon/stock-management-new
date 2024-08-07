import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStockStore } from '../stores/stockStore';

const Portfolio = observer(() => {
  const stockStore = useStockStore();
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleAddStock = () => {
    stockStore.addStock(symbol, quantity);
    setSymbol('');
    setQuantity(0);
  };

  const handleSavePortfolio = async () => {
    await stockStore.savePortfolio();
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Portfolio</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Stock Symbol</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stockStore.portfolio.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>{stock.quantity}</td>
              <td>
                <button className="button" onClick={() => stockStore.removeStock(stock.symbol)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="Stock Symbol" />
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" />
        <button className="button" onClick={handleAddStock}>Add Stock</button>
      </div>
      <button className="button" onClick={handleSavePortfolio}>Save Portfolio</button>
    </div>
  );
});

export default Portfolio;
