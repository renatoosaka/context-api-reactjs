import React from 'react';

import { useCounter } from '../contexts/CounterContext'

const Second: React.FC = () => {
  const { counter, increment, decrement } = useCounter()

  return (
    <div>
      <h1>Second Component</h1>
      <strong>Value: {counter}</strong>
      <button onClick={() => increment(2)}>increment by 2</button>
      <button onClick={() => decrement(2)}>decrement by 2</button>
    </div>
  )
}

export default Second;