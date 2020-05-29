import React from "react";
import { store, view } from '@risingstack/react-easy-state'

setInterval(function () {
    var mins = new Date().getMinutes();
    if (mins == "00") {
        counter.hourOnChange()
    }
}, 6000)

const counter = store({
    num: 0,
    increase: () => counter.num++,
    decrease: () => counter.num--,
    hourOnChange() {
        var hour = new Date().getHours()
        if (hour >= 9 && hour <= 17) { () => counter.increase }
        if (hour >= 18 || hour <= 8) { () => counter.decrease }
    }
})

export default view(() => (
    <React.Fragment>
        <div style={{ marginTop: '250px' }}>
            <button className="actionButton d-flex flex-row alignItems-center justifyContent-center fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm lineHeight-lg textAlign-center marginLeft-auto marginRight-auto"
                style={{ borderBottom: "1px solid #e14f3d" }} onClick={counter.increase}>INCREASE</button>
            <div className="d-flex flex-row alignItems-center justifyContent-center fontSize-xl fontFamily-primary lineHeight-xl textAlign-center marginLeft-auto marginRight-auto">{counter.num}</div>
            <button className="actionButton d-flex flex-row alignItems-center justifyContent-center fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm lineHeight-lg textAlign-center marginLeft-auto marginRight-auto"
                style={{ borderBottom: "1px solid #e14f3d" }} onClick={counter.decrease}>DECREASE</button>
        </div>
    </React.Fragment>

));