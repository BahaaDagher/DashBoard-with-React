import React, { useState } from 'react';
import { H5 } from './MCQ';
import SubmitButton from '../../components/SubmitButton';
function Picture() {
  const [selectedPicture, setSelectedPicture] = useState(null);

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPicture(file);
    }
  };

  return (
    <div>
      <H5>  اختر الصورة  :</H5>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
        />
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
