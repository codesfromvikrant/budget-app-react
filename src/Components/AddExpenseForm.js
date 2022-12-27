import React from "react"
import { useState } from "react"

const AddExpenseForm = ({ addToList }) => {
  //console.log(addToList)
  const [newExpense, setNewExpense] = useState({
    expenseName: '',
    expenseCost: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewExpense(prevExpense => ({
      ...prevExpense,
      [name]: value
    }))
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (newExpense.expenseName !== '' && newExpense.expenseCost !== '') {
      addToList(newExpense.expenseName, newExpense.expenseCost)
      setNewExpense((prevExpense) => {
        return {
          ...prevExpense,
          expenseName: '',
          expenseCost: ''
        }
      })
    }
  }
  //console.log(newExpense)

  return (
    <form action="">
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "1rem", width: "70%" }}>
        <div style={{ width: "100%" }} className="forName">
          <label htmlFor="expenseName">Name</label>
          <br />
          <input type="text" className="name" name="expenseName" placeholder="Enter the Title"
            value={newExpense.expenseName}
            onChange={handleChange} />
        </div>

        <div style={{ width: "100%" }} className="forExpenseCost">
          <label htmlFor="expenseCost">Expense Cost</label>
          <br />
          <input type="text" name="expenseCost" placeholder="Enter the Expense Cost" className="expenseCost"
            value={newExpense.expenseCost}
            onChange={handleChange} />
        </div>

        <button className="save-btn" onClick={handleClick}>Save</button>
      </div>
    </form >
  )
}

export default AddExpenseForm;