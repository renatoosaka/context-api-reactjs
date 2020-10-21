import React, { useState, useContext,  createContext } from 'react';

interface CounterContextProps {
  counter: number;
  increment: (value?: number) => void;
  decrement: (value?: number) => void;
}

const CounterContext = createContext<CounterContextProps>({} as CounterContextProps)

export const CounterProvider: React.FC = ({children}) => {
  const [counter, setCounter] = useState(0)

  const increment = (value: number = 1) => { 
    setCounter(counter + value)
  }

  const decrement = (value: number = 1) => {
    setCounter(counter - value)
  }

  return (
    <CounterContext.Provider value={{
      counter,
      increment,
      decrement
    }}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => {
  const context = useContext(CounterContext)

  return context
}
