
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function AuthFooter(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent='space-between'
      pb='20px'
      fontSize='sm'>
      <Text
        color='white'
        textAlign={{
          base: "center",
        }}
        mb={{ base: "20px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span' mx='2px'>

            "Made with ❤️ by Brrima Maram & Bdida Aymen "
        </Text>
      </Text>
     
    </Flex>
  );
}
