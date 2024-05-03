import { useState } from "react"

export const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1:0,
    counter2:1,
    counter3:2,
  })
    return (
    <>
    <h1>Counter 1: {counter1}</h1>
    <h1>Counter 2: {counter2}</h1>
    <h1>Counter 3: {counter3}</h1>
    <hr/>
    <button className='btn'onClick={() => setCounter({
        counter1: counter1 +1,
        counter2,
        counter3
    })}>+1</button>
    </>
  )
}
