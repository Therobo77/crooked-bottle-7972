import { Box, Button, Heading, Image, Text, Icon } from "@chakra-ui/react";
import { styled } from "@mui/material";
import { FaCartPlus, FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Header from "../../components/LandingPage/Header/Header";
export default function SingleMobileCard(data) {
  const navigate = useNavigate();
  const allCartItem = useSelector((store) => {
    return store.CartReducer.cartItem;
  });
  console.log("allCart", allCartItem);
  console.log("mate", data);
  const LeftContainer = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
  `;

  const Imagee = styled("img")({
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "100%",
  });
  const moveToCart = (data) => {
    console.log(data);
    allCartItem.push(data);
    navigate("/cart");
  };

  return (
    <>
      <Header />
      <Navbar />
      <div
        className="m-4"
        style={{
          display: "flex",
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "100%",
        }}
      >
        <div>
          <Image src={data.thumbnail} />
          <Button
            leftIcon={<FaCartPlus />}
            style={{
              background: " #ff9f00",
              color: "white",
              marginLeft: "8%",
              width: "30%",
              marginTop: "5%",
            }}
            onClick={() => moveToCart(data)}
          >
            Add to Cart
          </Button>
          <Button
            style={{
              background: "#fb641b",
              color: "white",
              marginLeft: "8%",
              marginTop: "5%",
              width: "30%",
            }}
          >
            Buy Now
          </Button>
        </div>

        <div style={{ marginLeft: "10%" }}>
          <Heading>{data.title}</Heading>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            <Icon as={FaRupeeSign} /> {data.price}{" "}
            <span className="text-success fs-6 ms-2">
              {data.discountPercentage} % off
            </span>
          </Text>
          <p>Description:{data.description}</p>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <p>
              <span
                style={{ borderRadius: "19px" }}
                class="badge text-bg-success  p-2 "
              >
                {data.rating} <i class="bi bi-star-fill ps-2"></i>
              </span>{" "}
            </p>
            <img
              style={{ scale: "0.3", marginTop: "-3%", marginLeft: "-10%" }}
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt=""
            />
          </div>
          <p>Available offers</p>
          <div className="row">
            <div className="col-1">
              <img
                style={{ scale: "0.6" }}
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div className="col-11">
              <span style={{ marginLeft: "-15px" }}>
                Special PriceGet at flat ₹449T&C
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img
                style={{ scale: "0.6" }}
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div className="col-11">
              <span style={{ marginLeft: "-15px" }}>
                Buy this Product and Get Extra ₹500 Off on Bikes & ScootersT&C
              </span>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-1">
              <img
                style={{ scale: "0.6" }}
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div className="col-11">
              <span style={{ marginLeft: "-15px" }}>
                Partner OfferSign up for Flipkart Pay Later and get Flipkart
                Gift Card worth up to ₹500*Know More
              </span>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-1">
              <img
                style={{ scale: "0.6" }}
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
            </div>
            <div className="col-11">
              <span style={{ marginLeft: "-15px" }}>
                Bank Offer10% instant discount on PNB Credit Card, up to ₹1500,
                on orders of ₹5,000
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
