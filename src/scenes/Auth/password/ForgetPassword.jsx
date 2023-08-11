import React from 'react'

import "../Auth.css"
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title"> نسيت كلمة المرور ؟؟ </h3>
            <p className = "DontWorry">   لا تقلق سوف نرسل لك رمز التعيين  </p>
            <div className="form-group mt-3">
              <label> رقم الهاتف</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="أدخل  رقم الهاتف "
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary submitButton">
                 اعادة تعيين كلمة المرور 
              </button>
            </div>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login