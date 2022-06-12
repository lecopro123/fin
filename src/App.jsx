import React, { useContext } from 'react';
import { TransactionContext } from './Context/TransactionContext';
import { Navbar, Welcome, Footer, Transactions, Services } from './components';

const App = () => {

  const { conn, CurrentAccount } = useContext(TransactionContext);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer conn={conn} acc={CurrentAccount} />
    </div>
  )
}

export default App
