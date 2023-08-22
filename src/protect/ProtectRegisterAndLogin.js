import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectRegisterAndLogin = ({children}) => {
    const token = JSON.parse(localStorage.getItem('userData'));
    if (token) {
        return <Navigate to ="/student/dashboard" />
    }
    return children
}
export default ProtectRegisterAndLogin

