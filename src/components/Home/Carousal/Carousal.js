import React from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './Carousal.css'
import img1 from '../../../images/carousel-1.png'
import img2 from '../../../images/carousel-2.png'
import img3 from '../../../images/carousel-3.png'
import img4 from '../../../images/carousel-4.png'
import img5 from '../../../images/carousel-5.png'


const items = [
  <div>
    <img className="carousal-img" alt="" src={img1} />
  </div>,
  <div>
    <img className="carousal-img" alt="" src={img2} />
  </div>,
  <div>
    <img className="carousal-img" alt="" src={img3} />
  </div>,
  <div>
    <img className="carousal-img" alt="" src={img4} />
  </div>,
  <div>
    <img className="carousal-img" alt="" src={img5} />
  </div>,
];

const threeItem = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Carousal = () => {
  return (
    <section className='carousel'>
      <div className="justify-content-center ">
          <h1 className="text-white text-center">Here are some of<span className="carousel-header"> our works</span></h1>
          <AliceCarousel  infinite items={items} responsive={threeItem}/>
      </div>
    </section>
  );
};

export default Carousal;