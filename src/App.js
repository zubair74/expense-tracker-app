import React from 'react';
import './App.css';
import {Header} from './components/header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from './TransContext/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className = 'container'>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
