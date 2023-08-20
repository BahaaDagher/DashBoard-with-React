import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    const isAuth =useSelector((state) => state.userData.isAuth) 
    const token = JSON.parse(localStorage.getItem('userData')).token;
    if (!isAuth&&!token) {
        return <Navigate to ="/student/login" />
    }
    return children
}
export default Protected

