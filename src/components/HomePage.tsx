import React from "react"
import Button from "./CounterButton"
function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontSize: "2rem" }}>
      <span>0</span>
      <Button color={"lightgreen"}>Click ME!</Button>
      <Button color={"lightgreen"}>Down</Button>
    </div>
  )
}

export default HomePage
