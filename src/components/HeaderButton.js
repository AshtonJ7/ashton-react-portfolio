import React from 'react'
import { Link } from 'react-router-dom';


const HeaderButton = () => {
    return (
      <>
        <div className="cta">
          <div className="mx-auto">
            <Link to="/about">
              <button className="cta-about">About Me</button>
            </Link>
            <Link to="/projects">
              <button className="cta-portfolio">Portfolio</button>
            </Link>
          </div>
        </div>
      </>
    );
  };
  

export default HeaderButton
