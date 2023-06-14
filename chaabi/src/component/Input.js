import React from 'react'
import {
    Box, Button, FormControl, FormLabel, Textarea,Flex
} from "@chakra-ui/react"
export default function Input({handleSubmit,value,handleChange,wpm,accuracy}) {
  return (
    <Box  w="50%" h="100vh" >
    <Box w={"80%"} h="50%" m="auto" mt={"25%"} boxShadow='base'rounded='md' bg='white' >
         <FormControl padding={10}>
            <FormLabel>Enter text here</FormLabel>
            <Textarea value={value} onChange={(e)=>handleChange(e.target.value)} placeholder="Start typing..." rows={4} cols={50} />
         </FormControl>
            <Button ml={"45%"} onClick={()=>handleSubmit()}>
                Submit
            </Button>

            <Flex justifyContent="center" alignItem="center" gap="5" paddingTop="5" >
          <Box >
            <p>WPM: {wpm}</p>
          </Box>
          <Box>
            <p>Accuracy: {accuracy}%</p>
          </Box>
          
        </Flex>

    </Box>
  </Box>
  )
}
