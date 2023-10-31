import React, { useState } from 'react';

function App({ contract }) {
  const [data, setData] = useState('');
  const [input, setInput] = useState('');

  // Function to get data from the contract
  const getData = async () => {
    const result = await contract.methods.get().call();
    setData(result);
  };

  // Function to set data in the contract
  const setDataInContract = async () => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await contract.methods.set(input).estimateGas();
    const result = await contract.methods.set(input).send({ from: account, gas });
    console.log(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Contract Interaction</h1>
        <div>
          <button onClick={getData}>Get Data</button>
          <button onClick={setDataInContract}>Set Data</button>
          <input type="text" onChange={e => setInput(e.target.value)} />
          <p>Data: {data}</p>
        </div>
      </header>
    </div>
  );
}

export default App;

