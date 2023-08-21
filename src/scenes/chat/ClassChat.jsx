import React from "react";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Colors } from "../../theme";

const ClassChat = () => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "You" }]);
      setMessage("");
    }
  };

  return (
    <section>
      <div className= "w-100 " style={{height: `calc(100vh - ${Colors.height})` }}>
        <div className="row d-flex justify-content-center w-100 m-0 h-100">
          <div className="col-md-12 col-lg-12 col-xl-12 h-100">
            <div className="card h-100" id="chat2" >
              <div className="card-header d-flex justify-content-between align-items-center p-3">
                <h5 className="mb-0">شات الصف </h5>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-mdb-ripple-color="dark"
                >
                  Let's Chat App
                </button>
              </div>
              <div
                className="card-body"
                data-mdb-perfect-scrollbar="true"
                style={{ position: "relative", height: "100%"  , overflow:"auto" }}
              >
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
                    <p className="small ms-3 mb-3 rounded-3 text-muted ">
                      23:58
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>

                <div className="divider d-flex align-items-center mb-4">
                  <p
                    className="text-center mx-3 mb-0"
                    style={{ color: "#a2aab7" }}
                  >
                    Today
                  </p>
                </div>

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
              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                
                 <a className="ms-1 text-muted" href="#!">
                  <AttachFileOutlinedIcon style = {{fontSize : "30px" , color : Colors.main[1]}}/>
                </a>
                <a className="ms-3" href="#!">
                  <SendOutlinedIcon style = {{fontSize : "30px" , color : Colors.main[1]}}/>
                </a>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="أدخل رسالة "
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
