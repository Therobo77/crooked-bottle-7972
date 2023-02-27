import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "../Mobile/MobilePage.css";
import { useEffect } from "react";
import { getProductData } from "../../Redux/ProductReducer/action";

import UpperBar from "../../components/UpperBar";
import { useLocation, useSearchParams } from "react-router-dom";
import FurnitureCard from "./FurnitureCard";
import Header from "../../components/LandingPage/Header/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FurniturePage() {
  const data = useSelector((store) => store.productReducer.products);
  console.log(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const Cat = searchParams.getAll("category");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData);
  }, []);

  return (
    <>
      <Header />
      <Navbar />
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
                data
                  .filter((el) => {
                    if (Cat.length > 0) {
                      return Cat.includes(el.category);
                    } else {
                      return el;
                    }
                  })
                  .map((el) => {
                    return (
                      <div key={el.id} className="col-md-3 col-12">
                        <FurnitureCard {...el} />
                      </div>
                    );
                  })}

              {/* {data.length > 0 &&
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
              })} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

    // </div>
  );
}
