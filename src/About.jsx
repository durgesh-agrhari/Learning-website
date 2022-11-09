import React from "react";
import img from '../src/Images/13.png'
import Comman from "./Comman";
const About = () => {
  return(
    <>
    <Comman 
    name = "Welcome to about page" 
    imgsrc = {img} 
    visit = "/contact" 
    btname = " Contact Now" />
    </>
  );
};
export default About; //aur baki bhi ese use kar se es liye ese use karate hai 
