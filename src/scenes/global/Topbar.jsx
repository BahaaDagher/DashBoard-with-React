import {Box , Icon, IconButton , useTheme} from '@mui/material' 
import {Colors} from '../../theme'
import InputBase from '@mui/material/InputBase' 
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const Topbar = () => {
  const theme = useTheme()
  return (
    <>
      <Box display="flex" padding="10px" justifyContent="flex-end" backgroundColor= {Colors.main[1]}> 
        <IconButton sx={{color : "#fff"}}>
          <PersonOutlineIcon sx={{width: "30px" , height : "30px"}}/>
        </IconButton>
      </Box>
    </>
  )
}
export default Topbar
