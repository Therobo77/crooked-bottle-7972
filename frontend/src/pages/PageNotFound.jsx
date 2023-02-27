import React from "react";
import pagenotFound from "../assets/pagenotFound.png";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  const handlepagenotFound = () => {
    navigate("/");
  };
  return (
    <div className="mx-auto col-6">
      <div className="card shadow mt-5 mb-3">
        <div
          className="col-12 mb-5 mt-5"
          style={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://th.bing.com/th?id=OIP.247RfZZOGYEp-oIDwG171gHaGb&w=268&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2"
            alt=""
          />
          <Button
            onClick={handlepagenotFound}
            colorScheme="red"
            className="mt-4"
          >
            Go To Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
