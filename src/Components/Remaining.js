import React from "react"

const Remaining = ({ remaining }) => {
  return (
    <div style={{ background: "linear-gradient(90deg, rgba(22, 111, 188, 0.564), rgba(22, 111, 188, 0.264))" }} className="track">
      <p>Remaining : ${(remaining >= 0) ? remaining : 0}</p>
    </div>
  )
}

export default Remaining;