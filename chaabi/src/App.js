import './App.css';
import { Flex, Box } from "@chakra-ui/react";
import Sentence from './component/Sentence';
import Input from './component/Input';
import { useEffect, useState } from 'react';


const Mysentence=`Mary had a little lamb,
Its fleece was white as snow;
And everywhere that Mary went,
The lamb was sure to go.

It followed her to school one day,
Which was against the rule;
It made the children laugh and play,
To see a lamb at school.`

function App() {
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [nextCharacters, setNextCharacters] = useState('');
  const [wpm, setWPM] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const handleChange = (text) => {
    setInput(text);
    if (!startTime) {
      setStartTime(Date.now());
    }
  };

  const calculateWPM = (text, endTime) => {
    const elapsedTime = (endTime - startTime) / 60000; 
    const wordCount = text.trim().split(/\s+/).length;
    const wpm = Math.round(wordCount / elapsedTime);
    setWPM(wpm);
  };

  const calculateAccuracy = (text, sentence) => {
    const sentenceLength = sentence.length;
    let correctCharacters = 0;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === sentence[i]) {
        correctCharacters++;
      }
    }

    const accuracy = (correctCharacters / sentenceLength) * 100;
    setAccuracy(accuracy.toFixed(2));
  };

  const handleSubmit = () => {
    setEndTime(Date.now());
  };



  useEffect(() => {
    const charactersToType = Mysentence.slice(
      input.length,
      input.length + 9
    );
    setNextCharacters(charactersToType);
  }, [Mysentence, input]);

  useEffect(() => {
    if (startTime > 0 && endTime > 0) {
      calculateWPM(input, endTime);
      calculateAccuracy(input, Mysentence);
    }
  }, [input, endTime, Mysentence, startTime]);

  return (
    <Box w={"100vw"} h={"100vh"} border="1px solid"  backgroundImage="url('https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"
    backgroundPosition="center"
    backgroundSize="cover"
    backgroundRepeat="no-repeat">
      <h1 style={{textAlign:"center",fontSize:'35px'}}>Welcom to Our Application</h1>
      <Flex   >
        <Sentence Mysentence={Mysentence} nextCharacters={nextCharacters} />
        <Input handleSubmit={handleSubmit} value={input} handleChange={handleChange} wpm={wpm} accuracy={accuracy} />
      </Flex>
    </Box>
  );
}

export default App;
