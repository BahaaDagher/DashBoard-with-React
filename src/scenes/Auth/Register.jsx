import React from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getLevels } from '../../store/slices/levelSlice'
import { getpackages } from '../../store/slices/packageSlice'


const Register = () => {
  const levels = useSelector((state) => state.levelsList.levels )
  const pacakages = useSelector((state) => state.packagesList.packages)


  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getLevels())
    dispatch(getpackages())
    
    
  },[])

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
          <label> المستوي الدراسي </label>
            <select className="form-select" aria-label="Default select example">
              <option >اختر المستوي الدراسي</option>
              {levels.map((level)=>{
                return  <option >{level.name}</option>
              })}
              
            </select>
          </div>
          <div className="form-group mt-3">
          <label>  الباقة الشهرية </label>
            <select className="form-select" aria-label="Default select example">
              <option >اختر  الباقة</option>
              {pacakages.map((pacakage)=>{
                return  <option >{pacakage.name}</option>
              })}
              
            </select>
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
            <button type="submit" className="btn btn-primary submitButton">
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