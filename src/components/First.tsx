import React from 'react';

import { useCounter  } from '../contexts/CounterContext'

const First: React.FC = () => {
  const { counter, increment, decrement  } = useCounter()

  return (
    <div>
      <h1>First Component</h1>
      <strong>Value: {counter}</strong>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  )
}

export default First;