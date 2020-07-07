import { store, view } from '@risingstack/react-easy-state';
import Head from "next/head";


class Counter extends React.Component {
  counter = store({
    num: 0,
    increment: () => this.counter.num++,
    decrement: () => this.counter.num--,
  });

  componentDidMount() {
    this.autoUpdate();
  }

  autoUpdate() {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 9 && hour <= 17) {
      this.counter.increment();
    }
    if (hour <= 8 || hour >= 18) {
      this.counter.decrement();
    }
    setTimeout(this.autoUpdate.bind(this), 3600000);
  }

  render() {
    return (
      <div>
        <Head>
          <title>Simple Counter by Adam Gienapp</title>
        </Head>
        <div className="container">
          <div>
            <h1 className="title">Simple Counter</h1>
            <h3 className="subtitle">By Adam Gienapp</h3>
          </div>

          <div className="number">{this.counter.num}</div>

          <div className="btn-container">
            <button className="btn" onClick={this.counter.increment}>+</button>
            <button className="btn" onClick={this.counter.decrement}>-</button>
          </div>
        </div>

        <style jsx global>{`
          body {
            background: steelblue;
            color: #fff;
            font-family: Arial;
          }

          .container {
            width: 70%;
            min-width: 500px;
            margin: 0 auto;
          }

          .title {
            width: 500px;
            font-size: 66px;
            margin: 25px auto 0 auto;
            text-align: center;
          }

          .subtitle {
            width: 470px;
            margin: 0 auto 15px auto;
            text-align: right;
          }
            
          .number {
            font-size: 150px;
            text-align: center;
            margin: 75px 0;
          }
            
          .btn-container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          
          .btn {
            height: 90px;
            width: 90px;
            border-radius: 50%;
            background: darkblue;
            color: #fff;
            font-size: 60px;
            line-height: 90px;
            text-align: center;
            box-shadow: 0 1px 6px black;
          }

          .btn:hover {
            cursor: pointer;
          }

          .btn:focus {
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}

export default view(Counter);