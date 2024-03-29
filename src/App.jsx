import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = import.meta.env.VITE_REACT_APP_API_URL + '/transactions';
    const response = await fetch(url);
    return await response.json();
  }

  function handleSubmit(event) {
    event.preventDefault();

    // env syntax for vite envs
    const url = import.meta.env.VITE_REACT_APP_API_URL + '/transaction';
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime,
      }),
    }).then((response) => {
      response.json().then((json) => {
        setName('');
        setDatetime('');
        setDescription('');
        console.log('result', json);
      });
    });
  }

  let balance = 0;
  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }

  return (
    <main>
      <h1>
        ${balance}
        {/* <span>.00</span> */}
      </h1>

      <form onSubmit={handleSubmit} action="">
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="+200 new samsung tv"
            name=""
            id=""
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            name=""
            id=""
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            name=""
            id=""
          />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>

      <div className="transactions">
        {transactions.length > 0 &&
          transactions.map((transaction, index) => (
            <div className="transaction" key={index}>
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
                <div
                  className={
                    'price ' + (transaction.price < 0 ? 'red' : 'green')
                  }>
                  {transaction.price}
                </div>
                <div className="datetime">2022-12-18 15:45</div>
              </div>
            </div>
          ))}

        {/* <div className="transaction">
          <div className="left">
            <div className="name">New Gig</div>
            <div className="description">time for new tv</div>
          </div>
          <div className="right">
            <div className="price green"> +$400</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default App;
