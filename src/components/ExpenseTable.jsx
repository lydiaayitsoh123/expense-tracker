import React from "react";

function ExpenseTable(props) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.map(function (expense) {
          return (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td> Ksh {expense.amount}</td>
              <td>{expense.date}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={function () {
                    props.onDelete(expense.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ExpenseTable;