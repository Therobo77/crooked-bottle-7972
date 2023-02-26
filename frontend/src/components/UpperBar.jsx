import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { sortAsc, sortDesc } from "../Redux/ProductReducer/action";

export default function UpperBar(props) {
  const dispatch=useDispatch()
const[searchParams,setSearchParams]=useSearchParams()

const init=searchParams.get("order")
const [order,setorder]=useState(init||"")
  console.log("category",props);
useEffect(()=>{
  if(order=='asc'){

    dispatch(sortAsc())
  }
  if(order=='desc'){
    dispatch(sortDesc())

  }
},[order])

useEffect(()=>{
  let params={}
  order && (params.order=order)
  setSearchParams(params)
  
},[order])
  const handleSort=(e)=>{
    setorder(e.target.value)
  }

  console.log("order",order);
  return (
    <div className="col-md-12 col-3 mt-5" >
      <Heading as="h1" size="md">
       {props.category}
      </Heading>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "50%",
        }}
      >
        <Heading size="sm">Sort By Price</Heading>
        <label>asc</label>
        <input type="radio" name="order" value={'asc'} onChange={(e)=>handleSort(e)}/>
        <label >desc</label>
        <input type="radio" name="order" value={'desc'} onChange={(e)=>handleSort(e)}  />
        {/* <button>Price--Low to High</button>
        <button>Price--High to Low</button> */}
      </div>
    </div>
  );
}
