import React from "react";
import { useState } from "react"
import ExpenseItem from './ExpenseItem';
import AddExpenseForm from "./AddExpenseForm";
import { nanoid } from 'nanoid';

const ExpenseList = ({ expenses, setExpenses }) => {
  //console.log(expenses)

  //console.log(expenses)
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value)
  }

  const addToList = (name, cost) => {
    const newExpense = {
      id: nanoid(),
      name: name,
      cost: cost
    }
    //console.log(newExpense)
    //console.log(expenses)
    const newExp = [newExpense, ...expenses]
    setExpenses(newExp)
  }
  //console.log(expenses)

  return (
    <div className="">
      <input type="text"
        placeholder="Type To Search"
        className="search"
        value={searchText}
        onChange={handleChange}
      />
      <ul className="expense-list">
        {expenses.filter((data) => data.name.toLowerCase().includes(searchText)).map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          )
        })}
      </ul>

      <h3 style={{ fontSize: "1.6rem", margin: "2rem 0 1rem 0" }}>Add Expense</h3>
      <AddExpenseForm addToList={addToList} />
    </div>
  )
}

export default ExpenseList;