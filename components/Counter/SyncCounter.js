import { view } from "react-easy-state";

class SyncCounter extends React.Component {
	constructor(props) {  
		super(props); 
		this.state = {  
			count : this.props.initCount  
		};  
	}
	componentDidMount() {
	this.tick();//initial value change based on current time

	//settimeout values based on minutes interval
	// setTimeout(() => {
	//     console.log(new Date());
	//     this.tick();//first loop value before first callback from interval
	//     setInterval( () => this.tick(),1000*60 );//every minute
	//     console.log(new Date().getSeconds())
	// }, 1000*(60 - (new Date().getSeconds()==0 ? 60 : new Date().getSeconds())));

	//settimeout values based on hour interval
	setTimeout(() => {
		// console.log(new Date());
		this.tick();//first loop value before first callback from interval
		setInterval( () => this.tick(),1000*60*60 );//every hour
		// console.log(new Date().getMinutes())
		}, 1000*60*(60 - (new Date().getMinutes()==0 ? 60 : new Date().getMinutes())));
	}
	tick(){
		const date = new Date();
		const hr = date.getHours();
		// const hr = date.getMinutes();
		// const hr = date.getSeconds();

		if (hr >= 9 && hr <= 17) {
			this.setState(({ count }) => ({
				count: count + 1
			}));
		}
		else if(hr<=8 || (hr >= 18 && hr <= 24)){
			this.setState(({ count }) => ({
				count: count - 1
			}));
		}

		// console.log("tick ",new Date());
		// console.log("count "+this.state.count);
	}

	handleClickAdd = () => {
		this.setState(({ count }) => ({
			count: count + 1
		}));
	};
	handleClickSub = () => {    
		this.setState(({ count }) => ({
		// count: (count - 1) > 0 ? count-1 : 0
			count: count - 1
		}));
	};
	render() {
		return (
			<div>
				<button onClick={this.handleClickAdd}>+</button>
				<h2>{this.state.count}</h2>
				<button onClick={this.handleClickSub}>-</button>
			</div>
		);
	}
}
SyncCounter.defaultProps={  
	initCount:0 
}

export default view(SyncCounter);