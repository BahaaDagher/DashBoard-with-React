import React from 'react'
import "../Auth.css"
import {Link} from 'react-router-dom'
const Login = () => {
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
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary submitButton">
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