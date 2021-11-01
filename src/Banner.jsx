import React from "react";
import word from '../src/images/wordpress.png';
import boot from '../src/images/boot.png';
import reac from '../src/images/react.jpg';
import seo from '../src/images/seo.png';
import smo from '../src/images/smo.jpg';
import goog from '../src/images/google a.png';
import goo from '../src/images/google ad.jpg';
import sql from '../src/images/mysql.png';



const Banner=()=>{
    return(
        <>
<h1 className="skill"> SKILLS</h1>
<div className="cont">
  <div className="photobanner">
    <img src={boot} alt=""/>
    <img src={reac} alt=""/>
    <img src={word} alt=""/>
    <img src={seo} alt=""/>
    <img src={smo} alt=""/>
    <img src={goog} alt=""/>
    <img src={goo} alt=""/>
    <img src={sql} alt=""/>
   
  </div>
</div>

  </>
    );
};
export default Banner;