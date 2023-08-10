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
  
}));

const BoxContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display : "flex",
  justifyContent : "center" ,
  alignItems : "center" ,
  textAlign : "center" ,
  maxHeight: "calc(100vh - 66px)",
  overflow: "auto",
  [theme.breakpoints.down("800")]: {
    flexDirection : "column" ,
  },

}));
const LinkStyle = styled(Link)(({ theme }) => ({
  textDecoration: "none" , 
  fontSize: "20px"  , 
  color  :Colors.main[1] ,
  "&:hover": {
    color: Colors.main[2],
  },
  [theme.breakpoints.down("500")]: {
    fontSize: "15px"  , 
  },
}));
const Dashboard = () => {
  return (
    <BoxContainer >
      <Box width="99%" margin="auto">
        <Tab><LinkStyle to = "/">طلبات البحوث</LinkStyle></Tab>
        <Tab><LinkStyle to = "/">بوت بيت العلم</LinkStyle></Tab>
        <Tab><LinkStyle to = "/">بيت العلم بدون اعلانات</LinkStyle></Tab>
        <Tab><LinkStyle to = "/">حلول الكتب</LinkStyle></Tab>
      </Box>
      <Box width="99%" margin="auto">
        <Tab className='first'><LinkStyle to = "/" >حل الواجبات</LinkStyle></Tab>
        <Tab><LinkStyle to = "/">شات الطلاب</LinkStyle></Tab>
        <Tab><LinkStyle to = "/">منصة العلم بدون اعلانات</LinkStyle></Tab>
        <Tab><LinkStyle to = "/">الاختبارات المركزية</LinkStyle></Tab>
      </Box>
    </BoxContainer>
  )
}

export default Dashboard