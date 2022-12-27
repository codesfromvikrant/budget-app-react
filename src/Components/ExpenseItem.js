import React from "react"

const ExpenseItem = ({ id, name, cost }) => {

  return (
    <li>
      <div className="name">{name}</div>
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "0.6rem" }}>
        <div className="cost">$ {cost}</div>
        <div className="delete" >Delete</div>
      </div>
    </li >
  )
}

export default ExpenseItem;