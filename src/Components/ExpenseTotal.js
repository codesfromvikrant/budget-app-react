import React from "react"

const ExpenseTotal = ({ totalCost }) => {
  return (
    <div style={{ background: "linear-gradient(90deg, rgba(188, 22, 166, 0.564), rgba(188, 22, 166, 0.264))" }} className="track">
      <p>Spent So far : ${totalCost}</p>
    </div>
  )
}

export default ExpenseTotal;