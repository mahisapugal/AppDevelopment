import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import './NavBar.css';
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice"; 
const NavBar=()=>{
    const user = useSelector(selectUser);
  console.log("User object:", user);
  const username =
    user.user && user.user.username ? user.user.username : "Guest";   
    return(
        <nav className="nm">
            <div className="containers">
           
                <Link to='loginbtn' className="brand-logo">Hyuoi Service Centre</Link>
                
                <SignedInLink/>
                <SignedOutLink/>
                <div id="user">{username}</div>   
                
                  
               
            </div>
        </nav>
        
    )
}
export default NavBar;