import{BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './login';
import Register from './register';
import Footer from './layout/Footer';
import Youtube from './layout/Youtube';

import Sidebar from './layout/Sidebar';
import Home from './layout/Home';
import Contact from './layout/Contact';
import Services from './layout/Services';
import NavBar from './layout/NavBar';
import Qu from './layout/Qu';
import PrivacyPolicy from './layout/PrivacyPolicy';
import Item from './layout/Item';
import Show from './layout/show';
import UploadData from './layout/UploadData';
import Foot from './layout/Foot';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/loginbtn" element={<NavBar/>}/>
        <Route path='/video' element={<Youtube/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/que" element={<Sidebar/>}/>
      <Route path="/product" element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>                                                                                                                                                                         
      <Route path='/service' element={<Services/>}/>
      <Route path='/Qu' element={<Qu/>}/>
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
      <Route path='/Item' element={<Item/>}/>
      <Route path='/show' element={<Show/>}/>
      <Route path='/UploadData' element={<UploadData/>}/>
      <Route path='/Foot' element={<Foot/>}/>
\
     
     

      </Routes>
     
    
    </BrowserRouter>
   
  </div>
  );
}

export default App;
