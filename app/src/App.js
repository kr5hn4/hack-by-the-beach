import React, { Component } from 'react';
import { DrizzleProvider } from '@drizzle/react-plugin';
import {
  LoadingContainer,
  AccountData,
  ContractData,
  ContractForm,
} from '@drizzle/react-components';

import './App.css';

import drizzleOptions from './drizzleOptions';

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <div>
            <AccountData accountIndex={0} units={'ether'} precision={3} />
            <ContractData contract="Greetings" method="get" />
            <ContractForm contract="Greetings" method="set" />
          </div>
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
