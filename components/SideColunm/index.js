import React from "react";
import style from "./SideColunm.scss";

class SideColunm extends React.Component {
  render() {
    return (
      <div className="side-colunm">
        <h2 className="side-colunm__title">
          Colunm 2
        </h2>

        <style jsx>{style}</style>
      </div>
    );
  }
}

export default SideColunm;
