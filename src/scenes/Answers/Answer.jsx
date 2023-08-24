import styled from '@emotion/styled';
import { Box } from '@mui/material'
import React from 'react'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Colors } from '../../theme'

const BoxContainer = styled(Box)(({ theme }) => ({
    padding : '20px' ,
    margin : '10px' ,
    backgroundColor : Colors.main[9] ,
    color : Colors.main[1] ,
    [theme.breakpoints.down('500')]: {
        margin : '0' ,
        padding : '10px' ,
    }
    
}));  
const BoxAnswer = styled(Box)(({ theme }) => ({
    padding: '20px' ,
    color : "#000" ,
    display:"flex" , 
    alignItems:"center" , 
    justifyContent : "center" , 
    flexWrap:"wrap" ,
})); 
const Item = styled(Box)(({ theme }) => ({
    display:"flex" ,
    alignItems:"center" ,
    justifyContent : "center" ,
    textAlign:"center" ,
    padding: '10px' ,
    margin: '10px' ,
    [theme.breakpoints.down('1200')]: {
        width:"50%" ,
    } , 
    [theme.breakpoints.down('800')]: {
        width:"100%" ,
    } , 
    color : "#fff" ,
    backgroundColor : "#198754" ,
    "&.wrong" : {
        backgroundColor : "#dc3545" ,
    }
})); 
const H6 = styled("h6")(({ theme }) => ({
    minWidth:"160px" ,   
    margin: '0' ,   
    paddingRight: '10px' ,
}));  

const Answer = ({singleQuestion ,index}) => {
  return (
    <>
        <BoxContainer style={{ wordWrap:"break-word"}}>
            <h5 style={{fontWeight : "bold"}} ><span>{index+1}</span> -  {singleQuestion.name}</h5>
        {
            singleQuestion.name == null ?
            singleQuestion.answer_image!= "" ?
            <img
                src= {singleQuestion.answer_image}
                alt="Selected"
                style={{ maxWidth: '100%', maxHeight: '300px' }}
            /> : <h5>لم تتم الاجابة على الصورة المرفوعه بعد  </h5> 
            : singleQuestion.status != 0 ? 
             <>
                <BoxAnswer>
                    {singleQuestion.options.map((option , index) => {
                        return (
                            option.name != null ? (
                            option.isCorrect==true  ? 
                            <Item>
                                <CheckIcon sx={{fontSize:"30px"  }} />
                                <H6>{option.name } </H6>
                            </Item>  : 
                            <Item className = "wrong">
                                <CloseOutlinedIcon sx={{fontSize:"30px" }} />
                                <H6>{option.name } </H6>
                            </Item> 
                            ) : null
                        )
                    })}
                </BoxAnswer>
            </> : <h5>لم يتم الاجابة على السؤال بعد  </h5>
        }
            </BoxContainer>
    </>
  )
}

export default Answer