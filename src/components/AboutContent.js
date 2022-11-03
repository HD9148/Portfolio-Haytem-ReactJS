import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <div className="right">
            <Link to="/contact">
                <button className="btn">Contactez-moi</button>
            </Link>
            </div>
                <div className="right">
                    <div className="img-container">
                        <div className="img-stack top">
                            {/* <img src={}/> Insérer ici image*/}
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default AboutContent