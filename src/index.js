import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Web3 from 'web3';

// Initialize web3
let web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

// Get contract instance
const contractABI = []; // ABI of the contract
const contractAddress = ""; // Address of the deployed contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

ReactDOM.render(
  <React.StrictMode>
    <App contract={contract} />
  </React.StrictMode>,
  document.getElementById('root')
);
