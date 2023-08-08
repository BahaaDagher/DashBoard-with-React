import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import 'bootstrap/dist/js/bootstrap.min.js' ; 
import  Sidebar  from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar'
import  Dashboard  from "./scenes/dashboard/Dashboard"
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <div className= "app">
        <Sidebar />
        <main className='content'>
          <Topbar />
          <Box padding="20px">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Box>
        </main>
      </div>
    </>
  );
}

export default App;
