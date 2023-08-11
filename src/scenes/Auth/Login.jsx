import React from 'react'
import './Auth.css'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">تسجيل الدخول</h3>
            <div className="form-group mt-3">
              <label>البريد الإلكتروني</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="أدخل البريد الإلكتروني "
              />
            </div>
            <div className="form-group mt-3">
              <label>كلمة المرور</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="أدخل كلمة المرور"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary submitButton">
                تسجيل الدخول 
              </button>
            </div>
            <p className="signup text-right mt-2">
                 <Link to="/register" className='RegisterLink' > نسيت كلمة المرور ؟ </Link>  
            </p>
            <p className="signup text-right mt-2">
            ليس لديك حساب ؟  <Link to="/register" className='RegisterLink' > إنشاء حساب جديد </Link>  
            </p>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login