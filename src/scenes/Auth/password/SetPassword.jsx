import React from 'react'
import "../Auth.css"
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title"> إعادة تعيين كلمة المرور  </h3>
            <div className="form-group mt-3">
              <label>كلمة المرور الجديدة </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="أدخل كلمة المرور الجديدة "
              />
            </div>
            <div className="form-group mt-3">
              <label>تأكيد كلمة المرور  </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="أكد كلمة المرور  "
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