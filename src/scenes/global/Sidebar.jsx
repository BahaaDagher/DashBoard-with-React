import React from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import "react-pro-sidebar/dist/css/styles.css"
import {Box , IconButton ,Typography , useTheme} from '@mui/material'
import {Link} from 'react-router-dom'
import {Colors} from '../../theme'
import { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

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
      <Typography sx={{fontSize: "20px" , display:"flex"}}>{title}</Typography>
      <Link to={to} /> 
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false)  ; 
  const [selected, setSelected] = useState('Dashboard') ; 
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
    <ProSidebar collapsed={isCollapsed}>
      <Menu iconShape="square" >
        {/* LOGO AND MENU Icon sx={{width: "20px" , height : "20px" }}*/}
        <MenuItem 
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon sx={{width: "30px" , height : "30px" , color:"#fff"}} /> : undefined}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
            color: "#fff",
            
          }}
        >
          {!isCollapsed && (
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon sx={{width: "30px" , height : "30px" , color:"#fff"}}/>
              </IconButton>
          )}
        </MenuItem>

        {!isCollapsed && (
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
        )}

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
            الصفحات
          </Typography>
          <Item
            title="الصفحة الشخصية"
            to="/form"
            icon={<PersonOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="النتيجة"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color="#fff" 
            sx={{ m: "15px 10px 5px 20px" , display:"flex"  , fontSize: "16px" , fontWeight: "700"}}
          >
            التقارير
          </Typography>
          <Item
            title="تقرير الطقس"
            to="/bar"
            icon={<BarChartOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="تقرير الجغرافي"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon sx={{width: "20px" , height : "20px" }}/>}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </ProSidebar>
  </Box>
  )
}

export default Sidebar