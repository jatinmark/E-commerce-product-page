import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Mobilemenu from './mobilemenu'
import Avatar from '@mui/material/Avatar';
import './mobilenavbar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Backdrop from '@mui/material/Backdrop';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import one from './images/image-product-1-thumbnail.jpg';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
 function Mobilenavbar(props) {
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
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar sx={{ backgroundColor: "white" , color: "black"}} >
               <Mobilemenu />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <h1 className='sneak'>sneakers</h1>
                </Typography>
                <div className="icon">
         <Stack spacing={2} direction="row">
           <Badge badgeContent={props.data} color="warning">
              
                        <ShoppingCartOutlinedIcon onClick={handleToggle} sx={{width: 23, height: 23 }}  />
              
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
          <Avatar   sx={{ width: 35, height: 35 }} src ="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt ="profile image" />
         </div>
         </div>
              </Toolbar>
            </AppBar>
          </Box>
        );
      
 }
export default Mobilenavbar ;