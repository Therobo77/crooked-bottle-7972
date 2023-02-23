import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "../Mobile/MobilePage.css";
import { useEffect } from "react";
import { getProductData } from "../../Redux/ProductReducer/action";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import MobileCard from "./MobileCard";
import UpperBar from "../../components/UpperBar";

export default function MobilePage() {
  const data = useSelector((store) => {
    // console.log(store.productReducer);
    return store?.productReducer?.products;
  });
  const dispatch = useDispatch();
  // console.log(dispatch);
  //    console.log("data");

  useEffect(() => {
    dispatch(getProductData);
  }, []);
  // console.log("2222",data);
  return (
    <div className="mobile-page-with-sidebar">
      
     <Sidebar/>
     
    <Box>
      <Box>
          <UpperBar/>
      </Box>
      <Box>
 <div className="mobile-page">
        
        {data.length > 0 &&
          data?.map((el, i) => {
           
            if (i < 15) {
              return (
                <Box className="card" style={{border:'none',borderColor:'white'}}>
                  <div key={el.id}>
                  <MobileCard  {...el} />

                  </div>
                </Box>
              );
            }else{
              return false
            }
          })}
      </div>
      </Box>
    </Box>

     
    </div>
  );
}
