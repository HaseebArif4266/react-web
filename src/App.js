import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [coins, setcoins] = useState([]);

  useEffect(() => {
    axios
      .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      ).then(res => {
        setcoins(res.data);
      }).catch(error => console.log(error));
  });

  return (
    <div className="App">
      {coins.map(coin =>{
        return(
          <div>
            <table>
              <tr>
                <td className='td1'>{coin.market_cap_rank}</td>
                <td><img src={coin.image} style={{width: 10 + "%"}}></img></td>
                <td>{coin.name}</td>                
                <td>{coin.symbol}</td>
                <td>{coin.current_price}</td>
                <td>{coin.arket_cap}</td>
                </tr>
            </table>
          </div>
        )
      })}
    </div>
  );
}

export default App;
