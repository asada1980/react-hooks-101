import React, { useState } from 'react';

const App = () => {
  
  const defaultValue = 0
  const [count, setCount] = useState(defaultValue)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount((previousCount) => previousCount - 1)
  
  const reset = () => setCount(defaultValue)
  const multiplication = () => setCount(count * 2)
  const func1 = () => setCount((previousCount) => {
    if (previousCount % 3 == 0) {
      return previousCount / 3
    }
    return previousCount
  })
  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={multiplication}>x2</button>
        <button onClick={func1}>３の倍数だけ３で割る</button>
      </div>
    </>
  )
}

export default App;
