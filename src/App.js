import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./Home";
import About from './About'
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from "./Footer";
import { Routes, Route} from 'react-router-dom';
const App = () => {
  return(
    <>
    <Navbar/>
    <Routes>
        <Route path="/"  element={<Home/>} />
        <Route exact path="/about"  element={<About/>} />
        <Route exact path="/contact"  element={<Contact/>} />
        <Route exact path="/service"  element={<Service/>} />
        
    </Routes>
    <Footer />
    {/* <Switch>
        <Redirect to="/"  />
    </Switch> */}
    </>
  );
};
export default App; //aur baki bhi ese use kar se es liye ese use karate hai 
