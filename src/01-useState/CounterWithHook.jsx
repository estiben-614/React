import { useCounter } from "../hooks/useCounter"

export const CounterWithHook = () => {
    const { counter, incrementar, decrementar, reset } = useCounter(2);
  return (
    <>
    <div>Counter With Hook {counter}</div>
    <button className="btn btn-primary" onClick={incrementar}>+1</button>
    <button className="btn btn-primary" onClick={reset}>Reset</button>
    <button className="btn btn-primary" onClick={decrementar}>-1</button>
    </>
  )
}
