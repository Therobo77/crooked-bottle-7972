import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "../Mobile/MobilePage.css";
import { useEffect, useState } from "react";
import { getProductData } from "../../Redux/ProductReducer/action";

import MobileCard from "./MobileCard";
import UpperBar from "../../components/UpperBar";
import { useLocation, useSearchParams } from "react-router-dom";
import Header from "../../components/LandingPage/Header/Header";
import Navbar from "../../components/Navbar";

import "../search/Search.css"
import { Box, Button } from "@chakra-ui/react";
export default function MobilePage() {
  const data = useSelector((store) => store.productReducer.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page
  const [searchParams, setSearchParams] = useSearchParams();
  const Cat = searchParams.getAll("category");
  const dispatch = useDispatch();
  const search = useSelector(store=>store.productReducer);
   console.log("search",data);

  useEffect(() => {
    dispatch(getProductData);
  }, []);
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
const totalPages = Math.ceil(data.length / itemsPerPage);
    // Calculate pagination indexes
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = search.products.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const renderPageButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;
  
    let startPage = Math.max(currentPage - Math.floor(maxVisibleButtons / 2), 1);
    let endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);
  
    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(endPage - maxVisibleButtons + 1, 1);
    }
  
    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <Button
          key={page}
          size="sm"
          colorScheme={currentPage === page ? "teal" : "gray"}
          onClick={() => paginate(page)}
        >
          {page}
        </Button>
      );
    }
  
    return buttons;
  };

  return <>
  <Header />
  <Navbar />
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-12">
        <Sidebar />
      </div>
      
      <div className="col-lg-9 col-md-8 col-12">
        
      <UpperBar/>
        <div className="row">
          {currentItems.map((el)  => {
            return (
              <div key={el.id} className="col-lg-3 col-md-4 ">
                <MobileCard {...el} />
              </div>
            );
          })}
        </div>

        {/* Pagination */}
         
        <Box display="flex" justifyContent="center" mt={4} ml={"-10%"} mb={"10%"}>
    <Button
      size="sm"
      colorScheme="teal"
      disabled={currentPage === 1}
      onClick={() => paginate(currentPage - 1)}
    >
      Previous
    </Button>
    {renderPageButtons()}
    <Button
      size="sm"
      colorScheme="teal"
      disabled={currentPage === totalPages}
      onClick={() => paginate(currentPage + 1)}
    >
      Next
    </Button>
  </Box>
      </div>
    </div>
  </div>
</>

    
}
