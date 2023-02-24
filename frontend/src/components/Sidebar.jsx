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
    let ct = data.map((el) => el.category);
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
        <div className="sidebar">
                <Box className="left-mobile">
                    <Heading as='h2' size='lg'>Filter By CATEGORIES</Heading>
                    <Text>CATEGORIES</Text>
                    {
                        localCate?.map((el,id)=>{
                            return(
                                <div key={id}>
                                    <input type="checkbox"
                                    value={el}
                                    checked={category.includes(el)}
                                    onChange={handlechange} />
                                    <label >{el}</label>
                                </div>
                            )
                        })
                    }
                </Box>
                
            
        </div>
    )
};
