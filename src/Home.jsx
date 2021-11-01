import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/Pritpal.jpg'
import Common from './Common';
import Contact from './Contact';
import Banner from "./Banner";
import Hello from "./Hello";
import Presenter from "./Scroll";
import Intro from "./Intro";
const Home=()=>{
    return(
        <>
        
        <Hello/>
        <Intro/>
        <Banner/>
        
        </>
    );
};
export default Home;