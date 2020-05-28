import React from "react";
import { view } from "react-easy-state";
import withFrame from '../../components/PageWrappers/withFrame';
import SimpleCounter from '../../components/SimpleCounter';


function Counter() {
  return (
    <div className="content">
      <SimpleCounter />
      <style jsx>{`
        .content {
          font-size: 2rem;
          line-height: 3rem;
          font-family: 'Orbitron', sans-serif;
          height: 100%;
          margin: auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      `}
      </style>
    </div>
  );
}

export default withFrame(view(Counter));