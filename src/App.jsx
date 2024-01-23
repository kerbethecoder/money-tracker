import { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit() {}

  return (
    <main>
      <h1>
        $400.<span>00</span>
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
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">time for new tv</div>
          </div>
          <div className="right">
            <div className="price red"> -$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">New Gig</div>
            <div className="description">time for new tv</div>
          </div>
          <div className="right">
            <div className="price green"> +$400</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
