import React from 'react';
import withFrame from '../components/PageWrappers/withFrame';
import { view } from 'react-easy-state';
import { Icon } from '@material-ui/core';
import Link from 'next/link';

function Home() {
  
  return (
      <div className="content">
          <h1>Welcome home</h1>
          <div className="linkContainer">
            <h5>Continue to
              <Link href="/counter"><a className="link">Counter</a></Link>
            </h5>
            <Icon>chevron_right</Icon>
          </div>
          <style jsx>{`
            .content {
              font-family: 'Orbitron', sans-serif;
              height: 100%;
              font-size: 2rem;
              line-height: 3rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
            }
            .content h1 {
              font-size: 3rem;
              line-height: 3rem;
              font-family: 'Orbitron', sans-serif;
            }
            .linkContainer {
              margin: 1rem 0rem;
              font-size: inherit;
              line-height: inherit;
              display: flex;
              align-items: center;
            }
            .link {
              color: #2962ff;
              display: inline-flex;
              text-decoration: none;
              margin-left: 0.5rem;
            }
            .link:hover {
              color: #0039cb;
              text-decoration: underline;
            }
          `}
          </style>
      </div>
  );
}

export default withFrame(view(Home));