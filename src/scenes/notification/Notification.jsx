import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import Title from '../../components/Title';
import { Colors } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../../store/slices/notificationSlice';
import { useState } from 'react';

const BoxContainer = styled(Box)(({ theme }) => ({
    maxHeight : `calc(100%  - 60px)` ,
    overflow : "auto" ,
})); 

const NotifyContainer = styled(Box)(({ theme }) => ({
    padding : '20px' ,
    margin : '10px' ,
    backgroundColor : Colors.main[9] ,
    color : Colors.main[1] ,
    [theme.breakpoints.down('500')]: {
        margin : '0' ,
        padding : '10px' ,
    }
    
})); 

const Notification = () => {
    const [Notifications, setNotifications] = useState([]) ;
    const dispatch = useDispatch() ;
    const notifications  = useSelector(state => state.notificationData.notifications) ;
    
    useEffect(()=> {
        if (notifications.status == true) {
            setNotifications(notifications.data.levels)
        }
    }, [notifications])
    useEffect(()=>{
        dispatch(getNotifications())
    }, [])
    
  return (
    <>
        <div style={{height :"100%"}}>
            <Title>تنبيهاتي </Title>
            <BoxContainer>
                {Notifications.map((item,index) => (
                    <NotifyContainer key={index}>
                        <h5 style={{fontWeight : "bold"}} >{item.name}</h5>
                    </NotifyContainer>
                ))}
            </BoxContainer>
        </div>
    </>
  )
}

export default Notification