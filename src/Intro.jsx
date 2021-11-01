import React from "react";
import { Animator,FlexCenterStyle, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Common from "./Common";
import web from '../src/images/Pritpal.jpg';
//importing typewriter-effect
import Typewriter from "typewriter-effect";
import { NavLink } from 'react-router-dom';


const Intro=()=>{
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
   
    return(
        <>

<div className="container-fluid">
<div className="row int">
<div className="col-lg-6">

<div className="App">
<Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Proffesion")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("FrontEnd Developer & Digital Marketer")
       
       .start(200);
       }}
  />

<a href="#"><Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Email Id")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("pritpal.singh120@gmail.com")
       
       .start(1000);
       }}
  /></a>
  
  <div className="full">
  
      <NavLink to="#" className="btn-get-started ">Download</NavLink>
 </div>
            
            
            
        
       
       
    </div>
    </div>
    <div className="col-lg-1"></div>
    <div className="col-lg-5">
        <div className="im">
        <img src={web} className="image"/>
        </div>
    </div>
</div>
</div>



        </>

    );
};

export default Intro;




