import { Box, Button, styled, Typography } from "@mui/material";
import styledEngine from "@mui/styled-engine";
import { textAlign } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 2,
  },
};

const SliderContainer = styled(Box)({
  backgroundColor: "white",
  width: "80%",
});

const Image = styled("img")({
  width: "auto",
  height: "150px",
});

const Text = styled("p")({
  fontSize: "14px",
  marginTop: "5px",
});

const Slides = ({ products }) => {
  const navigate = useNavigate();

  const handleCategory = (category) => {
    console.log(category);
    if (category === "clothes") {
      //  navigate("/fashion")
    } else if (category === "electronics") {
      navigate("/mobile-page");
    } else if (category === "Healthcare") {
      // navigate("/")
    } else if (category === "Styles") {
      // navigate("/")
    } else if (category === "Appliances") {
      // navigate("/")
    } else if (category === "Fashion") {
      // navigate("/")
    } else if (category === "Best Seller") {
      // navigate("/")
    }
  };

  let x = products[0].category;

  return (
    <div style={{ display: "flex" }}>
      <Box
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "600",

          height: "auto",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <p style={{ lineHeight: "130%", marginBottom: "15%" }}>
          Best Of {x.toUpperCase()}
        </p>
        <button
          style={{
            fontSize: "18px",
            color: "white",
            backgroundColor: "#2874f0",
            padding: "1% 5%",
            fontWeight: "300",
          }}
          onClick={() => {
            handleCategory(products[0].category);
          }}
        >
          View All
        </button>
      </Box>

      <SliderContainer>
        <Carousel
          style={{ width: "80%", border: "1px solid green" }}
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((ele, index) => (
            <Box
              textAlign="center"
              style={{ padding: "25px 15px", textAlign: "center" }}
              onClick={() => {
                handleCategory(ele.category);
              }}
            >
              <Image
                key={index}
                src={ele.img}
                alt={"product"}
                style={{ margin: "auto", cursor: "pointer" }}
              />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {ele.title}
              </Text>
              <Text style={{ color: "green", cursor: "pointer" }}>
                {ele.offer_price}
              </Text>
              <Text style={{ color: "#212121", opacity: "0.6" }}>
                {ele.desc}
              </Text>
            </Box>
          ))}
        </Carousel>
      </SliderContainer>
    </div>
  );
};

export default Slides;
