import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Typography, Row, Col, Card } from 'antd';
import { useParams } from 'react-router-dom';
import { useStockStore } from '../stores/stockStore';

const { Title } = Typography;

const Stock = observer(() => {
  const { symbol } = useParams();
  const stockStore = useStockStore();

  useEffect(() => {
    stockStore.fetchStockQuote(symbol);
  }, [stockStore, symbol]);

  return (
    <div>
      <Title level={2}>{symbol} Stock Quote</Title>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          {stockStore.stockQuote ? (
            <Card>
              <p>Price: {stockStore.stockQuote.price}</p>
              <p>Change: {stockStore.stockQuote.change}</p>
              <p>Percent Change: {stockStore.stockQuote.percentChange}</p>
            </Card>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
    </div>
  );
});

export default Stock;
