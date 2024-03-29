import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Colors } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { getExamQuestions, getExams } from "../../store/slices/examsSlice";
import  Title  from "../../components/Title";
import { Box } from "@mui/material";
import Answer from "./Answer";


const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
 
}));


const Button = styled("button")(({ theme }) => ({
  padding: "10px 30px",
  backgroundColor: Colors.main[3] ,
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Colors.main[2],
  },
  transition: "background-color 0.3s",
  margin: "auto",
  fontWeight: "bold",
  [theme.breakpoints.down("900")]: {
    width:"90%" ,
  },
}));


const BoxParent = styled(Box)(({ theme }) => ({
  height: `calc(100%  - 60px) ` ,
  overflow: "auto",
}));

const ParenButton = styled(Box)(({ theme }) => ({
  width:"25%" , 
  textAlign :"center" ,
  marginBottom : "10px" , 
  [theme.breakpoints.down("900")]: {
    width:"50%" ,
  },
  [theme.breakpoints.down("500")]: {
    width:"100%" ,
  },

}));





const Exams = () => {
  const [selectedExam, setSelectedExam] = useState("");
  const [Questions, setQuestions] = useState([]);

  const Exams = useSelector((state) => state.examsData.Exams);
  const ExamQuestions = useSelector((state) => state.examsData.ExamQuestions);


  const dispatch  = useDispatch() ; 
  useEffect(() => {
    dispatch(getExamQuestions(selectedExam))
  }, [selectedExam]);


  useEffect(() => {
    dispatch(getExams())
  }, []);


  return (
    <>
      <Title> الإختبارات المركزية  </Title>
      <BoxParent>
        <BoxContainer>
          {Exams.map((exam, index) => (
            <ParenButton style= {{}} key = {index}>
              <Button key={index} onClick={() => setSelectedExam(exam.id)}>{exam.name}</Button>
            </ParenButton>
          ))}
        </BoxContainer>
        <Box>
          {ExamQuestions.map((question, i ) => (
              <Answer singleQuestion={question}  key = {i} />
          ))}
        </Box>    
      </BoxParent>

    </>
  );
};

export default Exams;
