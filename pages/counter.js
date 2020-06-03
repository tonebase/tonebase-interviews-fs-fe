import { view, store } from 'react-easy-state'

const HOURS_IN_MS = 360000

const counter = store({
	num: 0
})
const increment = () => counter.num++
const decrement = () => counter.num--

setInterval(function() {
	const hour = (new Date()).getHours()

	// (a) Increment UP once per hour between 9AM and 5PM (inclusive)
	if (hour >= 9 && hour <= 17) {
		increment()
	}
	// (b) Increment DOWN once per hour between 6PM and 8AM (inclusive)
	else if (hour <= 8 || hour >= 18) {
		decrement()
	}
}, HOURS_IN_MS)

export default view(function Counter() {
	// (c) Increment UP when a button is clicked manually
	// (d) Increment DOWN when a different button is clicked manually
	return (
		<div>
			<p className="display"><strong>Current count:</strong> {counter.num}</p>
			<button className="btn" onClick={increment}>↑</button>
			<button className="btn" onClick={decrement}>↓</button>
		</div>
	)
})