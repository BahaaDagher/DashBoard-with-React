import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
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

const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex' ,
  alignItems: 'center' ,
  [theme.breakpoints.down("900")]: {
    flexDirection: 'column' ,
  },

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
      width: "80%" ,
      [theme.breakpoints.down("900")]: {
        width: '92%' ,
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
  padding: '10px' ,
  margin: '10px 0' ,
  backgroundColor: Colors.main[3] ,
  color: 'white' ,
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: Colors.main[2],
  },
  [theme.breakpoints.down("900")]: {
    width: '60%' ,
    fontWeight: '100' ,
  },

}));

const Ul = styled("ul")(({ theme }) => ({
  padding: '0' ,
  width:'92%',
  listStyle: 'none' ,
  display:'flex',
  justifyContent:'center' ,
  margin: '0 auto' ,
  [theme.breakpoints.down("900")]: {
    flexDirection: 'column' ,
  },
}));

const Div = styled("div")(({ theme }) => ({
  display:'flex',
  flexDirection:'row',
  justifyContent:'end' , 
  [theme.breakpoints.down("500")]: {
    flexDirection:'column' ,
  },
}));

const Li = styled("li")(({ theme }) => ({
  margin: '10px 5px' ,
  width: '50%' ,
  overflow: 'auto' ,  
  border: `2px solid ${Colors.main[3]}` ,
  padding: '10px' ,
  borderRadius: '5px' ,
  fontWeight: 'bold' ,
  [theme.breakpoints.down("900")]: {
    width: '100%' ,
  },
}));


function MCQ() {

  const [data, setData] = useState([
     {
      question:'',
      answers:[
        
        ]
      }
  
  ]);
  const [currentAnswer ,setCurrentAnswer ] = useState([])


  const handleQuestionChange = (event ,i) => {
    let questions = [...data]
    questions[i].question = event.target.value

    setData(questions)
  };

  const handleAnswerChange = (event ,i) => {
    let currentAns = [...currentAnswer]
    currentAns[i]  = event.target.value
    setCurrentAnswer(currentAns);
  };

  const addAnswer = (i) => {
    if(currentAnswer[i]){

      let questions = [...data]
      questions[i].answers.push(currentAnswer)
      setData(questions)
      let currentAns = [...currentAnswer]
      currentAns[i]  = ''
      setCurrentAnswer(currentAns);
    }
  };
  const handleSubmit = () => {
    console.log('gg');
  };

  const addAnotherQues = () => {
    let questions = [...data]
    questions.push( {
      question:'',
      answers:[
        
        ]
      })

    setData(questions)
  
  };

  return (
    <>
    {data.map((ques ,i)=>{
      
       return(
        <Box border="1px solid #20c997  " margin="20px 0px" padding="10px">
        <ChildBox>
          <H5>  السؤال : {i+1}</H5>
          <div>
            <Input
              type="text"
              placeholder="أدخل السؤال هنا"
              value={ques.question}
              onChange={(e)=>handleQuestionChange(e ,i)}
            />
          </div>
        </ChildBox>
        <ChildBox>
          <H5>   الإجابات :</H5>
          <FlexBox display="flex" justifyContent="space-between">
            <Input
              className="add"
              type="text"
              placeholder="أدخل الاختيار هنا"
              value={currentAnswer[i]}
              onChange={(e)=>handleAnswerChange(e,i)}
            />
            <AddButton onClick={()=>addAnswer(i)}>اضافة اختيار</AddButton>
          </FlexBox>
          <Ul>
            {
              ques.answers.map((ans ,j)=>{
                return <Li key={j}> {j+1}- {ans}</Li>
              })
            }
          </Ul>
        </ChildBox>
        </Box>
       )
       
    })}
    <Div> 
      <SubmitButton onClick={handleSubmit}>ارسال الأسئلة</SubmitButton>
      <SubmitButton onClick={addAnotherQues}>اضافة سؤال اخر</SubmitButton>
    </Div>
    
    
    </>
  );
}

export default MCQ;
