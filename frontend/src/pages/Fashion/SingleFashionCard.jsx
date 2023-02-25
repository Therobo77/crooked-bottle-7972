import { Box, Button, Heading, Image, Text,Icon } from "@chakra-ui/react";
import { styled } from "@mui/material";
import { FaCartPlus, FaRupeeSign} from "react-icons/fa";
export default function SingleFashionCard(data) {
  console.log("mate", data);
  const LeftContainer = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
  `;

  const Imagee = styled("img")({
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "100%",
  });

  return (
    <div className="m-4" style={{ display: "flex",padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "100%", }}>
      <div
      >
        <Image  src={data.thumbnail} />
        <Button
          leftIcon={<FaCartPlus />}
          style={{
            background: " #ff9f00",
            color: "white",
            marginLeft: "8%",
            width: "30%",
            marginTop:"5%",
          }}
        >
          Add to Cart
        </Button>
        <Button
          style={{
            background: "#fb641b",
            color: "white",
            marginLeft: "8%",
            marginTop:"5%",
            width: "30%",
          }}
        >
          Buy Now
        </Button>
      </div>

      {/* <div className="row">
        {data.images &&
          data.images.map((item) => {
            return (
              <div className="col-2">
                <img src={item} />
              </div>
            );
          })}
      </div> */}
      <div style={{marginLeft:"10%"}}>
        <Heading>{data.title}</Heading>
       <Text><Icon as={FaRupeeSign}/> {data.price}</Text>
       {/* <Text fontWeight={"bold"} >Price:{data.price}</Text></Icon> */}
        <p>Description:{data.description}</p>
        <p>rating :{data.rating}</p>
      </div>
    </div>
  );
}
