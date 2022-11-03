import "./FooterStyles.css";
import React from 'react';
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";


const Footer = () => {
  return (
<div className="footer">
        <div className="footer-container">
            <div className="left">
          <div className="location m-r-8">
                    <FaHome
                        size={20} 
                        style={{color:"#fff", marginRight:"2rem"}}
                    />
          <div>
                      <p style={{color:"#fff", marginRight:"2rem"}}
                      ></p>
                      <p>Athis-Mons 91200</p>
          </div>
          <div className="phone">
                    <h4>
                          <FaPhone 
                          size={20} 
                          style={{color:"#fff", marginRight:"2rem"}}/>

                          <p style={{color:"#fff", marginRight:"2rem"}}>
                                  +33 6.66.84.72.13
                          </p>
                    </h4>
          </div>

          <div className="email">
                    <h4>
                          <FaMailBulk 
                          size={20} 
                          style={{color:"#fff", marginRight:"2rem"}}/>
                          <p style={{color:"#fff", marginRight:"2rem"}}>
                                  hdev4891@gmail.com
                          </p>
                    </h4>
          </div>
                    
          </div>

          <div className="right">
            <h4>A propos de moi </h4><br></br>
                  <p>
                    Je suis un développeur qui a commencé à coder en fin 2020 en autodidacte, 
                    puis j'ai commencé une formation intensive en 2022 de développeur web et mobile, afin dêtre diplômer.
                    Aujourd'hui je cherche un emploi afin de complèter ma formation académique.
                  </p>
          </div>

          <div className="social">
          <a target="_blank" href="https://www.linkedin.com/in/haytem-darhouche-34992b194/">
          <FaLinkedin 
                          size={20} 
                          style={{color:"#fff", marginRight:"1rem"}}
                          
                          /></a>
          <a target="_blank" href="https://github.com/HD9148">                
          <FaGithub
                          size={20} 
                          style={{color:"#fff", marginRight:"1rem"}}
                          
                          /></a>
          </div>

          </div>

        <div className="right"></div>
    </div>
</div>
    
  )
}

export default Footer