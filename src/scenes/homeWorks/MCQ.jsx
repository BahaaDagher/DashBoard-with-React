import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Colors } from '../../theme';
import  SubmitButton  from '../../components/SubmitButton';

const ChildBox = styled(Box)(({ theme }) => ({
  margin: '10px 0 ' ,
}));

export  const H5 = styled("h5")(({ theme }) => ({
  fontWeight: "bold" , 
  color: Colors.main[1] ,
  margin: "20px 0" ,
}));

const Input = styled("input")(({ theme }) => ({
    width: "100%" ,
    padding: "8px" , 
    border: "1px solid #ccc" , 
    borderRadius: "5px" , 
    transition: "all 0.3s ease-in-out" , 
    "&:hover, :focus": {
      outlineColor: "#00bfc6" , 
      borderColor: "#00bfc6" , 
    }, 
    "&.add": {
      width: "89%" ,
      [theme.breakpoints.down("500")]: {
        width: '85%' ,
      },
    }
}));

const AddButton = styled(Box)(({ theme }) => ({
  minWidth: '10%' ,
  display: 'flex' ,
  justifyContent: 'center' ,
  alignItems: 'center' ,
  borderRadius: '5px' ,
  fontWeight: 'bold' ,
  cursor: 'pointer' ,
  backgroundColor: Colors.main[3] ,
  color: 'white' ,
  "&:hover": {
    backgroundColor: Colors.main[2],
  },
  transition: "background-color 0.3s",
  [theme.breakpoints.down("500")]: {
    width: '14%' ,
  },

}));

const Ul = styled("ul")(({ theme }) => ({
  listStyle: 'none' ,
}));

const Li = styled("li")(({ theme }) => ({
  margin: '10px 0' ,
  width: '50%' ,
  border: `2px solid ${Colors.main[3]}` ,
  padding: '10px' ,
  borderRadius: '5px' ,
  fontWeight: 'bold' ,
  [theme.breakpoints.down("800")]: {
    width: '100%' ,
  },
}));


function MCQ() {

  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setCurrentAnswer(event.target.value);
  };

  const addAnswer = () => {
    if (currentAnswer) {
      const answerKey = `answer${Object.keys(answers).length+1}` 
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [answerKey]: currentAnswer,
      }));
      setCurrentAnswer('');
    }
  };
  const handleSubmit = () => {
    if (question && Object.keys(answers).length > 0) {
      setAnswers({});
    }
  };

  return (
    
    <Box >
      <ChildBox>
        <H5>  السؤال :</H5>
        <div>
          <Input
            type="text"
            placeholder="أدخل السؤال هنا"
            value={question}
            onChange={handleQuestionChange}
          />
        </div>
      </ChildBox>
      <ChildBox>
        <H5>   الإجابات :</H5>
        <Box display="flex" justifyContent="space-between">
          <Input
            className="add"
            type="text"
            placeholder="أدخل الإجابة هنا"
            value={currentAnswer}
            onChange={handleAnswerChange}
          />
          <AddButton onClick={addAnswer}>+</AddButton>
        </Box>
        <div>
          <Ul>
            {Object.entries(answers).map(([answerId, answer], index) => (
              <Li key={answerId}> - {answer}</Li>
            ))}
          </Ul>
        </div>
      </ChildBox>
      <SubmitButton onClick={handleSubmit}>تأكيد</SubmitButton>
    </Box>
  );
}

export default MCQ;
