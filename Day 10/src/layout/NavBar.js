import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import './NavBar.css';
import ServicePage from './ServicePage';
import YouTube from "../layout/Youtube"




const NavBar=()=>{
    const user = useSelector(selectUser);
  
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
    
    return(
      <div className="a">
        
        <nav className="navnav">
          <Link to='loginbtn' className="brand-logo">Huyoi Service Center</Link>
          <SignedInLink/>
          <SignedOutLink/>
        </nav>      
        <div className='b'>
          <div id="user">WELCOME ,  {username}</div>
            
          </div>
          <div className="App">
      <ServicePage />
    </div>
    <div className="youtube-container">
      <YouTube />
    </div>
    
    
         
      </div>
    )
}
export default NavBar;