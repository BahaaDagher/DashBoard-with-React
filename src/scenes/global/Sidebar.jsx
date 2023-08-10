import React from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import "react-pro-sidebar/dist/css/styles.css"
import {Box , Drawer, IconButton ,Typography , useMediaQuery, useTheme} from '@mui/material'
import {Link} from 'react-router-dom'
import {Colors} from '../../theme'
import { useState } from 'react'
import styled from '@emotion/styled'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  return (
    <MenuItem sx={{display: "flex"  , alignItems :"center" }}
      active={selected === title}
      style={{
        color: Colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{fontSize: "20px" ,   fontWeight:"bold", display:"flex"}}>{title}</Typography>
      <Link to={to} /> 
    </MenuItem>
  );
};

const Line = styled("div")(({ theme }) => ({
  width: "100%",
  height: "1px",
  backgroundColor: Colors.main[2],
  margin: "10px 0",
}));



const Sidebar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false)  ; 
  const [selected, setSelected] = useState('Dashboard') ; 
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const phone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box 
    sx={{
      "& .pro-sidebar-inner": {
        background: `${Colors.main[1]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
        color: "#fff !important",
      },
      "& .pro-inner-item": {
        padding: "5px 20px  !important",
        color: "#fff !important",
      },
      "& .pro-inner-item:hover": {
        backgroundColor: "#00bfc6 !important",
        color: "#fff !important",
      },
      "& .pro-menu-item.active": {
        backgroundColor: `${Colors.main[2]} !important`,
      },
      
    }}
  >
    <ProSidebar collapsed={isCollapsed || phone} 
    >
      <Menu iconShape="square" >
        {/* LOGO AND MENU Icon sx={{width: "20px" , height : "20px" }}*/}
        <MenuItem 
          onClick={() => { (phone)? setMobileOpen(true) : setIsCollapsed(!isCollapsed) } }
          icon={isCollapsed ? <MenuOutlinedIcon sx={{width: "30px" , height : "30px" , color:"#fff"  }} /> : undefined}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
            color: "#fff",
          }}   
        >
          {!isCollapsed && (
              <IconButton onClick={() => { (phone)? setMobileOpen(true) : setIsCollapsed(!isCollapsed) } } >
                <MenuOutlinedIcon sx={{width: "30px" , height : "30px" , color:"#fff"}}/>
              </IconButton>
          )}
        </MenuItem>

        {!isCollapsed && !phone &&(
          <Box mb="25px" >
            <Box display="flex" justifyContent="center" alignItems="center" >
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/person3.png`}
                style={{  borderRadius: "50%" , border: "2px solid #fff" , paddingTop :"5px"}}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color="#fff"
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                 إسماعيل محمود  
              </Typography>
              <Typography variant="h5" color={Colors.main[4]}>
                 الصف الخامس 
              </Typography>
            </Box>
          </Box>
        )}
        <Box >
          <Item sx={{fontSize: "40px"}}  
            title="الصفحة الرئيسية "
            to="/"
            icon={<HomeOutlinedIcon sx={{width: "20px" , height : "20px" }} />}
            selected={selected}
            setSelected={setSelected}
          />
          <Line/>
          <Item
            title="أبحاثي"
            to="/myResearches"
            icon={<PlagiarismOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
            selected={selected}
            setSelected={setSelected}
          />
         
          <Line/>
          <Item
            title="حلولي"
            to="/team"
            icon={<QuizOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Line/>

          <Item sx={{fontSize: "40px" }}  
            title="تنبيهاتي"
            to="/scienceHome"
            icon={<PsychologyOutlinedIcon sx={{width: "20px" , height : "20px" }} />}
            selected={selected}
            setSelected={setSelected}
          />
          <Line/>
          <Item sx={{fontSize: "40px" }}  
            title="الدعم الفني"
            to="/scienceHome"
            icon={<ContactSupportOutlinedIcon sx={{width: "20px" , height : "20px" }} />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </ProSidebar>
    <Drawer
      anchor="right"
      variant="temporary"
      open = {mobileOpen}
      onClose={() =>{setMobileOpen(false)}}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          backgroundColor: `${Colors.main[1]} !important`,
        },
      }}
    >
    <Box 
    sx={{
      "& .pro-sidebar-inner": {
        background: `${Colors.main[1]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
        color: "#fff !important",
      },
      "& .pro-inner-item": {
        padding: "5px 20px  !important",
        color: "#fff !important",
      },
      "& .pro-inner-item:hover": {
        backgroundColor: "#00bfc6 !important",
        color: "#fff !important",
      },
      "& .pro-menu-item.active": {
        backgroundColor: `${Colors.main[2]} !important`,
        
      },
    }}
  >
    <ProSidebar style = {{ backgroundColor:`${Colors.main[1]} !important`}} >
      <Menu iconShape="square" style = {{ backgroundColor:`${Colors.main[1]} !important`}} >
            <Box mb="25px" >
              <Box display="flex" justifyContent="center" alignItems="center" >
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/person3.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" , border: "2px solid #fff" , paddingTop :"5px"}}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color="#fff"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  إسماعيل محمود  
                </Typography>
                <Typography variant="h5" color={Colors.greenAccent[500]}>
                  مهندس برمجيات 
                </Typography>
              </Box>
            </Box>
          <Box >
            <Item sx={{fontSize: "40px" }} 
              title="الصفحة الرئيسية "
              to="/"
              icon={<HomeOutlinedIcon sx={{width: "20px" , height : "20px" }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#fff" 
              sx={{ m: "15px 10px 5px 20px" , display:"flex"  , fontSize: "16px" , fontWeight: "700"  }}
            >
              الأسئلة 
            </Typography>
            <Item
              title="أسألتي"
              to="/team"
              icon={<PeopleOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="اضافة سؤال"
              to="/contacts"
              icon={<ContactsOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#fff" 
              sx={{ m: "15px 10px 5px 20px" , display:"flex"  , fontSize: "16px" , fontWeight: "700"}}
            >
              الأبحاث
            </Typography>
            <Item
              title="أبحاثي"
              to="/form"
              icon={<PersonOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="إضافة بحث"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
              selected={selected}
              setSelected={setSelected}
            />
            
          </Box>
          </Menu>
        </ProSidebar>
        </Box>
    </Drawer>
  </Box>
  )
}

export default Sidebar