import { view, store } from 'react-easy-state'
import { useEffect } from 'react'

import style from './counter.scss'

const HOURS_IN_MS = 360000

const counter = store({
	num: 0,
	increment: () => counter.num++,
	decrement: () => counter.num--
})

export default view(function Counter() {
	useEffect(() => {
		const intervalID = setInterval(function() {
			const hour = (new Date()).getHours()
		
			// (a) Increment UP once per hour between 9AM and 5PM (inclusive)
			if (hour >= 9 && hour <= 17) {
				counter.increment()
			}
			// (b) Increment DOWN once per hour between 6PM and 8AM (inclusive)
			else if (hour <= 8 || hour >= 18) {
				counter.decrement()
			}
		}, HOURS_IN_MS)

		return () => {
			clearInterval(intervalID)
		}
	})

	// (c) Increment UP when a button is clicked manually
	// (d) Increment DOWN when a different button is clicked manually
	return (
		<div className="container">
			<h1 className="display"><strong>Current count:</strong> {counter.num}</h1>
			<div className="btn-container">
				<button className="btn" onClick={counter.increment}>↑</button>
				<button className="btn" onClick={counter.decrement}>↓</button>
			</div>
			<style jsx>{style}</style>
		</div>
	)
})