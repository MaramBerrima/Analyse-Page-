

import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Switch,
  Text,
  Icon,
  DarkMode,
} from "@chakra-ui/react";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";

// Assets
import signUpImage from "assets/img/signInImage.jpg";

function SignUp() {
  const titleColor = "white";
  const textColor = "gray.400";

  return (
    <Flex position='relative' overflow={{ lg: "hidden" }}>
      <Flex
        flexDirection='column'
        h={{ sm: "initial", md: "unset" }}
        w={{ base: "90%" }}
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        pt={{ sm: "100px", md: "0px" }}
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          flexDirection='column'
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='50px'
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            textAlign='center'
            justifyContent='center'
            align='center'
            mt={{ base: "60px", md: "140px", lg: "200px" }}
            mb='50px'>
            <Text
              fontSize='4xl'
              lineHeight='39px'
              color='white'
              fontWeight='bold'>
              Welcome!
            </Text>
           
          </Flex>
          <GradientBorder p='2px' me={{ base: "none", lg: "30px", xl: "none" }}>
            <Flex
              background='transparent'
              borderRadius='30px'
              direction='column'
              p='40px'
              minW={{ base: "unset", md: "430px", xl: "450px" }}
              w='100%'
              mx={{ base: "0px" }}
              bg={{
                base: "rgb(19,21,56)",
              }}>
              <Text
                fontSize='xl'
                color={textColor}
                fontWeight='bold'
                textAlign='center'
                mb='22px'>
                Nice to meet you 
              </Text>
              <FormControl>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'>
                  Name
                </FormLabel>

                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius='20px'>
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: "100%", md: "346px" }}
                    maxW='100%'
                    h='46px'
                    type='text'
                    placeholder='Your name'
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'>
                  Email
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius='20px'>
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: "100%", md: "346px" }}
                    maxW='100%'
                    h='46px'
                    type='email'
                    placeholder='Your email address'
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'>
                  Password
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  h='50px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius='20px'>
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: "100%", md: "346px" }}
                    maxW='100%'
                    h='46px'
                    type='password'
                    placeholder='Your password'
                  />
                </GradientBorder>
                
                <Button
                  variant='brand'
                  fontSize='10px'
                  type='submit'
                  w='100%'
                  maxW='350px'
                  h='45'
                  mb='20px'
                  mt='20px'>
                  SIGN UP
                </Button>
              </FormControl>
              <Flex
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                maxW='100%'
                mt='0px'>
                <Text color={textColor} fontWeight='medium'>
                  Already have an account?
                  <Link
                    color={titleColor}
                    as='span'
                    ms='5px'
                    href='#'
                    fontWeight='bold'>
                    Sign In
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </GradientBorder>
        </Flex>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='90px'>
          <AuthFooter />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX='hidden'
          h='1300px'
          maxW={{ md: "50vw", lg: "48vw" }}
          w='960px'
          position='absolute'
          left='0px'>
          <Box
            bgImage={signUpImage}
            w='100%'
            h='1300px'
            bgSize='cover'
            bgPosition='50%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            position='absolute'>
            <Text
              textAlign='center'
              color='white'
              letterSpacing='8px'
              fontSize='20px'
              fontWeight='500'>
              THE POWER OF OUR:
            </Text>
            <Text
              textAlign='center'
              color='transparent'
              letterSpacing='8px'
              fontSize='36px'
              fontWeight='bold'
              bgClip='text !important'
              bg='linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)'>
                SPEEDESTER
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
