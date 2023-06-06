import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { shallowEqual, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import SingleMobileCard from "./SingleMobileCard";
import { styled } from "@mui/material";

const Component = styled(Box)`
  background: #f2f2f2;
  `;
  export default function SingleMobile() {
    const [data, setdata] = useState([]);
    const search = useSelector(store=>store.productReducer);
  const { isloading, product } = useSelector((store) => {
    return {
      isloading: store.productReducer.isLoading,
      product: store.productReducer.product,
    };
  }, shallowEqual);
  const params = useParams();
  const getsingledata = (id) => {
  
    axios
      .get(`https://json-server-xyof.onrender.com/products/${id}`)
      .then((res) => {
        
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getsingledata(params.id);
  }, [params.id]);
 
   
  if(search.isLoading){
      return (
          <div className="loading-indicator" >Loading...</div>
      )
  }
  if(search.isError){
      return (
          <p>Something went wrong</p>
      )
  }
  return (
    <Box>
      {
        <div style={{ background: "f2f2f2" }}>
          <div>
            <SingleMobileCard {...data} />
          </div>
        </div>
      }
    </Box>
  );
}
