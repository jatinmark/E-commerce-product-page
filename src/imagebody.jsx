import React from "react";
import "./imagebody.css"
import companyLogo from './images/image-product-1.jpg';
import second from './images/image-product-2.jpg';
import third from './images/image-product-3.jpg';
import fourth from './images/image-product-4.jpg';
import one from './images/image-product-1-thumbnail.jpg';
import two from './images/image-product-2-thumbnail.jpg';
import three from './images/image-product-3-thumbnail.jpg';
import four from './images/image-product-4-thumbnail.jpg';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
function Imagebody() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    return(
    <div className ="image">
        <img  className="showcase" src ={companyLogo} alt = 'shoes'/>
        <div className="collection">
        <Button onClick={handleToggle} ><img  className="photos" src ={one} alt = 'shoes'/> </Button>
        <Button onClick={handleToggle} ><img className="photos" src ={two} alt = 'shoes'/></Button>
        <Button onClick={handleToggle} > <img className="photos" src ={three} alt = 'shoes'/></Button>
        <Button onClick={handleToggle} ><img className="photos" src ={four} alt = 'shoes'/></Button>
        </div>
        <div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
         >
        
         <div className ="lightbox">
         <div className="wrong">
            <Button onClick={handleClose}><CloseIcon sx={{ color: "hsl(26, 95%, 46%)" }} />
            </Button>
        </div>
        <div id="carouselExampleControls" class="carousel" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={companyLogo} class="d-block w-100 newshowcase" alt="images" />
    </div>
    <div class="carousel-item">
      <img src={second} class="d-block w-100 newshowcase" alt="images" />
    </div>
    <div class="carousel-item">
      <img src={third} class="d-block w-100 newshowcase" alt="images" />
    </div>
    <div class="carousel-item">
      <img src={fourth} class="d-block w-100 newshowcase" alt="images" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden pre">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div className="newcollection">
        <img  className="photos" src ={one} alt = 'shoes'/> 
        <img className="photos" src ={two} alt = 'shoes'/>
        <img className="photos" src ={three} alt = 'shoes'/>
        <img className="photos" src ={four} alt = 'shoes'/>
        </div>
        </div>

          </Backdrop>
        </div>
    </div>
)
}

export default Imagebody ;