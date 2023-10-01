'use client';

import './styles.css';
import { useState } from 'react';

const BuyOrder = () => {
  const [orderBook, setOrderBook] = useState({
    buyOrder: [],
    sellOrder: [],
  });

  const generateBuyOrder = () => {
    // setActiveOrderBook(0)
    const randomNum = Math.random();
    const order = {
      id: randomNum,
      size: randomNum,
      price: 37000 + randomNum * 2000,
    };
    // order exist
    const newOrders = [...orderBook.buyOrder];
    newOrders.push(order);
    // newOrders have children or length === 0
    const sortedNewOrders = newOrders.sort((a, b) => {
      if (a.price < b.price) {
        return 1;
      } else {
        return -1;
      }
    });

    setOrderBook((prevState) => ({
      ...prevState,
      buyOrder: sortedNewOrders,
    }));
  };

  const generateSellOrder = () => {
    const randomNum = Math.random();
    const order = {
      id: randomNum,
      size: randomNum,
      price: 37000 + randomNum * 2000,
    };
    const newOrders = [...orderBook.sellOrder];
    newOrders.push(order);
    const sortedNewOrders = newOrders.sort((a, b) => {
      return a.price < b.price ? 1 : -1;
    });
    setOrderBook((prevState) => ({
      ...prevState,
      sellOrder: sortedNewOrders,
    }));
  };

  return (
    <div className='App'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          justifyContent: 'center',
        }}>
        <button className='buyButton' onClick={generateBuyOrder}>
          Buy
        </button>
        <button className='sellButton' onClick={generateSellOrder}>
          Sell
        </button>
      </div>
      <div>
        {orderBook.sellOrder.map((sellItem) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                justifyContent: 'center',
              }}
              key={sellItem.id}>
              <p>{sellItem.size.toFixed(4)}</p>
              <p className='sellPrice'>{sellItem.price.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <br />
      {orderBook.buyOrder.map((buyItem) => {
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              justifyContent: 'center',
            }}
            key={buyItem.id}>
            <p>{buyItem.size.toFixed(4)}</p>
            <p className='buyPrice'>{buyItem.price.toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BuyOrder;
