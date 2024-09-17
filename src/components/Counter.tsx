import { createSignal } from "solid-js"

interface Props {
    initialValue?: number 
}

export const Counter = () => {

    const [counter, setCounter] = createSignal(10)

    return (
        <div>
            <h1>Counter</h1>
            <h3>Value: {counter()} </h3>

            <button onClick={() => setCounter(counter() + 1)}>+</button>
            <button onClick={() => setCounter(counter() - 1)}>-</button>
        </div>
    )
}