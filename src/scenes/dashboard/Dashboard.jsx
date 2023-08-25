import styled from '@emotion/styled';
import { Box, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { Colors } from '../../theme';

const Tab = styled("div")(({ theme }) => ({
  backgroundColor: Colors.main[6],
  margin: "20px",
  padding: "40px 20px",
  borderRadius: "10px",
  minWidth: "200px",
  transition: "all 0.3s ease-in-out", 
  "&:hover": {
    cursor: "pointer",
    backgroundColor: Colors.main[8],
  },
}));
const BoxContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display : "flex",
  justifyContent : "space-around" ,
  maxHeight: "100%",
  overflow: "auto",
  alignItems : "center" ,
  textAlign : "center" ,
  fontWeight : "bold" ,
  flexWrap : "wrap" , 
}));
const LinkStyle = styled(Link)(({ theme }) => ({
  width: "40%",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
  color: Colors.main[1],
  "&:hover": {
    color: Colors.main[2],
  },
  [theme.breakpoints.down("900")]: {
    width: "100%",
  },
  [theme.breakpoints.down("500")]: {
    fontSize: "15px",
  },
}));

const Dashboard = () => {
  return (
    <BoxContainer >
        <LinkStyle to = "/student/AddResearch"> <Tab> طلبات البحوث </Tab></LinkStyle>
        <LinkStyle to = "/student/AddProjects" ><Tab > طلبات المشاريع </Tab></LinkStyle>
        <LinkStyle to = "/student/scienceHomeBot"><Tab> بوت بيت العلم </Tab></LinkStyle>
        <LinkStyle to = "/student/homeWorks" ><Tab >حل الواجبات </Tab></LinkStyle>
        <LinkStyle to = "/student/exams"> <Tab>الاختبارات المركزية</Tab></LinkStyle>
        <LinkStyle to = "/student/scienceHome"><Tab > بيت العلم بدون اعلانات </Tab></LinkStyle>
        <LinkStyle to = "/student/StudentsChat"><Tab> شات الطلاب </Tab></LinkStyle>
        <LinkStyle to = "/student/classChat"><Tab> شات الصف </Tab></LinkStyle>
    </BoxContainer>
  )
}

export default Dashboard