import styled from "@emotion/styled"
import { Avatar, Box, Menu, TextField } from "@mui/material"
// import { CTextField } from "../../../../components/profile"
export const Container = styled(Box)(({ theme }) => ({
  flex: "1",
  // minHeight: "80%",
  backgroundColor: `red`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  borderBottom: "unset",
}))

export const ChatHeader = styled("div")(() => ({
  width: "100%",
  // border: "1px solid green",
  // borderRight: "1px solid black",
  height: "70px",
  backgroundColor: "#212121",
  display: "flex",
  justifyContent: "space-between",
}))

export const PersonalInfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "50%",
  marginLeft: "25px",
  [theme.breakpoints.down("chatSmall")]: {
    marginLeft: "5px",
  },
  // border: "1px solid green",
}))

export const ChatAvatar = styled(Avatar)(({ theme }) => ({
  width: "55px",
  height: "55px",
  marginTop: "10px",
  marginLeft: "10px",
  [theme.breakpoints.down("chatSmall")]: {
    width: "50px",
    height: "50px",
  },
}))

export const TextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "15px",
  marginLeft: "10px",
  marginTop: "17px",
  maxWidth: "100%",
  minWidth: "100%",
  overflow: "hidden",
}))

export const ContactName = styled("p")(({ theme }) => ({
  fontWeight: "bold",
  overflow: "hidden",
  marginBottom: "0px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "20px",
  [theme.breakpoints.down("450")]: {
    maxWidth: "155px",
  },
  // maxWidth: "70%",
}))

export const LastSeen = styled("p")(() => ({
  marginBottom: "0px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}))

export const HeaderActionsContainer = styled("div")(() => ({
  // border: "1px solid green",
  // width: "50px",
  // padding: "0px",
  // marginRight: "10px",
  height: "fit-content",
  marginTop: "10px",
}))

export const CMenu = styled(Menu)(() => ({
  borderRadius: "0px",
  "& .MuiMenuItem-root": {
    // padding: "0px",
    // margin: "0px",
    color: "white",
    // borderRadius: "80px",
    // marginRight: "80px",
    backgroundColor: "#212121",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  "& .MuiMenu-list": {
    // margin: "20px",
    padding: "0px",
  },
  "& .MuiPaper-root": {
    minWidth: "150px",
    backgroundColor: "#212121",
    marginTop: "30px",
    marginLeft: "-50px",
    borderRadius: "10px",
    // marginTop: "3px",
  },
}))

export const InnerContainer = styled("div")(() => ({
  flex: "1",
  // maxHeight: "600px",
  display: "flex",
  flexDirection: "column",
  // border: "2px solid green",
  padding: "5px",
  width: "95%",
  margin: "auto",
}))

export const MessagesContainer = styled("div")(({ theme }) => ({
  flex: "1 1 0",
  // maxHeight: "76vh",
  // maxHeight: "100%",
  overflowY: "scroll",
  overflowX: "hidden",
  display: "flex",
  // flexWrap: "wrap",
  flexDirection: "column",
  // padding: "5px",
  "&:not(:hover)": {
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
    },
  },
}))

// TODO AF : while sending is in process the background should be faded
export const SentMessage = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "tomato",
  color: "white",
  maxWidth: "70%",
  borderRadius: "15px",
  alignSelf: "flex-end",
  padding: "10px 15px",
  marginTop: "5px",
  // minWidth: "70px",
  textAlign: "start",
  whiteSpace: "pre-wrap", // break words to a new line
  wordBreak: "break-word",
  overflowWrap: "break-word",
}))

export const OnlineIndicator = styled("div")(() => ({
  display: "absolute",
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  backgroundColor: "green",
  alignSelf: "flex-top",
  marginTop: "5px",
}))

export const OfflineIndicator = styled("div")(() => ({
  display: "absolute",
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  backgroundColor: "gray",
  alignSelf: "flex-top",
  marginTop: "5px",
}))

export const ReceivedMessage = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#212121",
  color: "white",
  padding: "10px 15px",
  maxWidth: "70%",
  borderRadius: "15px",
  alignSelf: "flex-start",
  marginTop: "5px",
  textAlign: "start",
  whiteSpace: "pre-wrap", // break words to a new line
  wordBreak: "break-word",
  overflowWrap: "break-word",
}))

export const MessageDate = styled("div")(() => ({
  alginSelf: "flex-end",
  color: "#a0aeb9",
}))

export const LoadingSentMessage = styled(Box)(({ maxWidth }) => ({
  width: "100%",
  minHeight: "50px",
  borderRadius: "10px",
  padding: "10px 15px",
  backgroundColor: "gray",
  background:
    "-webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.8)), color-stop(18%, rgba(130, 130, 130, 0.9)), color-stop(33%, rgba(130, 130, 130, 0.8)))",

  backgroundSize: "1200px 100px",
  animation: "wave-squares 2s infinite ease-out",
  "@keyframes wave-squares": {
    "0%": {
      backgroundPosition: "-1000px 0",
    },
    "100%": {
      backgroundPosition: "1000px 0",
    },
  },
  alignSelf: "flex-end",
  maxWidth: maxWidth + "%",
  marginTop: "5px",
}))

export const LoadingReceivedMessage = styled(Box)(({ maxWidth }) => ({
  width: "100%",
  minHeight: "50px",
  borderRadius: "10px",
  padding: "10px 15px",
  backgroundColor: "gray",
  background:
    "-webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.8)), color-stop(18%, rgba(130, 130, 130, 0.9)), color-stop(33%, rgba(130, 130, 130, 0.8)))",

  backgroundSize: "1200px 100px",
  animation: "wave-squares 2s infinite ease-out",
  "@keyframes wave-squares": {
    "0%": {
      backgroundPosition: "-1000px 0",
    },
    "100%": {
      backgroundPosition: "1000px 0",
    },
  },
  alignSelf: "flex-start",
  maxWidth: maxWidth + "%",
  marginTop: "5px",
}))

export const InputContainer = styled("div")(() => ({
  // backgroundColor: "gray",
  gap: "10px",
  marginTop: "15px",
  marginBottom: "15px",
  width: "100%",
  // margin: "auto",
  // height: "70px",
  alignSelf: "flex-end",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  justifyItems: "center",
  alignItems: "center",
  // padding: "5px",
}))

export const InputField = styled(TextField)(({ theme }) => ({
  padding: "0px",
  // border: "1px solid green",
  ".MuiInputBase-root": {
    backgroundColor: "#212121",
    padding: "20px",
    borderRadius: "15px",
    // height: "60px",
  },
  "& fieldset": {
    border: `none`,
  },
  "&.MuiTextField-root": {
    borderRadius: "15px",
    width: "100% !important",
  },
  ".MuiInputBase-input": {
    overflowY: "scroll",
    minHeight: "20px",
    maxHeight: "200px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    // border: "1px solid green",
    // borderRadius: "15px",
    // padding: "0px",
    width: "100%",
    backgroundColor: "#212121",
    color: "white",
  },
}))

export const CenteredDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}))

export const NotAvailable = styled("div")(() => ({
  backgroundColor: "#212121",
  width: "100%",
  borderRadius: "30px",
  padding: "17px",
  textAlign: "center",
  marginBottom: "20px",
  marginTop: "20px",
}))
