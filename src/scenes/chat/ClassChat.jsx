import React from "react";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Colors } from "../../theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupChatGet, groupChatSend } from "../../store/slices/chatSlice";
import { useState } from "react";
import Pusher from 'pusher-js';

const customStyles = {
  backgroundColor: Colors.main[6],
  padding: '20px',
  position: "relative", 
  height: "100%"  , 
  overflow:"auto"
};

const ClassChat = () => {

  const [messages, setMessages] = useState([]);
  const [singleMessage , setSingleMessage] = useState("");
  const userData = JSON.parse(localStorage.getItem('userData'));
  const groupChatGetResponse = useSelector((state) => state.chatData.groupChatGetResponse);
  const groupChatSendResponse = useSelector((state) => state.chatData.groupChatSendResponse);


  useEffect(() => {
    if (groupChatGetResponse.status==true) {
      setMessages(groupChatGetResponse.data.messages);
      console.log("the chat data", groupChatGetResponse.data.messages);
    }
  }, [groupChatGetResponse])


  useEffect(() => { 
    console.log("we are here");
    const pusher = new Pusher("8071a8e96650bf6eac15", {
      // key: "8071a8e96650bf6eac15",
      secret: "74f3c62856110435f421",
      cluster: "us3" , 
    });
    const channel = pusher.subscribe('chat_api');
    // console.log("the channel", channel.bind("LevelSent"));

    channel.bind("LevelSent", (data) => {
      console.log("the data", data);
    });
    
  },[])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(groupChatGet({group_id:userData.group_id , page:1})); 
  }, [])


  const handleSend = () => {
    // console.log("the message", singleMessage);
    if (singleMessage!="") {
      dispatch(groupChatSend({message:singleMessage , group_id:userData.group_id})) 
    }
    setSingleMessage("") ;
  }


  return (
    <section>
      <div className= "w-100 " style={{height: `calc(100vh - ${Colors.height})` }}>
        <div className="row d-flex justify-content-center w-100 m-0 h-100">
          <div className="col-md-12 col-lg-12 col-xl-12 h-100">
            <div className="card h-100" id="chat2" >
              <div className="card-header d-flex justify-content-between align-items-center p-3">
                <h5 className="mb-0">شات الصف </h5>
                <h6 className="mb-0" style={{color : Colors.main[1] ,fontWeight:"bold"}} >  {userData.name} </h6>
              </div>
              <div
                className="card-body"
                data-mdb-perfect-scrollbar="true"
                style={customStyles}
              >
                {messages.map((message, index) => (
                    message.isMine ? (
                      <div className="Mine" key={index}>
                        <h6 className="mb-2"> {message.userName}</h6>
                        <div className="d-flex flex-row justify-content-start mb-4 pt-1">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                            alt="avatar 1"
                            style={{ width: "45px", height: "100%" }}
                          />
                          <div>
                            <p className="small p-2 me-3 mb-1 text-white rounded-3 " 
                              style={{backgroundColor: Colors.main[1] }}
                            >
                              {message.message}
                            </p>
                            <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-start ">
                              {message.created_at}
                            </p>
                          </div>
                        
                        
                        </div>
                      </div>
                    ) : (
                      <div className="notMine" key={index}>
                        <h6 className="mb-2 d-flex flex-row justify-content-end">  {message.userName} </h6>
                        <div className="d-flex flex-row justify-content-end">
                          <div>
                            <p
                              className="small p-2 ms-3 mb-1 rounded-3"
                              style={{ background: "#f5f6f7" }}
                            >
                              {message.message}
                            </p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted d-flex flex-row justify-content-end ">
                            {message.created_at}
                            </p>
                          </div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                            alt="avatar 1"
                            style={{ width: "45px", height: "100%" }}
                          />
                        </div>
                      </div>
                    )
                ))}
                {/* <div>
                  <h6 className="mb-2 d-flex flex-row justify-content-end">  عبدالرحمن أشرف  </h6>
                  <div className="d-flex flex-row justify-content-end">
                    <div>
                      <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ background: "#f5f6f7" }}
                      >
                        أهلا 
                      </p>
                      <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ background: "#f5f6f7" }}
                      >
                        كيف حالك اليوم ؟؟؟ 
                      </p>
                      <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ background: "#f5f6f7" }}
                      >
                        هل تشعر بالملل اليوم هيا بنا نذهب الي النادي 
                      </p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted d-flex flex-row justify-content-end">
                        23:58
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                  </div>
                </div>

                <div className="Mine">
                  <h6 className="mb-2"> اسماعيل محمود </h6>
                  <div className="d-flex flex-row justify-content-start mb-4 pt-1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 " 
                        style={{backgroundColor: Colors.main[1] }}
                      >
                        أهلا انا بخير 
                      </p>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 " 
                        style={{backgroundColor: Colors.main[1] }}
                      >
                        لا امانع من الذهاب الي النادي ما الساعه التي تود الذهاب فيها 
                      </p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-start">
                        00:06
                      </p>
                    </div>
                  
                  
                  </div>
                </div> */}

              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                
                 <a className="ms-1 text-muted" href="#!">
                  <AttachFileOutlinedIcon style = {{fontSize : "30px" , color : Colors.main[1]}}/>
                </a>
                <a className="ms-3" href="#!" onClick={handleSend}>
                  <SendOutlinedIcon style = {{fontSize : "30px" , color : Colors.main[1]}}/>
                </a>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="أدخل رسالة "
                  value={singleMessage}
                  onChange = {(e) => setSingleMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassChat;
