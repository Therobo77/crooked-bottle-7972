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
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
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
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location =useLocation()
  
  
  // const postData = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:3300/user/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.token) {
  //         setMsg(res.token);
  //         localStorage.setItem("token", res.token);
  //         console.log("token",res.token);
  //       } else {
  //         setMsg(res.msg);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
      
  // };

  const handleLogin=()=>{
    console.log("navigate");
    dispatch(login(data)).then(()=>{
      navigate(location.state)
    })
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
