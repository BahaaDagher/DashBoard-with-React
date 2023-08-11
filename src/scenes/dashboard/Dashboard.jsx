import styled from '@emotion/styled';
import { Box, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { Colors } from '../../theme';

const Tab = styled("div")(({ theme }) => ({
  backgroundColor: Colors.main[6],
  margin: "30px",
  padding: "20px",
  borderRadius: "10px",
  minWidth: "200px",
  "&.first": {
    [theme.breakpoints.down("800")]: {
      marginTop: "0px",
    },
  } ,
  [theme.breakpoints.down("800")]: {
    margin: "30px 10px",
  },
  "&:hover": {
    cursor: "pointer",
  },
  
  
}));

const BoxContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display : "flex",
  justifyContent : "center" ,
  alignItems : "center" ,
  textAlign : "center" ,
  maxHeight: `calc(100vh - ${Colors.height} )`,
  overflow: "auto",
  fontWeight : "bold" ,
  [theme.breakpoints.down("800")]: {
    flexDirection : "column" ,
  },

}));
const LinkStyle = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "20px",
  color: Colors.main[1],
  "&:hover": {
    color: Colors.main[2],
  },
  [theme.breakpoints.down("500")]: {
    fontSize: "15px",
  },
}));
const Dashboard = () => {
  return (
    <BoxContainer >
      <Box width="99%" margin="auto">
        <LinkStyle to = "/AddResearch"> <Tab> طلبات البحوث </Tab></LinkStyle>
        <LinkStyle to = "/"><Tab> بوت بيت العلم </Tab></LinkStyle>
        <LinkStyle to = "/scienceHome"><Tab> بيت العلم بدون اعلانات </Tab></LinkStyle>
        <LinkStyle to = "/booksAnswers"><Tab> حلول الكتب </Tab></LinkStyle>
      </Box>
      <Box width="99%" margin="auto">
        <LinkStyle to = "/homeWorks" ><Tab className='first'>حل الواجبات </Tab></LinkStyle>
        <LinkStyle to = "/"><Tab> شات الطلاب </Tab></LinkStyle>
        <LinkStyle to = "/sciencePlatform"> <Tab>منصة العلم بدون اعلانات </Tab></LinkStyle>
        <LinkStyle to = "/"> <Tab>الاختبارات المركزية</Tab></LinkStyle>
      </Box>
    </BoxContainer>
  )
}

export default Dashboard