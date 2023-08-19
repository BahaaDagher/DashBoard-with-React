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
}));



const Exams = () => {
  const [selectedExam, setSelectedExam] = useState("");
  const [Questions, setQuestions] = useState([]);

  const Exams = useSelector((state) => state.examsData.Exams);
  const ExamQuestions = useSelector((state) => state.examsData.ExamQuestions);


  const dispatch  = useDispatch() ; 
  useEffect(() => {
    dispatch(getExams())
    dispatch(getExamQuestions(1))
    console.log( "Exam", Exams)
    console.log( "ExamQuestions", ExamQuestions)
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <>
      <Title> الإختبارات المركزية  :</Title>
      <BoxContainer>
        {Exams.map((exam, index) => (
          <div style= {{width:"25%" , textAlign :"center" , marginBottom : "10px"}}>
            <Button key={index} onClick={() => setSelectedExam(exam.id)}>{exam.name}</Button>
          </div>
        ))}
      </BoxContainer>
      {/* <Box>
        {ExamQuestions.map((question, i ) => (
            <Answer singleQuestion={question}  key = {i} />
        ))}
      </Box>     */}

    </>
  );
};

export default Exams;
