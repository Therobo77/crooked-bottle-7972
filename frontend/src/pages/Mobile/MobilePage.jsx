import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "./MobilePage.css";
import { useEffect } from "react";
import { getProductData } from "../../Redux/ProductReducer/action";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function MobilePage() {
  const data = useSelector((store) => {
    console.log(store.productReducer);
    return store?.productReducer?.products;
  });
  const dispatch = useDispatch();
  // console.log(dispatch);
  //    console.log("data");

  useEffect(() => {
    console.log("hello");
    dispatch(getProductData);
  }, []);
  console.log(data);
  return (
    <div className="mobile-page-with-sidebar">
      <Sidebar />
      <div className="mobile-page">
        {data.length > 1 &&
          data?.map((el) => {
            return (
              <Flex>
                <Box className="mobile-card" key={el.id}>
                  <Image src={el.images[0]} />
                  <Text>{el.title}</Text>
                </Box>
              </Flex>
            );
          })}
      </div>
    </div>
  );
}
