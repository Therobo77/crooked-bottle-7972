import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export default function UpperBar() {
  return (
    <div className="col-md-12 col-3">
      <Heading as="h1" size="md">
        Babo Botanicals Beauty And Grooming
      </Heading>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "50%",
        }}
      >
        <Heading size="sm">Sort By</Heading>
        <button>Price--Low to High</button>
        <button>Price--High to Low</button>
      </div>
    </div>
  );
}
