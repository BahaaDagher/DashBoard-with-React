import React, { useState } from 'react';
import { H5 } from './MCQ';
import SubmitButton from '../../components/SubmitButton';
import InputFile from '../../components/InputFile';
import LabelFile from '../../components/LabelFile';




function Picture() {

  const [selectedPicture, setSelectedPicture] = useState(null);
  
  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPicture(file);
    }
  };

  return (
    <div style={{border:'1px solid #20c997 ' , padding: '10px'}}>  
      <div>
        <InputFile
          id = "uploadPicture"
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
        />
        <LabelFile htmlFor="uploadPicture">اختر صورة</LabelFile>
      </div>
      {selectedPicture && (
        <div>
          <H5> الصورة المختارة :</H5>
          <img
            src={URL.createObjectURL(selectedPicture)}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        </div>
      )}
      <SubmitButton>تأكيد</SubmitButton>
    </div>
    
  );
}

export default Picture;
