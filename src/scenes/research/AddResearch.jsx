import styled from "@emotion/styled";
import React, { useState } from "react";
import { Colors } from "../../theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendResearch } from "../../store/slices/researchesSlice";
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

const Input = styled("input")(({ theme }) => ({
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  "&:hover, &:focus": {
    outlineColor: Colors.main[3] , 
    borderColor: Colors.main[3] , 
  },
  transition: "all 0.3s ease-in-out" , 
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

const options = [
  "رياضة",
  "عربي",
  "فيزياء",
  "كيمياء",
  "تاريخ",
];

const AddResearch = () => {
  const [title, setTitle] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const isResearchReceive = useSelector((state) => state.researchesData.isResearchReceive ) ; 
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", title, selectedOption);
    dispatch(sendResearch({name : title , subjecet_id : 2})) ; 
    if (isResearchReceive) {
      Swal.fire({
        text: 'تم ارسال طلب البحث، و سيتم ارسال البحث في خلال 3 ايام',
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        text: 'حذث خطأ ما برجاء اعادة المحاولة',
      })
    }
  };

  return (
    <>
      <Title>إضافة بحث :</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label>عنوان البحث</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={(e) => e.target.classList.add("active")}
            onBlur={(e) => e.target.classList.remove("active")}
          />
          <Label>  مشرف البحث </Label>
          <Input
            type="text"
            value={supervisor}
            onChange={(e) => setSupervisor(e.target.value)}
            onFocus={(e) => e.target.classList.add("active")}
            onBlur={(e) => e.target.classList.remove("active")}
          />

          <Label>  المادة</Label>
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <Option value="">اختر اسم المادة </Option>
            {options.map((option, index) => (
              <Option key={index} value={option}>
                {option}
              </Option>
            ))}
          </Select>

          <Button type="submit">إضافة</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default AddResearch;
