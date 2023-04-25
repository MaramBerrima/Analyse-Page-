
import React from "react"; 
import { 
  Flex, 
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
 

 
function Comparisant() { 

  return (
    <Flex position='relative'>
      <Flex
        minH='100vh'
        h={{ base: "120vh", lg: "fit-content" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        pt={{ sm: "100px", md: "0px" }}
        flexDirection='column'
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <h1 style={{color:"white"}}>
            Comparisant 
        </h1>
      </Flex>
    </Flex>
  );
}

export default Comparisant;

