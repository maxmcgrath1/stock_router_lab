import React from 'react'
import { useParams } from "react-router";
import data from '../data';


const Stock = () => {
    const params = useParams();
    const symbol = params.symbol
    const stock = data.find((stock) => stock.symbol === symbol);
    return (
        <div>
            <h2>{stock.name}</h2>
            <h3>{stock.symbol}</h3>
            <h3>Last Price: {stock.lastPrice}</h3>
            <h4>Change: {stock.change}</h4>
            <h4>Open: {stock.open}</h4>
            <h4>High: {stock.high}</h4>
            <h4>Low: {stock.low}</h4>
        </div>
    )
};

export default Stock;