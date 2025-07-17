"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        
    };

  return (
    <div>
      <h1></h1>
      <button onClick={handleCount}>Increment</button>
      <p>{count}</p>
      <h1></h1>
      <button onClick={decrementCount}>Decremnet</button>
      
    </div>
  )
}

export default page
