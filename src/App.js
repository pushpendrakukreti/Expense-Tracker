import './App.css';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense';
import { TransactionList } from './components/TransactionList/TransactionList';
import { AddTransaction } from './components/AddTransaction/AddTransaction';
import { GlobarProvider } from './context/GlobalState';

function App() {
  return (
    <GlobarProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobarProvider>
  );
}

export default App;
