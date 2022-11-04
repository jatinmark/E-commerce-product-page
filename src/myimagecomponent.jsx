import React from "react";
import Imagebody from "./imagebody";
import Mobileimage from './mobileimage';


function MyimageComponent() {
    // The current width of the viewport
    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 720;
    
    /* If the viewport is more narrow than the breakpoint render the
       mobile component, else render the desktop component */
    return width < breakpoint ? <Mobileimage  /> : <Imagebody />;
  }

  export default MyimageComponent ;
