import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import { login } from "../../Redux/AuthReducer/action";
import Footer from "../../components/Footer";
import Header from "../../components/LandingPage/Header/Header";
import Navbar from "../../components/Navbar";

export default function Login() {
  const [data, setData] = useState({
    email: "",

    password: "",
  });
  const [msg, setMsg] = useState("");
  const isAuth=useSelector((store)=> store.authreducer.isAuth)
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location =useLocation()
  const toast = useToast();

  const handleLogin=()=>{
    console.log("navigate");
    dispatch(login(data))
      navigate(location.state)
      if(isAuth ){
        toast({
          title: "login successful",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
      
  }

  
  return (
    <>
     
      <Header/>
  
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={onChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password" onChange={onChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                onClick={handleLogin}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Log In
              </Button>
              <Link to="/signup">Register Here</Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
     
    </>
  );
  
}
