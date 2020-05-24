/**
 * Type: Component
 * Name: Counter
 * Description: Set to increment and decrement on a regular sechudle, as well as on clicking
 *
 */

// ==============================
// IMPORTS
// ==============================

// === CORE ===

import { useEffect } from "react";
import { store, view } from "react-easy-state";

// ==============================
// COMPONENT
// ==============================

const CounterCard = () => {

    //A simple store, containing a value, and functions to modify it
    const counter = store({
        num: 0,
        increment: () => counter.num++,
        decrement: () => counter.num--
    })

    //Using a useEffect hook with an empty dependency array as the second argument allows us to run a function when the component mounts, similar to a componentWillMount in a class based component
    useEffect(() => {
        //this interval will check every 60 seconds if the it is a new hour and will update the counter accordingly
        const countdown = () => {
            const check = setInterval(() => {
                const workDayHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
                const currentTime = new Date()

                if (currentTime.getMinutes() === 59 || currentTime.getMinutes() === 0) {
                    workDayHours.includes(currentTime.getHours()) ? counter.increment() : counter.decrement()
                }
            }, 60000)
        }

        //checks the currect second and ,if needed, sets a timout to fire interval at the beginning of the next minute
        const currentSecond = new Date().getSeconds()
        if (currentSecond !== 0) {
            const delay = (60 - currentSecond) * 1000
            setTimeout(() => countdown(), delay)
        } else countdown()

        //The return of a useEffect can be used to remove effects when a component dismounts, in this case an interval
        return () => clearInterval(check)
        // eslint-disable-next-line , eslint wasn't liking the empty dependency array below, but it's necessary for it to function
    }, [])

    return (
        <div>
            <p onClick={counter.increment}>{counter.num}</p>
            <span onClick={counter.increment}>plus</span>
            <span onClick={counter.decrement}>minus</span>
        </div>
    )
};

export default view(CounterCard);