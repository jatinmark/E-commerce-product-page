import React, { useState } from "react";
import "./contentbody.css"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MyComponent from "./mycomponent";
import MyimageComponent from "./myimagecomponent";
import './mainbody.css'
function Contentbody(){
  const [count , changeadd] = useState(0);
  function add() {
    return(
      changeadd(count + 1)
      );
  }  
  function sub() {
    return(
      changeadd(count - 1)
      );
  }  
  
  const [set ,fun] = useState(false)
function unclicked(){
  fun(false);
};
function clicked(){
  fun(true);
};
function pass(){
  return count ;
};
  return (
    <div>
        <MyComponent desicion ={unclicked}  data = { set ? pass() : null } />
        <div className='main'>
        <MyimageComponent />
        <div className="content">
        <h6>Sneaker Company</h6>
        <h1 className='textsizing'>  Fall Limited Edition <br />Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll <br /> withstand everything the weather can offer.
</p>        <div className='oneline'>
           <div className="new">
        <h3 className = "rate ">$125.00  </h3>
         <p className="discount">50%</p>
         </div>  
        <p className = "rat">$250.00</p>
        </div>
        <div className="tab">
          <div className="quntity">
             <Fab sx={{ width: 23, height: 23 }} color="action" >
                   <RemoveIcon onClick={sub} sx={{ color: "hsl(26, 95%, 46%)" }} />
             </Fab>
             <p className="number"> {count}</p>
          <Fab sx={{ width: 23, height: 23 }} color="action" aria-label="add">
              <AddIcon onClick = {add} sx={{ color: "hsl(26, 95%, 46%)" }} />
          </Fab>
          </div>
          <div>
            <button className="wave" onClick={clicked}><ShoppingCartOutlinedIcon sx={{ color: "white" }} /><span className="text"><strong>Add to cart</strong></span></button>
          </div>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Contentbody ;