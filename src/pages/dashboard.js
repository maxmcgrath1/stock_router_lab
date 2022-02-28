import React from 'react'
import stocks from '../data'
import { Link } from "react-router-dom";

const Dashboard = (props) => {
    return (
        <div className="stocks">
            {stocks.map((coin) => {
                const { name, symbol } = coin;

                return (
                    <Link to={`/stock/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default Dashboard;