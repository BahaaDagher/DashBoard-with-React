import React, { useEffect, useState } from 'react'
import "../Auth.css"
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sendOtp } from '../../../store/slices/userSlice'
const Login = () => {
  const userData = JSON.parse(localStorage.getItem('registeData'))
  const dispatch = useDispatch()



  const [formData, setFormData] = useState({
    otp: "",
    orderId:userData.order_id

  });

  const navigate = useNavigate()
  const isOtpSuccess =useSelector((state) => state.userData.isOtpSuccess ) 
 
  useEffect(() => {

    if (isOtpSuccess) {
      navigate('/login')
    }

  }, [isOtpSuccess,userData])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendOtp(formData))

    
    // !isAuth ? alert('failed') : ""

 
  };
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title"> التحقق من رمز ال OTP  </h3>
            <p className = "DontWorry"> لقد تم ارسال كود مكون من اربع ارقام الي رقم الهاتف الذي تم ادخاله  </p>
            <div className="form-group mt-3">
              <label> رمز ال OTP</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="أدخل  رمز ال OTP  "
                onChange={handleChange}
                name='otp'
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary submitButton" onClick={(e)=>handleSubmit(e)}>
                  تأكيد   
              </button>
            </div>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login