import React from 'react'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getLevels } from '../../store/slices/levelSlice'
import { getpackages } from '../../store/slices/packageSlice'
import { useState } from 'react'
import { userRegister } from '../../store/slices/userSlice'


const Register = () => {
  const levels = useSelector((state) => state.levelsList.levels )
  const pacakages = useSelector((state) => state.packagesList.packages)


  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getLevels())
    dispatch(getpackages())
  },[])
  
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    level_id: "",
    package_id: "",
  });

  const navigate = useNavigate()
  const registeData =useSelector((state) => state.userData.registerData ) 
  const isRegisterSuccess =useSelector((state) => state.userData.isRegisterSuccess )
  
  useEffect(() => {
    if (isRegisterSuccess) {
      localStorage.setItem('registeData', JSON.stringify(registeData))
      navigate('/otp')
    }

  }, [isRegisterSuccess])
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userRegister(formData))
    console.log(registeData);
  };
  return (
    <>
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">إنشاء حساب</h1>
          <div className="text-center">
          لديك حساب بالفعل  ؟ {" "}
            <Link className="RegisterLink" to = "/student/login" >
              تسجيل الدخول 
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>الإسم</label>
            <input
              
              type="text"
              className="form-control mt-1"
              placeholder="أدخل الاسم ثنائي"
              onChange={handleChange}
              name='name'
            />
          </div>
          <div className="form-group mt-3">
            <label>البريد الإلكتروني </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="أدخل البريد الإلكتروني "
              onChange={handleChange}
              name='email'
            />
          </div>
          <div className="form-group mt-3">
            <label> رقم الهاتف </label>
            <input
              type="phone"
              className="form-control mt-1"
              placeholder="أدخل رقم الهاتف "
              onChange={handleChange}
              name='phone'
            />
          </div>
          <div className="form-group mt-3">
          <label> المستوي الدراسي </label>
            <select className="form-select" aria-label="Default select example"
            onChange={handleChange}
            name='level_id'>
              <option value={''}>اختر المستوي الدراسي</option>
              {levels.map((level)=>{
                return  <option value={level.id} >{level.name}</option>
              })}
              
            </select>
          </div>
          <div className="form-group mt-3">
          <label>  الباقة الشهرية </label>
            <select className="form-select" aria-label="Default select example"
            onChange={handleChange}
            name='package_id'>
              <option value={''}>اختر  الباقة</option>
              {pacakages.map((pacakage)=>{
                return  <option value={pacakage.id}>{pacakage.name}</option>
              })}
              
            </select>
          </div>
          <div className="form-group mt-3">
            <label>كلمة المرور</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="أدخل كلمة المرور"
              onChange={handleChange}
              name='password'
            />
          </div>
          <div className="form-group mt-3">
            <label>تأكيد كلمة المرور</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="تأكيد كلمة المرور "
              name='confirmPass'
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary submitButton" onClick={(e)=>handleSubmit(e)}>
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