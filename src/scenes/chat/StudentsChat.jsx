import React, { useRef } from "react";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Colors } from "../../theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentChatGet, StudentChatSend, groupChatGet, groupChatSend } from "../../store/slices/chatSlice";
import { useState } from "react";
import Pusher from 'pusher-js';
import  Title  from "../../components/Title";
import FemaleAvatar from "../../components/chatAvatars/FemaleAvatar";
import MaleAvatar from "../../components/chatAvatars/MaleAvatar";
import PersonalPic from "../../components/chatAvatars/PersonalPic";
import FileBox from "./FileBox";
import ImageBox from "./ImageBox";
import { profileData } from "../../store/slices/userSlice";

const customStyles = {
  backgroundColor: Colors.main[6],
  padding: '20px',
  position: "relative", 
  height: "100%"  , 
  overflow:"auto" , 
};

const StudentsChat = () => {

  

  const studentChatGetResponse = useSelector((state) => state.chatData.studentChatGetResponse);
  const [messages, setMessages] = useState([]);
  const [scrollToBot, setMScrollToBot] = useState(true);
  const [singleMessage , setSingleMessage] = useState("");
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const studentChatPages = useSelector((state) => state.chatData.studentChatPages);
  const [lastPage, setlastPage] = useState();
  const chatRef = useRef(null);
  const [block , setBlock] = useState(false) ;

  const dispatch = useDispatch();
  

  useEffect(() => {
    if (studentChatGetResponse.status==true) {
      setlastPage(studentChatGetResponse.data.last_page )
      setMessages(prevItems => [...prevItems, ...studentChatGetResponse.data.messages]);

    }
  }, [studentChatGetResponse])

  

  useEffect(() => { 
    dispatch(profileData());
    getData(1)

    const pusher = new Pusher("8071a8e96650bf6eac15", {
      secret: "74f3c62856110435f421",
      cluster: "us3" , 
      forceTLS: true,
      encrypted: true,
    });

    const channel = pusher.subscribe('chat_api');
    channel.bind("ChatSent", (data) => {
      setMessages(current => [...[data.message], ...current])
    });

    return () => {
    pusher.unsubscribe('chat_api');
    pusher.disconnect();
    };
},[])

const dataOfProfile = useSelector((state) => state.userData.dataOfProfile); 

useEffect(() => {
  setBlock(dataOfProfile.block==1)
}, [dataOfProfile])

const getData=(value)=>{
  dispatch(StudentChatGet({group_id:userData.group_id , page:value})); 
}



const handleSend = () => {
  if (singleMessage!="") {
    const formData = new FormData();
    formData.append("message", singleMessage);
    dispatch(StudentChatSend(formData)) 
    scrollToBottom();
  }
  setSingleMessage("") ;
}


useEffect(() => {
  if(scrollToBot){
    scrollToBottom();

  }
  
}, [messages]);



const scrollToBottom = () => {
  if (chatRef.current) {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
}}



const handleScroll = () => {
  const chatContainer = chatRef.current;
  if (chatContainer.scrollTop  === 0) {
    if(lastPage>studentChatPages){

      getData(studentChatPages)
      chatContainer.scrollTop=chatContainer.scrollTop+1000
      setMScrollToBot(false)
    }
  }
};

const handleFileSelect = (event) => {
  const file = event.target.files[0];
  if (file) {
    const formData = new FormData();
    formData.append("file", file);
    dispatch(StudentChatSend(formData))
    event.target.value = null;

  }
};


  return (
    <>
    {
      block ? <Title className="block"> لقد تم حظرك من دخول هذه الصفحة </Title> : 
      <section style = {{height : "100%"}}>
        <div className= "w-100 " style={{height: "100%" }}>
          <div className="row d-flex justify-content-center w-100 m-0 h-100">
            <div className="col-md-12 col-lg-12 col-xl-12 h-100">
              <div className="card h-100" id="chat2" >
                <div className="card-header d-flex justify-content-between align-items-center p-3">
                  <h5 className="mb-0">شات الطلاب </h5>
                  <h6 className="mb-0" style={{color : Colors.main[1] ,fontWeight:"bold"}} > 
                  { userData.n_name !="" ? userData.n_name : userData.name }
                  </h6>
                </div>
                <div
                  className="card-body"
                  data-mdb-perfect-scrollbar="true"
                  style={customStyles }
                  onScroll={handleScroll}
                  ref={chatRef} 
                >
                  {messages.toReversed().map((message, index) => (
                    message.user_id == userData.id  ? (
                        <div className="Mine" key={index}>
                          <h6 className="mb-2"> {message.userName}</h6>
                          <div className="d-flex flex-row justify-content-start mb-4 pt-1">
                          { message.userImage!="" ? <PersonalPic imageSrc ={message.userImage} /> : 
                            message.gender==="female" ?  <FemaleAvatar/> :<MaleAvatar/>}
                            <div
                              style = {{maxWidth:"70%"  , wordWrap:"break-word"}}
                            >
                                <p className="small p-2 me-3 mb-1 text-white rounded-3 " 
                                  style={{backgroundColor: Colors.main[1] }}
                                >
                                  <span style={{ fontFamily: "inherit" , fontSize :"inherit" , whiteSpace: "pre-wrap" }}
                                  >
                                    {message.type== "text" ? message.message : 
                                    message.type== "pdf" ? <FileBox src = {message.file} mine = {true}/> :
                                    message.type== "image" ? <ImageBox src = {message.file} /> : null
                                    }
                                  </span>
                                </p>
                              <p className="small me-3 mb-3 rounded-3 text-muted d-flex flex-row justify-content-end"
                                style={{ direction : "ltr"}}
                              >
                                {message.created_at}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="notMine" key={index}>
                          <h6 className="mb-2 d-flex flex-row justify-content-end">  {message.userName} </h6>
                          <div className="d-flex flex-row justify-content-end">
                            <div
                              style = {{maxWidth:"70%"  , wordWrap:"break-word"}}
                            >
                              <p
                                className="small p-2 ms-3 mb-1 rounded-3"
                                style={{ background: "#f5f6f7" }}
                              >
                                <span style={{ fontFamily: "inherit" , fontSize :"inherit" , whiteSpace: "pre-wrap" }}
                                  >
                                    {message.type== "text" ? message.message : 
                                    message.type== "pdf" ? <FileBox src = {message.file} mine = {false}/> :
                                    message.type== "image" ? <ImageBox src = {message.file}/> : null }
                                  </span>
                              </p>
                              <p className="small ms-3 mb-3 rounded-3 text-muted d-flex flex-row justify-content-start"
                                style={{ direction : "ltr"}}
                              >
                              {message.created_at}
                              </p>
                            </div>
                            { message.userImage!="" ? <PersonalPic imageSrc ={message.userImage} /> : 
                            message.gender==="female" ?  <FemaleAvatar/> :<MaleAvatar/>}
                          </div>
                        </div>
                      )
                  ))}


                </div>
                <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                  
                  <label className="ms-1 text-muted" htmlFor="fileInput" >
                    <AttachFileOutlinedIcon style={{ fontSize: "30px", color: Colors.main[1] , cursor: "pointer"}} />
                  </label>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleFileSelect}
                  />
                  <SendOutlinedIcon
                    onClick={handleSend}
                    style = {{fontSize : "30px" , color : Colors.main[1] , cursor: "pointer" , marginLeft : "10px"}}
                  />
                  
                  <textarea
                    style={{resize: "none" , height : "50px" , width : "100%"}}
                    type="text"
                    multiple 
                    className="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="أدخل رسالة "
                    value={singleMessage}
                    onChange = {(e) => setSingleMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        handleSend()
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    }
    </>
  );
};

export default StudentsChat;
