import styled from '@emotion/styled';
import { Box } from '@mui/material'
import React from 'react'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import CheckIcon from '@mui/icons-material/Check';
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
    padding: '10px' ,
    [theme.breakpoints.down('1200')]: {
        width:"50%" ,
    } , 
    [theme.breakpoints.down('800')]: {
        width:"100%" ,
    }
    
})); 
const H6 = styled("h6")(({ theme }) => ({
    minWidth:"160px" ,   
    margin: '0' ,   
    paddingRight: '10px' ,
}));  

const Answer = ({singleQuestion ,index}) => {
    const ans = singleQuestion.answer ;
    console.log( 'jkjgkjg',singleQuestion.choices[0].choose);
  return (
    <>
        <BoxContainer>
            <h5 style={{fontWeight : "bold"}} ><span>{index+1}</span> -  {singleQuestion.name}</h5>
            <BoxAnswer>
           
                {
                singleQuestion.choices ?  
                singleQuestion.choices.map((choice,i)=>{
                    return(  
                    <Item>
                        {
                            (singleQuestion.answer===i+1) ? 
                            (<CheckIcon sx={{fontSize:"20px" , color : Colors.main[1] }} />) :
                            (<FiberManualRecordOutlinedIcon sx={{fontSize:"20px" }} />)
                        }
                        <H6>{choice.choose } </H6>
                        </Item>)

                })
                : ''
                
                } 
            
             
            </BoxAnswer>
        </BoxContainer>
    </>
  )
}

export default Answer