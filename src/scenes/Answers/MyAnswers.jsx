import React, { useEffect } from 'react'
import Answer from './Answer'
import { Box } from '@mui/material'
import { Colors } from '../../theme'
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../store/slices/questionsSlice';
import  Title  from '../../components/Title';

const BoxContainer = styled(Box)(({ theme }) => ({
    maxHeight : `calc(100vh - ${Colors.height} - ${Colors.mobile} - 70px)` ,
    overflow : "auto" ,
})); 

const MyAnswers = () => {

    const Questions = useSelector(state => state.questionsData.questions) ;
    const dispatch = useDispatch() ;
    useEffect(()=>{
        dispatch(getQuestions()) ; 
        console.log(Questions);
    },[]) 
  return (
    <>
    {
        Questions.length == 0 ? <Title>لم تسأل اي سؤال بعد    </Title> :
        <div>
        <Title>حلولي </Title>
        <BoxContainer sx = {{}}>
            {Questions.map((question,index) => (
                <Answer singleQuestion={question} index={index} />
            ))}
        </BoxContainer>
        </div>
    }
    
    </>
  )
}

export default MyAnswers






