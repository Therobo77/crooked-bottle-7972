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
  return <div className="col-md-12 col-3 mt-5">
  <Heading as="h1" size="md">
    {props.category_name}
  </Heading>

  <div
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      width: "50%",
      marginTop: "1rem",
    }}
  >
    <Heading size="sm" marginRight="1rem">
      Sort By Price:
    </Heading>
    <div style={{ display: "flex", alignItems: "center" }}>
      <label htmlFor="asc" style={{ marginRight: "0.5rem" }}>
        Ascending
      </label>
      <input
        type="radio"
        id="asc"
        name="order"
        value="asc"
        onChange={(e) => handleSort(e)}
      />
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <label htmlFor="desc" style={{ marginRight: "0.5rem" }}>
        Descending
      </label>
      <input
        type="radio"
        id="desc"
        name="order"
        value="desc"
        onChange={(e) => handleSort(e)}
      />
    </div>
  </div>
</div>

    
}
