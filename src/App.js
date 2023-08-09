import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import 'bootstrap/dist/js/bootstrap.min.js' ; 
import  Sidebar  from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar'
import  Dashboard  from "./scenes/dashboard/Dashboard"
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import MyResearches from "./scenes/research/MyResearches";
import AddResearch from "./scenes/research/AddResearch";
function App() {
  return (
    <>
      <div className= "app" >
        <Sidebar />
        <main className='content' style={{ overflow:"hidden" }}>
          <Topbar />
          <Box  style={{margin:"10px"}}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/myResearches" element={<MyResearches />} />
              <Route path="/addResearch" element={<AddResearch />} />
            </Routes>
          </Box>
        </main>
      </div>
    </>
  );
}

export default App;
