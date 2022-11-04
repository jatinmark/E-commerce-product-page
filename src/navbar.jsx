// eslint-disable-next-line
import React , {useState} from "react";
import "./navbar.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import one from './images/image-product-1-thumbnail.jpg';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
// .dropdown-menu {
//     position: absolute;
//     top: 100%;
//     left: 0;
//     z-index: 100;
//     width: 160px;
//     padding-top: 4px;
//     padding-bottom: 4px;cd 
//     margin-top: 2px;
//     list-style: none;
//     background-color: var(--color-canvas-overlay);
//     background-clip: padding-box;
//     border: 1px solid var(--color-border-default);
//     border-radius: 6px;
//     box-shadow: var(--color-shadow-large);
function Navbar(props){
    
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
    
    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  let total
  function sum(){
    total = 125.00 * props.data
    return total;
  }
  
    return (
        <div>
        <div className="navigation">
        <div className="title">
        <div className="name">
        <h1>sneakers</h1>
        </div>
        <div className="options">
            <p className="navelink"><a href=".tab">Collections</a></p>
            <p className="navelink"><a href=".tab">Men</a></p>
            <p className="navelink"><a href=".tab">Women</a></p>
            <p className="navelink"><a href=".tab">About</a></p>
            <p className="navelink"><a href=".tab">Contact</a></p>
        </div>
         </div>
         <div className="icon">
         <Stack spacing={2} direction="row">
           <Badge badgeContent={props.data} color="warning">
              
                        <ShoppingCartOutlinedIcon onClick={handleToggle} sx={{width: 28, height: 28 }}  />
              
          </Badge>
      </Stack>
           <Backdrop
        sx={{ backgroundColor: 'transparent', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >  
      <div className="checkout">
 <Card sx={{ minWidth: 275 }}>
      <CardContent>
       
        <h5>cart</h5>
        <hr></hr>
        
        <div className="mutable">
        <div className="minicheck">
        
        <img className="newphoto" src={one} alt="juniur" />
         <div className="dusty">
          <div>
         <p className="newdetails">Fall Limited Edition Sneakers</p>
         <p className="newdetails">
          $125.00 x {props.data} 
          <span className="total">
          <strong style={{ margin: '10px'}}>$ {sum()}
          </strong></span></p>
         </div>
         <div className="bin">
        <DeleteOutlineOutlinedIcon />
       </div>
        </div>
        </div>
        
        <button className="newbutton"><span className="text"><strong>Checkout</strong></span></button>
        </div>
      
      </CardContent>
      
     
     
    </Card>
    </div>

      </Backdrop>     
         <div className="ava"> 
          <Avatar   sx={{ width: 48, height: 48 }} src ="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt ="profile image" />
         </div>
         </div>
         </div>
         <div className = "horizon">  <hr /></div>
       
         </div>
    )
}

export default Navbar ;