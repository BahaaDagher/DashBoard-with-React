import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/Dashboard";
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import MyResearches from "./scenes/research/MyResearches";
import AddResearch from "./scenes/research/AddResearch";
import Login from "./scenes/Auth/Login";
import Register from "./scenes/Auth/Register";
import ForgetPassword from "./scenes/Auth/password/ForgetPassword";
import OTPCode from "./scenes/Auth/password/OTPCode";
import SetPassword from "./scenes/Auth/password/SetPassword";
import IframeSite from "./scenes/iframe/IframeSite";
import MyAnswers from "./scenes/Answers/MyAnswers";
import HomeWorks from "./scenes/homeWorks/HomeWorks";
import { useSelector } from "react-redux";
import EditProfile from "./scenes/editProfile/EditProfile";
import { Chat } from "@mui/icons-material";
import Protected from "./Protected";
import Tests from "./scenes/tests/Tests";
import AddProjects from "./scenes/projects/AddProjects";
import MyProjects from "./scenes/projects/MyProjects";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"));
  const { pathname } = useLocation();
  const navigate = useNavigate()
  // useEffect(() => {
  //   if ( pathname == '/') {
  //     window.location.href='https://learninghouse.cloudy.mohamedmansi.com/home/'
  //   }
  // },[])
  

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/student/login" element={<Login />} />
          <Route path="/student/register" element={<Register />} />
          <Route path="/student/forgetPassword" element={<ForgetPassword />} />
          <Route path="/student/OTP" element={<OTPCode />} />
          <Route path="/student/setPassword" element={<SetPassword />} />
          <Route path="/*" element={<h1>عذرا لا يوجد صفحة هنا</h1>} />

          <Route
            path="/"
            element={
              <Protected>
                <LayoutsWithNavbar />
              </Protected>
            }
          >
            <Route
              path="student/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="student/editProfile"
              element={
                <Protected>
                  {" "}
                  <EditProfile />
                </Protected>
              }
            />
            <Route
              path="student/AddProjects"
              element={
                <Protected>
                  {" "}
                  <AddProjects />
                </Protected>
              }
            />
            <Route
              path="student/myProjects"
              element={
                <Protected>
                  {" "}
                  <MyProjects />
                </Protected>
              }
            />
            <Route
              path="student/tests"
              element={
                <Protected>
                  {" "}
                  <Tests />
                </Protected>
              }
            />
            <Route
              path="student/myResearches"
              element={
                <Protected>
                  {" "}
                  <MyResearches />{" "}
                </Protected>
              }
            />
            <Route
              path="student/addResearch"
              element={
                <Protected>
                  {" "}
                  <AddResearch />{" "}
                </Protected>
              }
            />
            <Route
              path="student/myAnswers"
              element={
                <Protected>
                  {" "}
                  <MyAnswers />{" "}
                </Protected>
              }
            />
            <Route
              path="student/homeWorks"
              element={
                <Protected>
                  {" "}
                  <HomeWorks />{" "}
                </Protected>
              }
            />
            <Route
              path="student/scienceHome"
              element={
                <Protected>
                  <IframeSite url="https://www.baetiy.com/" title="بيت العلم" />
                </Protected>
              }
            />
            <Route
              path="student/sciencePlatform"
              element={
                <Protected>
                  {" "}
                  <IframeSite
                    url="https://www.el3elm.com/"
                    title="منصة العلم"
                  />{" "}
                </Protected>
              }
            />
            <Route
              path="student/booksAnswers"
              element={
                <Protected>
                  <IframeSite
                    url="https://www.hululktaab.com/"
                    title="حلول الكتب"
                  />{" "}
                </Protected>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

function LayoutsWithNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <>
      <Sidebar
        phone={phone}
        isCollapsed={isCollapsed}
        mobileOpen={mobileOpen}
        setIsCollapsed={setIsCollapsed}
        setMobileOpen={setMobileOpen}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
      <main className="content" style={{ overflow: "hidden" }}>
        <Topbar
          phone={phone}
          isCollapsed={isCollapsed}
          mobileOpen={mobileOpen}
          setIsCollapsed={setIsCollapsed}
          setMobileOpen={setMobileOpen}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
        />
        <Box style={{ margin: "10px" }}>
          <Outlet />
        </Box>
      </main>
    </>
  );
}

export default App;
