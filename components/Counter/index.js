import useInterval from './useInterval';
import { useEffect } from "react";
import counterStyle from "../../lib/styleGuide/counter.scss"
import counter from "../../stores/CounterStore"


const Counter = () => {
    //imported useInterval module checks the hour number by the hour
    useEffect(() => {
        useInterval()
        return () => clearInterval(clock)
    }, [])

    return (
        <main>
            <h1>Current Count: <strong>{counter.count}</strong></h1>
            <button className="increment" type="button" onClick={counter.increment}>Increment</button>{' '}
            <button className="decrement" type="button" onClick={counter.decrement}>Decrement</button>{' '}
            <style jsx>{counterStyle}</style>
        </main>
    )
}

export default Counter