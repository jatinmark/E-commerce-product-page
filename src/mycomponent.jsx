import React from 'react'
import Navbar from './navbar'
import Mobilenavbar from './mobilenavbar'





const MyComponent = (props) => {
    // The current width of the viewport
    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 720;
    
    /* If the viewport is more narrow than the breakpoint render the
       mobile component, else render the desktop component */
    return width < breakpoint ? <Mobilenavbar data={props.data} /> : <Navbar data={props.data} />;
  }

  export default MyComponent ;