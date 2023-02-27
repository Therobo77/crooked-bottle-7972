import React from "react";
import pagenotFound from "../assets/pagenotFound.png";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  ${"" /* padding: 12px 8px; */}
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const PageNotFound = () => {
  const navigate = useNavigate();
  const handlepagenotFound = () => {
    // navigate to the first page
    navigate("/");
    // alert(`Page not found`);
  };
  return (
    <Container>
      <div>
        {/* <img src={pagenotFound} alt="" /> */}
        <img
          src="https://th.bing.com/th?id=OIP.247RfZZOGYEp-oIDwG171gHaGb&w=268&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2"
          alt=""
        />
        <br />
        {/* <Button  colorScheme="red">Go To Home</Button> */}
        <Button
          onClick={handlepagenotFound}
          height="80px"
          width="400px"
          border="4px"
          borderColor="red.500"
          colorScheme="teal"
          size="lg"
        >
          <FaHome /> Back To Home
        </Button>
      </div>
    </Container>
  );
};

export default PageNotFound;



// =======
// const PageNotFound = () => {
//   const navigate = useNavigate();
//   const handlepagenotFound = () => {
//     navigate("/");
//   };
//   return (
//     <div className="mx-auto col-6">
//       <div className="card shadow mt-5 mb-3">
//         <div
//           className="col-12 mb-5 mt-5"
//           style={{
//             display: "grid",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src="https://th.bing.com/th?id=OIP.247RfZZOGYEp-oIDwG171gHaGb&w=268&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2"
//             alt=""
//           />
//           <Button
//             onClick={handlepagenotFound}
//             colorScheme="red"
//             className="mt-4"
//           >
//             Go To Home
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
