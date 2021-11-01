import React from "react";
import { Animator,FlexCenterStyle, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


const Hello=()=>{
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
   
    return(
        <>
        
        <div className="black">
        <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
          <span className="cir" > Curriculum vitae</span>
        </Animator>
      </ScrollPage>
      </ScrollContainer>
        <div className="container-fluid">
        <div className="row">
                <div className="hello">
                <ScrollContainer>
                <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(2500, 0))}>
          <span className="hell">HELLO</span>
        </Animator>
      </ScrollPage>
</ScrollContainer>
                </div>
                </div>
        </div>
        <div className="container-fluid">
        <div className="row">
        <div className="world">
        <ScrollContainer>
                <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-2500, 0))}>
          <span className="wor">WORLD</span>
        </Animator>
      </ScrollPage>
</ScrollContainer>
        </div>
                
                </div>
        </div>
        </div>
        </>

    );
};

export default Hello;
