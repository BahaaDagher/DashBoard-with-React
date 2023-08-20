import React, { useEffect } from 'react'
import Answer from './Answer'
import { Box } from '@mui/material'
import { Colors } from '../../theme'
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../store/slices/questionsSlice';

const BoxContainer = styled(Box)(({ theme }) => ({
    maxHeight : `calc(100vh - ${Colors.height})` ,
    overflow : "auto" ,
})); 

const MyAnswers = () => {

    const Questions = useSelector(state => state.questionsData.questions) ;
    const dispatch = useDispatch() ;
    useEffect(()=>{
        dispatch(getQuestions()) ; 
        console.log(Questions);
    },[]) 

    // const Questions =  [
    //     {
    //         id : 1 , 
    //         question :  "من هو رئيس جمهورية مصر الحالي  ؟",
    //         answers :{
    //             answer1 : "محمد رياض",
    //             answer2 : "عبد الفتاح السيسي",
    //             answer3 : "محمد مرسي",
    //             answer4 : " عبد الناصر",
    //         } , 
    //         correctAnswer : "عبد الفتاح السيسي" ,
    //     } , 
    //     {
    //         id : 2 , 
    //         question :  "ما هي عاصمة مصر  ؟",
    //         answers :{
    //             answer1 : "القاهرة",
    //             answer2 : "الإسكندرية",
    //             answer3 : "الجيزة",
    //             answer4 : "المنصورة",
    //         }, 
    //         correctAnswer : "القاهرة" ,
    //     }, 
    //     {
    //         id : 3 ,
    //         question :  "ما هو لون السماء  ؟",
    //         answers :{
    //             answer1 : "أصفر",
    //             answer2 : "أحمر",
    //             answer3 : "أخضر",
    //             answer4 : "أزرق",
    //         },
    //         correctAnswer : "أزرق" ,
    //     }
    // ]
  return (
    <>
    <BoxContainer sx = {{}}>
        {Questions.map((question,index) => (
            <Answer singleQuestion={question} index={index} />
        ))}
    </BoxContainer>
    </>
  )
}

export default MyAnswers