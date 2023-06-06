import "./Sidebar.css"
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Sidebar() {
   const data=useSelector((store)=>{
    return store.productReducer.products
   })

   const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category") || [];
  const [category, setCategory] = useState(initialState || []);
  const [localCate, SetLocalCate] = useState([]);
   useEffect(()=>{
    setSearchParams({category:[...category]})
   },[category])

   useEffect(() => {
    mapCategory(data);
  }, [data]);

  const mapCategory = (data) => {
    let ct;
    

      ct = data.map((el) => el.category);
    
    const catSet = new Set(ct);
    SetLocalCate([...catSet]);
  };

  const handlechange = (e) => {
    let newCategory = [...category];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1); //indecOf() find the index
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
     console.log('new',newCategory)
  };
   

    return(
      <div className="sidebar-App">
  <Box className="left-mobile">
    <Heading as="h2" size="l" marginBottom="10px" color="gray.800">
      Filter By Categories
    </Heading>
    {localCate?.map((el, id) => {
      return (
        <div
          key={id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <input
            type="checkbox"
            className="form-check-input me-3"
            value={el}
            checked={category.includes(el)}
            onChange={handlechange}
            style={{
              appearance: "none",
              width: "1rem",
              height: "1rem",
              borderRadius: "50%",
              marginRight: "0.5rem",
              border: "2px solid #3182ce",
              backgroundColor: category.includes(el) ? "#3182ce" : "transparent",
            }}
          />
          <label
            style={{
              color: "#4a5568",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            {el}
          </label>
        </div>
      );
    })}
  </Box>
</div>

    
    )
};
