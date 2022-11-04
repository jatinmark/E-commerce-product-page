import React from 'react'
import companyLogo from './images/image-product-1.jpg';
import second from './images/image-product-2.jpg';
import third from './images/image-product-3.jpg';
import fourth from './images/image-product-4.jpg';


function Mobileimage() {
    return(
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
    );
}

export default Mobileimage ;