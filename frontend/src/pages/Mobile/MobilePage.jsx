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
    // <div className="mobile-page-with-sidebar">
    <div className="row">
      <div className="col-md-3 col-12">
        {" "}
        <Sidebar />
      </div>
      <div className="col-md-9 col-12">
        <div className="row">
          <div className="col-12">
            <UpperBar />
          </div>
          <div className="row">
            {data.length > 0 &&
              data?.map((el, i) => {
                if (i < 15) {
                  return (
                    <div key={el.id} className="col-md-3 col-12">
                      <MobileCard {...el} />
                    </div>
                  );
                } else {
                  return false;
                }
              })}
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}
