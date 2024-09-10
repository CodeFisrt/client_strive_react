// src/components/ExampleComponent.js
import React from 'react';
import Constants, { API_URL, APP_NAME } from '../Constant/Constants';
// Adjust the path as necessary

const ExampleComponent = () => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(API_URL);
//       // Handle response
//     } catch (error) {
//       // Handle error
//     }
//   };

  return (
    <div>
      {/* <h1>Welcome to {APP_NAME}!</h1>
      <button onClick={fetchData}>Fetch Data</button> */}

      {/* <h1>{JSON.stringify(Constants)}</h1> */}
      <h2>{JSON.stringify(Constants)}</h2>
      
    </div>
  );
};

export default ExampleComponent;
