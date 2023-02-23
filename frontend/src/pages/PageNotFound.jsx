import React from 'react'
import pagenotFound from "../assets/pagenotFound.png"
import { Button } from '@chakra-ui/react';
const PageNotFound = () => {
  const handlepagenotFound = () =>{
    // navigate to the first page
    alert(`Page not found`);
  }
  return (
    <div>
      {/* <img src={pagenotFound} alt="" /> */}
      <img src="https://th.bing.com/th?id=OIP.247RfZZOGYEp-oIDwG171gHaGb&w=268&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2" alt="" />
      <Button onClick={handlepagenotFound} colorScheme="red">Go To Home</Button>
    </div>
  )
}

export default PageNotFound