import { useState, useEffect } from "react"
import React from 'react'

function Increament() {
    const [count, setNew] = useState(0)
  return (
    <div>
      <p>value: {`the current count is: ${count}`}</p>
      <button className="btn" onClick={() => setNew(count + 1)}>Increase</button>
      <button className="btn" onClick={() => setNew(count - 1)}>Reduce</button>
    </div>
  )
}

export default Increament
