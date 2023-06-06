import React, { useState } from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import "../search/Search.css";
import "../Mobile/MobilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../Redux/CartReducer/cartAction";

export default function MobileCard(data) {


  const search = useSelector((store) => store.productReducer);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  if (search.isLoading) {
    return <div className="loading-indicator">Loading...</div>;
  }
  if (search.isError) {
    return <p>Something went wrong</p>;
  }

  const moveToCart = (data) => {
    
   dispatch( addTocart(data));
     navigate("/cart");
  };

  return (
   <>
    <Box height="450px">
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      height="90%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
   <NavLink to={`/single/${data.id}`}>
        <Image
          src={data.image}
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.40)" }}
          alt="Product Image"
          objectFit="cover"
          width={150}
          margin={"auto"}
          height={200}
          />
          </NavLink>
        <Box p="5">
          <Box d="flex" alignItems="baseline" >
           
            <Badge borderRadius="full" width={"100%"} px="3" colorScheme="teal" >
            {data.category}
            </Badge>


            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Brand: {data.brands}
            </Box>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {data.title}
          </Box>

          <Box>
            <Box as="span" fontSize="sm" color="gray.600">
              ${data.price}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box p="3" >
        <Button colorScheme="teal" size="sm" width="90%" m={'auto'} onClick={() => moveToCart(data)}>
          Buy Now
        </Button>
      </Box>
    </Box>
   
    
  </Box>
 
      
   </>
   
  );

}
