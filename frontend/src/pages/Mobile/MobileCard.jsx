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

export default function MobileCard({
  id,
  title,
  description,
  price,
  rating,
  brand,
  category,
  images,
}) {
  return (
    <>
      {/*  <div className="row">
      <div className="col-3"> */}
      <div className="carddiv">
        <div key={id + 1}>
          <Card maxW="sm" boxShadow="2xl" rounded="lg">
            <NavLink to={`/single/${id}`}>
              <CardBody>
                <Center>
                  <Image
                    boxSize="200px"
                    src={images[0]}
                    alt={images}
                    borderRadius="lg"
                  />
                </Center>
                <Stack mt="0.5rem" spacing="3">
                  <Heading size="md">{title}</Heading>
                  <Text>{description.split("").splice(0, 25)}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ₹{price}
                  </Text>
                  <span>Free delivery</span>
                </Stack>
              </CardBody>
            </NavLink>
            {/* <Divider /> */}
            <CardFooter>
              {/* <ButtonGroup spacing="6">
              <Button
                colorScheme="teal"
                variant="outline"
                size="lg"
                rounded="lg"
              >
                <AddIcon boxSize={6} />
              </Button>
              <Button
              variant="solid"
              colorScheme=""
              bg="black"
              size="lg"
              w="50%"
              onClick={() => {
                // addToCart(id,price );
              }}
            >
              Add to cart
            </Button>
            </ButtonGroup> */}
            </CardFooter>
          </Card>
        </div>
      </div>
      {/* </div>
    </div> */}
    </>
  );
}
