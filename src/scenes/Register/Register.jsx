import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">إنشاء حساب</h1>
          <div className="text-center">
          لديك حساب بالفعل  ؟ {" "}
            <Link className="LoginLink" to = "/login">
              تسجيل الدخول 
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>الإسم</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="أدخل الاسم ثنائي"
            />
          </div>
          <div className="form-group mt-3">
            <label>البريد الإلكتروني </label>
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
          <div className="form-group mt-3">
            <label>تأكيد كلمة المرور</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="تأكيد كلمة المرور "
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary RegisterButton">
              إنشاء حساب
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Register