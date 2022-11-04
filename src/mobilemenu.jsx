import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import './mobilemenu.css'
import CloseIcon from '@mui/icons-material/Close';

function Mobilemenu(){
    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


    return <div>
         <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleToggle}
                >
                  <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
       
      >
       <div className='side_menu'>
       <div className='closing' >
       <Button  sx={{ color: 'black'}} onClick={handleClose}> <CloseIcon  /> </Button>
       </div>
         <div className = "elements">
         <h4>Collections</h4>
         <h4>Men</h4>
         <h4>Women</h4>
         <h4>About</h4>
         <h4>Contact</h4>
         </div>
       </div>

      </Backdrop>
                  <MenuIcon />
                </IconButton>
    </div>
}


export default Mobilemenu ;