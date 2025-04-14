import React, { useState } from 'react';

function ExpenseForm(props) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const newExpense = {
      description: description,
      category: category,
      amount: parseFloat(amount),
      date: date,
    };

    props.onAddExpense(newExpense);

    // Clear the form
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={function (e) { setDescription(e.target.value); }}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={function (e) { setCategory(e.target.value); }}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={function (e) { setAmount(e.target.value); }}
        required
      />
      <input
        type="date"
        value={date}
        onChange={function (e) { setDate(e.target.value); }}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
