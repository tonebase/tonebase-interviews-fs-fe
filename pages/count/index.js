// === STORES ===
import { view, store } from "react-easy-state";

// === PAGE WRAPPERS ===
import { withFrame } from "../../components/PageWrappers";

// 1. Molecules
import {
  Spacer,
  SectionTitle,
} from "../../components/Molecules/Layout";

// 2. Organisms
import { Navbar } from "../../components/Organisms/Frame";

// === STYLING ===
import style from "./Count.scss";

const millisecond = 1;
const second = millisecond * 1000;
const minute = second * 60;
const hour = minute * 60;

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

class Frame extends React.Component {
  counter = store({ num: 0 });

  count = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 9 && currentHour <=17 ) {
      this.counter.num++;
    } else {
      this.counter.num--;
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(this.count, hour);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div id="bodyWrapper" className="bodyWrapper">
        <Navbar />
        <div className="content">
          <SectionTitle title="Count:" />
          <SectionTitle title={this.counter.num} />
          <div className="d-flex flex-row w-100 alignItems-start gap">
            <div className="actionTriggers d-inline-block">
              <button onClick={() => this.counter.num++} className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-primary--main fontSize-sm breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm paddingRight-sm paddingLeft-sm paddingTop-xs paddingBottom-xs lineHeight-lg textAlign-center borderRadius-sm">
                <span className="buttonText">Increment &uarr;</span>
              </button>
            </div>
            <div className="actionTriggers d-inline-block">
              <button onClick={() => this.counter.num--} className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-primary--main fontSize-sm breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm paddingRight-sm paddingLeft-sm paddingTop-xs paddingBottom-xs lineHeight-lg textAlign-center borderRadius-sm">
                <span className="buttonText">Decrement &darr;</span>
              </button>
            </div>
          </div>
        </div>
          
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default withFrame(view(Frame));
