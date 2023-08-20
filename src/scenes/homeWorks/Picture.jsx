import React, { useState } from 'react';
import { H5 } from './MCQ';
import SubmitButton from '../../components/SubmitButton';
import InputFile from '../../components/InputFile';
import LabelFile from '../../components/LabelFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { addImageQuestion } from '../../store/slices/questionsSlice';

const CenterDiv = styled("div")(({ theme }) => ({
  textAlign: "center" ,
})) 

function Picture() {

  const [selectedPicture, setSelectedPicture] = useState(null);
  
  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPicture(file);
    }
  };

  const dispatch = useDispatch() ;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedPicture );
    dispatch(addImageQuestion(formData))

  };

  return (
    <div style={{border:'1px solid #20c997 ' , padding: '10px'}}>  
      <CenterDiv >
        <InputFile
          id = "uploadPicture"
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
        />
        <LabelFile htmlFor="uploadPicture"> <AddPhotoAlternateIcon sx= {{fontSize : "35px"}}/> اختر صورة</LabelFile>
      </CenterDiv>
      {selectedPicture && (
        <CenterDiv>
          <H5> الصورة المختارة </H5>
            <img
              src={URL.createObjectURL(selectedPicture)}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
        </CenterDiv>
      )}
      <SubmitButton style= {{width:"200px"}} onClick = {handleSubmit}>تأكيد</SubmitButton>
    </div>
    
  );
}

export default Picture;
