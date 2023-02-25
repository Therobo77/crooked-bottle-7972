import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "./data";
import { First_Carousal } from "./data";
import CarousalCard from "./CarousalCard";
import { styled } from "@mui/material";

import "./Banner.css";

const Image = styled("img")({
  width: "1000%",
  height: "300px",
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
   
  },
};
const Banner = () => {
  return (
    <div>
      <div>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={ true }
          autoPlaySpeed={3000}
        >
          {bannerData.map((data, index) => {
            return <Image key={index} src={data.url} alt="banner source" />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

// 
// <div className='left-banner'>
//      
//      <button style={{backgroundColor:"blue"}}>View All</button>
// </div>

// <div className='right-box'>

//             
//  </div>

//
