import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Colors } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { getLevels } from "../../store/slices/levelSlice";
import { profileData, updateProfile } from "../../store/slices/userSlice";
import Swal from "sweetalert2";


const FormContainer = styled("div")(({ theme }) => ({
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #e4e4e4",
  borderRadius: "5px",
  boxShadow: "0 2px 4px #00a4a97d",
}));

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

const Label = styled("label")(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "17px",
}));

const Input = styled("input")(({ theme }) => ({
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  "&:hover, &:focus": {
    outlineColor: Colors.main[3] , 
    borderColor: Colors.main[3] , 
  },
  transition: "all 0.3s ease-in-out" , 
}));

const Select = styled("select")(({ theme }) => ({
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  transition: "border-color 0.3s",
  "&:hover, &:focus": {
    outlineColor: Colors.main[3] , 
    borderColor: Colors.main[3] , 
  },
}));
const Option = styled("option")(({ theme }) => ({
}))

const Title = styled("h1")(({ theme }) => ({
  padding : "10px ",
}));

const Button = styled("button")(({ theme }) => ({
  padding: "10px 30px",
  backgroundColor: Colors.main[3] ,
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Colors.main[2],
  },
  transition: "background-color 0.3s",
  margin: "auto",
  maxWidth: "1000px",
}));

const options = [
  "رياضة",
  "عربي",
  "فيزياء",
  "كيمياء",
  "تاريخ",
];

const EditProfile = () => {
  const levels = useSelector((state) => state.levelsList.levels )
  const user = useSelector((state) => state.userData.dataOfProfile )  
  const ResponseUpdateProfile = useSelector((state) => state.userData.ResponseUpdateProfile )

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [selectedLevel, setSelectedLevel] = useState(levels.find(level => level.id === user.level_id));
  const [selectedPicture, setSelectedPicture] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    if(!user.id) {
      dispatch(getLevels()) ;
      dispatch(profileData()) ; 
    } else {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setSelectedLevel(levels.find(level => level.id === user.level_id));
    }
    console.log("user" , user) ; 
  }, [user] );

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPicture(file);
    }
  };


  useEffect(() => {
    if(ResponseUpdateProfile.status == true) {
      const storedData = localStorage.getItem('userData');
      const data = JSON.parse(storedData);
      data.name = name ;
      data.email = email ;
      data.phone = phone ;
      data.level_id = selectedLevel.id ;
      const updatedData = JSON.stringify(data);
      localStorage.setItem('userData', updatedData);
      Swal.fire({
        icon: 'success',
        title: 'تم تعديل البيانات بنجاح',
        showConfirmButton: false,
        timer: 1500
      })
      // window.location.reload();
    }
    else if (ResponseUpdateProfile.status==false) {
      Swal.fire({
        icon: 'error',
        title: ResponseUpdateProfile.message ,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }, [ResponseUpdateProfile] );


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({name : name , email : email , phone : phone , level_id : selectedLevel.id }))
    console.log( "name : " , name , "email : " , email , "phone : " , phone , "level_id : " , selectedLevel.id ,
     "level: " , selectedLevel.name ) ;
  };

  return (
    <>
      <Title> تعديل الصفحة الشخصية :</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label> الاسم </Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => e.target.classList.add("active")}
            onBlur={(e) => e.target.classList.remove("active")}
          />
          <Label> البريد الإلكتروني </Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => e.target.classList.add("active")}
            onBlur={(e) => e.target.classList.remove("active")}
          />
          <Label> الهاتف </Label>
          <Input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={(e) => e.target.classList.add("active")}
            onBlur={(e) => e.target.classList.remove("active")}
          />
          <Label> الصف </Label>
          <Select
            value={""}
            onChange={(e) => {
              const selectedId = e.target.value;
              const selectedLevel = levels.find(level => level.id === selectedId);
              setSelectedLevel(selectedLevel);
            }}
          >
            {levels.map((level, index) => (
              <Option key={index} value={level.id}>
                {level.name}
              </Option>
            ))}
          </Select>
          <Label> الصورة </Label>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
            />
          </div>
          <Button type="submit">حفظ</Button>
        </Form>
      </FormContainer>
      
    </>
  );
};

export default EditProfile;
