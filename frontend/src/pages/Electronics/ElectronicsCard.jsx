import {
  CardBody,
  Image,
  Stack,
  Card,
  Text,
  Heading,
  CardFooter,
  ButtonGroup,
  Divider,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
import { NavLink, Link } from "react-router-dom";

import "../Mobile/MobilePage.css";
import { useSelector } from "react-redux";
import "../search/Search.css"
export default function ElectronicsCard({
  item_id,
  title,
  description,
  new_price,
  rating,
  brand,
  category,
  image,
}) {

  const search = useSelector(store=>store.productReducer);
   
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

  return (
    <>
      <div key={item_id + 1} className="mt-3">
        <Card maxW="sm" boxShadow="2xl" rounded="lg">
          <NavLink to={`/single/${item_id}`}>
            <CardBody>
              <Center>
                <Image
                  boxSize="200px"
                  src={image}
                  alt={image}
                  borderRadius="lg"
                />
              </Center>
              <Stack mt="0.5rem" spacing="3">
                <Heading size="md">{title}</Heading>
                <Text>{description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ₹{new_price}
                </Text>
                <span>Free delivery</span>
              </Stack>
            </CardBody>
          </NavLink>
        </Card>
      </div>
    </>
  );
}
