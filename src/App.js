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
import  Login  from "./scenes/Login/Login";
import Register from "./scenes/Register/Register";
function App() {
  return (
    <>
      <div className= "app" >
      <Routes>
        <Route path= "/" element= {<LayoutsWithNavbar/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/myResearches" element={<MyResearches />} />
          <Route path="/addResearch" element={<AddResearch />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
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
