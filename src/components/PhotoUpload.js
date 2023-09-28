// PhotoUpload.js
import React, { useState } from 'react';

function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can perform an upload action here, such as sending the file to a server.
      console.log('Uploading:', selectedFile.name);
      // You may want to use a library like axios to send the file to a server.
      // Example:
      // axios.post('/upload', formData).then(response => {
      //   console.log('File uploaded successfully:', response.data);
      // }).catch(error => {
      //   console.error('Error uploading file:', error);
      // });
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      {/* <input type="file" onChange={handleFileChange} /> */}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default PhotoUpload;
