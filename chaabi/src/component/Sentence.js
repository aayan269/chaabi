import React from 'react'
import {
    Box, 
} from "@chakra-ui/react"
export default function Sentence({Mysentence,nextCharacters}) {
  return (
    <Box  w="50%" h="100vh" >
      <Box w={"80%"} h="50%" m="auto" mt={"25%"}  boxShadow='base'rounded='md' bg='white'>
      <h1 style={{textAlign:'center',fontSize:"2vw"}}>Check your Typing speed</h1>
        <Box w="80%" h="200px" m="auto" mt="30px"boxShadow='outline'  rounded='md' ><h3 style={{textAlign:'start',padding:"10px"}}>{Mysentence}</h3></Box>
<h5 style={{textAlign:'center',paddingTop:"10px"}}>Next character : {nextCharacters}</h5>
      </Box>
    </Box>
  )
}
