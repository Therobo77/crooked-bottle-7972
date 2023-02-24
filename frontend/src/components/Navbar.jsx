import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 12px 8px;
  text-align: center;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: #2874f0;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }

  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;

const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  img {
    width: 48px;
    margin-bottom: 4px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;

    img {
      width: 32px;
    }
  }
`;

const Navbar = () => {
  const navData = [
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      text: "Top Offers",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      text: "Grocery",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
      text: "Mobile",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
      text: "Fashion",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      text: "Electronics",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",
      text: "Home",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      text: "Appliances",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
      text: "Travel",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
      text: "Beauty, Toys & More",
    },
  ];

  return (
    <>
      <NavbarContainer>
        {navData.map((temp, i) => (
          <NavbarItem key={i}>
            <img src={temp.url} style={{ width: 64 }} alt={temp.text} />
            <p>{temp.text}</p>
          </NavbarItem>
        ))}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
