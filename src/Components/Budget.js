import React from "react"

const Budget = ({ budgetAmount }) => {
  return (
    <div style={{ background: "linear-gradient(90deg, rgba(188, 94, 22, 0.564), rgba(188, 94, 22, 0.264))", color: "white" }} className="track">
      Budget : {(budgetAmount) ? `$ ${budgetAmount}` : `$0`}
    </div>
  )
}

export default Budget;