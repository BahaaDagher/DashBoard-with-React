import React, { useEffect, useState } from 'react'
import './Auth.css'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/slices/userSlice';

const Login = () => {

  const [formData, setFormData] = useState({email: "01472589632",password: "12345678"});

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuth =useSelector((state) => state.userData.isAuth ) 
  const userData =useSelector((state) => state.userData.userData ) 

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (isAuth) {
      localStorage.setItem('userData', JSON.stringify(userData))
      navigate('/student/dashboard')
    }
  }, [isAuth])
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(formData))
  };
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">تسجيل الدخول</h3>
            <div className="form-group mt-3">
              <label> رقم الهاتف</label>
              <input
                type="number"
                name='email'
                value={'01472589632'}
                className="form-control mt-1"
                placeholder="أدخل  رقم الهاتف "
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>كلمة المرور</label>
              <input
                type="password"
                name='password'
                value={'12345678'}
                className="form-control mt-1"
                placeholder="أدخل كلمة المرور"
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary submitButton">
                تسجيل الدخول 
              </button>
            </div>
            <p className="signup text-right mt-2">
                 <Link to="/student/register" className='RegisterLink' > نسيت كلمة المرور ؟ </Link>  
            </p>
            <p className="signup text-right mt-2">
            ليس لديك حساب ؟  <Link to="/student/register" className='RegisterLink' > إنشاء حساب جديد </Link>  
            </p>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login