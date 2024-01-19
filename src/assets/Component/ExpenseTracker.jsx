// ExpenseTracker.jsx
import React, { useState } from 'react'; 
import './ExpenseTracker.css'; // Import the CSS file

const ExpenseTracker = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = () => {
    // Validate input
    if (!text.trim() || !amount.trim()) {
      alert('Please enter both text and amount.');
      return;
    }

    // Create a new transaction object
    const newTransaction = {
      id: new Date().getTime(),
      text,
      amount: parseFloat(amount),
    };

    // Update the transactions state
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

    // Clear the form
    setText('');
    setAmount('');
  };

  const handleDeleteTransaction = (id) => {
    // Filter out the transaction with the specified id
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);

    

    setTransactions(updatedTransactions);
  };

  const handleEditTransaction = (id) => {
    // You can implement the edit functionality here based on your requirements
    // For now, let's log a message to the console
    console.log(`Edit transaction with ID: ${id}`);
  };

  const calculateTotal = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const calculateIncome = () => {
    return transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const calculateExpense = () => {
    return transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <div className="expense-tracker-container">
      <h1><b>Expense Tracker</b></h1>
      <hr/>

      <form className="transaction-form">
        <h2><b>Add new transaction</b></h2>
        <label>
          <h4><b>Text</b></h4>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text"
          />
        </label>

        <label>
          <h4><b>Amount</b></h4>
          <h6><b>(negative - expense, positive - income)</b></h6>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </label>

        <hr />
        <button type="button" onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </form>

      <div className="transaction-history">
        <h2><b>Transaction History</b></h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.amount < 0 ? 'expense' : 'income'}>
              <span>
                {transaction.text} - ${transaction.amount}
              </span>
              <span>
                <button onClick={() => handleDeleteTransaction(transaction.id)}>
                  <b>Delete</b>
                </button>
                <button onClick={() => handleEditTransaction(transaction.id)}>
                  <b>Edit</b>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="summary">
        <h1><b>Summary</b></h1>

        <p className="total">Balance: ${calculateBalance()}</p>
        <p className="income">Income: ${calculateIncome()}</p>
        <p className="expense">Expense: ${calculateExpense()}</p>
      </div>
    </div>
  );
};

export default ExpenseTracker;
