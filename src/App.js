import React from "react";
import { useState } from "react";
import Budget from "./Components/Budget";
import ExpenseList from "./Components/ExpenseList";
import ExpenseTotal from "./Components/ExpenseTotal";
import Remaining from "./Components/Remaining";
import { nanoid } from 'nanoid';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const [budgetAmount, setBudgetAmount] = useState('')


  const handleChange = (event) => {
    setBudgetAmount(event.target.value)
  }

  let totalCost = 0;
  for (let i = 0; i < expenses.length; i++) {
    totalCost = totalCost + Number(expenses[i].cost);
  }

  let remaining;
  if (budgetAmount <= 0) {
    remaining = 0;
  } else {
    remaining = budgetAmount - totalCost;
  }

  //console.log(totalCost)
  //console.log(budgetAmount)
  return (
    <div className="container">
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1.4rem" }}>Budget Tracker App</h1>
      <input type="text" className="budget-amount" placeholder="Enter Your Budget Amount!"
        value={budgetAmount}
        onChange={handleChange}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginTop: "1rem" }} className="">
        <Budget
          budgetAmount={budgetAmount}
        />
        <Remaining
          remaining={remaining}
        />
        <ExpenseTotal
          totalCost={totalCost} />
      </div>

      <h3 style={{ fontSize: "1.6rem", margin: "2rem 0 1rem 0" }}>Expenses</h3>
      <ExpenseList
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  )
}

export default App;