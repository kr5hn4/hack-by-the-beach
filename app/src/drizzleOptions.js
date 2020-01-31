import Web3 from 'web3';
import Greetings from './contracts/Greetings.json';

const options = {
  web3: {
    block: false,
    customProvider: new Web3('ws://localhost:7545'),
  },
  contracts: [Greetings],
  events: {
    SimpleStorage: ['StorageSet'],
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
