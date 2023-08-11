import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import 'bootstrap/dist/js/bootstrap.min.js' ; 
import  Sidebar  from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar'
import  Dashboard  from "./scenes/dashboard/Dashboard"
import { Outlet, Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import MyResearches from "./scenes/research/MyResearches";
import AddResearch from "./scenes/research/AddResearch";
import  Login  from "./scenes/Auth/Login";
import Register from "./scenes/Auth/Register";
import ForgetPassword from "./scenes/Auth/password/ForgetPassword";
import OTPCode from "./scenes/Auth/password/OTPCode";
import SetPassword from "./scenes/Auth/password/SetPassword";
import IframeSite from "./scenes/iframe/IframeSite";
import MyAnswers from "./scenes/Answers/MyAnswers";
import HomeWorks from "./scenes/homeWorks/HomeWorks";
function App() {
  return (
    <>
      <div className= "app" >
      <Routes>
        <Route path= "/" element= {<LayoutsWithNavbar/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/myResearches" element={<MyResearches />} />
          <Route path="/addResearch" element={<AddResearch />} />
          <Route path="/myAnswers" element={<MyAnswers />} />
          <Route path="/homeWorks" element={<HomeWorks />} />
          <Route path="/scienceHome" element={<IframeSite url = "https://www.baetiy.com/" title = "بيت العلم"/>} />
          <Route path="/sciencePlatform" element={<IframeSite url = "https://www.el3elm.com/" title = "منصة العلم"/>} />
          <Route path="/booksAnswers" element={<IframeSite url = "https://www.hululktaab.com/" title = "حلول الكتب"/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgetPassword" element={<ForgetPassword/>} />
        <Route path="/OTP" element={<OTPCode/>} />
        <Route path="/setPassword" element={<SetPassword/>} />
        <Route path="*" element={<h1>عذرا لا يوجد صفحة هنا</h1>} />
      </Routes>
      </div>
    </>
  );
}

function LayoutsWithNavbar() {
  return (
    <>
        <Sidebar />
        <main className='content' style={{ overflow:"hidden" }}>
          <Topbar />
          <Box  style={{margin:"10px"}}>
            <Outlet />
          </Box>
        </main>
    </>
  )
}

export default App;
