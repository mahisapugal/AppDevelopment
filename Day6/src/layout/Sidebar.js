import React from 'react';
import '../layout/Sidebar.css';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className="t">
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>DASHBOARD</h2>
      </div>
      <ul className="sidebar-menu">
        
        <li><Link to='/service'>Solution </Link></li>
        <li><Link to='/product'>book it</Link></li>
        <li><Link to='/contact'>feedback</Link></li>
        <li><Link to='/Qu'>faq</Link></li>
        <li><Link to='/PrivacyPolicy'>PrivacyPolicy</Link></li>
        
        
      
      </ul>
      
    </div>
    
   </div>
    
  );
}

export default Sidebar;