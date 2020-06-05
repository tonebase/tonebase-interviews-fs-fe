import { store } from "react-easy-state"

const counter = store({
    count: 0,
    increment: () => counter.count++,
    decrement: () => counter.count--
})

export default counter