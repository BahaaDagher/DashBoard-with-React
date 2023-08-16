import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Colors } from "../../theme";
import { Box } from "@mui/material";
import TestsData from "./TestsData";
import Answer from "./Answer";
import Swal from "sweetalert2";


const FormContainer = styled("div")(({ theme }) => ({
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #e4e4e4",
  borderRadius: "5px",
  boxShadow: "0 2px 4px #00a4a97d",
}));

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

const Label = styled("label")(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "17px",
}));


const Select = styled("select")(({ theme }) => ({
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  transition: "border-color 0.3s",
  "&:hover, &:focus": {
    outlineColor: Colors.main[3] , 
    borderColor: Colors.main[3] , 
  },
}));
const Option = styled("option")(({ theme }) => ({
}))

const Title = styled("h1")(({ theme }) => ({
  padding : "10px ",
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
  maxWidth: "1000px",
}));

const BoxContainer = styled(Box)(({ theme }) => ({
  margin : "10px auto" ,
  maxHeight : `calc(100vh - ${Colors.height} - 260px) ` ,
  overflow : "auto" ,
})); 



const Tests = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);
  const [Questions, setQuestions] = useState([]);


  useEffect(() => {
    const newOptions = TestsData.map((test) => test.name);
    setOptions(newOptions);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    var find = false  ; 
    TestsData.map((test) => {
      if (test.name === selectedOption) {
        setQuestions(test.questions);
        find = true ;
      }
    });
    if (!find) {
      Swal.fire('من فضلك قم بإختيار نوع الإختبار')
    }
  };

  return (
    <>
      <Title> الإختبارات المركزية  :</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label>   الإختبار</Label>
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <Option value="">اختر نوع الإختبار </Option>
            {options.map((option, index) => (
              <Option key={index} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          <Button type="submit">اختيار</Button>
        </Form>
      </FormContainer>
      <BoxContainer sx = {{}}>
        {Questions.map((question, i ) => (
            <Answer singleQuestion={question}  key = {i} />
        ))}
    </BoxContainer>     

    </>
  );
};

export default Tests;
