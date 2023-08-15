import styled from '@emotion/styled';
import { Box } from '@mui/material'
import React from 'react'
import { Colors } from '../../theme';
import { useState } from 'react';
import MCQ from './MCQ';
import Picture from './Picture';
import  Title  from '../../components/Title';

const Box1 = styled(Box)(({ theme }) => ({
    display : "flex" ,
    alignItems : "center" ,
    justifyContent : "center" ,
    flexWrap : "wrap" ,
}));
const TabBox = styled(Box)(({ theme }) => ({
    width : "40%" ,
    textAlign : "center" ,
    backgroundColor: Colors.main[6],
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "200px",
    color: Colors.main[1],
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        cursor: "pointer",
        color: Colors.main[2],
    },
    fontWeight : "bold" ,
    fontSize : "17px" ,
    [theme.breakpoints.down("800")]: {
        width : "80%" ,
        margin: "10px",
    },
}));
const Box2 = styled(Box)(({ theme }) => ({

    maxHeight : `calc(100vh - ${Colors.height} - 170px) ` ,
    padding : "20px" ,
    overflowY : "auto" ,
    [theme.breakpoints.down("800")]: {
        maxHeight : `calc(100vh - ${Colors.height} - 225px) ` ,
      },
}));
const HomeWorks = () => {
    const [tab , setTab] = useState("");

  return (
    <>
        <Title>حل الواجبات </Title>
        <Box>
            <Box1>
                <TabBox onClick={()=>setTab("mcq")}>كتابة سؤال</TabBox>
                <TabBox onClick={()=>setTab("picture")}>أدخل بالصورة</TabBox>
            </Box1>
            <Box2>
                {
                    tab === "picture" ?  <Picture/> : <MCQ/>
                }
            </Box2>
        </Box>
    </>
  )
}

export default HomeWorks