import React from 'react';
// import axios from 'axios';s
const LandPage = (props) =>  {

  let formData = new FormData(); 

  const uploadJSONFiles = (event) => {
    event.preventDefault();
    // let formData = new FormData(); 
    // let jsonBodyData = { 'someKey': 'someValue' };
    // // for(let key of Object.keys(event.target.files)) {
    // //   if (key !== 'length') {
    // //     formData.append('files', event.target.files[key]);
    // //   }
    // // }
    formData.append('files', event.target.files[0]);
    // formData.append('jsonBodyData',
    //   new Blob([JSON.stringify(jsonBodyData)], { 
    //     type: 'application/json'
    //   }));
    
  }
  const handleSubmit = () => {
    const data = fetch('http://localhost:8080/api/file/upload/1?path=property/room', { 
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error occurred!')); 
  }
  return (
    <div className="uk-margin-medium-top">
      <label>Upload Files</label>
      <input type="file"
        onChange={(event) => uploadJSONFiles(event)} 
        multiple/>
      <button onClick={handleSubmit}>Click</button>  
   </div>
  );
}
export default LandPage;