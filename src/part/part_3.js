import React from 'react';
import "./part_3.css";

import face from "../resource/facebook.svg"
import git from "../resource/github.svg"
import instagram from "../resource/instagram.svg"
import linkedin from "../resource/linkedin.svg"

const Footer = () => {
    return ( <div id='foot'>
        <h3>Designed and Developed by Vijay Dahiya</h3>

        <h3 id='copy'>Copyright © 2023 VD</h3>

        <div>
            <ul>
                <li> <img src={face}></img></li>
                <li>  <img src={git}></img></li>
                <li>    <img src={instagram}></img></li>
                <li>   <img src={linkedin}></img></li>
            </ul>
        </div>
    </div> );
}
 
export default Footer;