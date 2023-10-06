import{BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './login';
import Register from './register';
import Footer from './layout/Footer';

import Sidebar from './layout/Sidebar';
import Home from './layout/Home';
import Contact from './layout/Contact';
import Services from './layout/Services';
import NavBar from './layout/NavBar';
import Qu from './layout/Qu';
import PrivacyPolicy from './layout/PrivacyPolicy';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/loginbtn" element={<NavBar/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/que" element={<Sidebar/>}/>
      <Route path="/product" element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>                                                                                                                                                                         
      <Route path='/service' element={<Services/>}/>
      <Route path='/Qu' element={<Qu/>}/>
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
     

      </Routes>
     
    
    </BrowserRouter>
   
  </div>
  );
}

export default App;
