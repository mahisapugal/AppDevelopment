import React, { Component } from 'react'

import nmm from '../Asset/bi.jpg';
import '../layout/Footer.css';
import { Link } from "react-router-dom";
class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="background-image">
            <h2>
            <Link to='/que'><div className="continue-btn">Back</div></Link></h2>
                <div style={{float:"left",width:"50%"}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{marginLeft:"300px",marginTop:"0px"}}>
        <div className='c' >
        <h2>-Contact Us-</h2>
        <h2>Website</h2>
        <p>www.noisepollutiontracker.com</p>
        <h2>Email Address</h2>
        <p>noisepollutiontracker@gmail.com</p>
        <h2>Phone Number</h2>
        <p>FOR ANY HELP, YOU MAY CALL US AT<br></br>1800-4546-8749</p>
        </div>
    </div>
    </div>
    <div style={{float:"right",width:"50%"}}>
    
    </div>
    </div>
        );
    }
}
 
export default Contact;