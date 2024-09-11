import React, { useEffect, useState } from 'react';
import { getAllDesig } from '../services/Designation/DesignationGet'; // Ensure this import path is correct.

const Designation = () => {
  const [Desig, setAllDesig] = useState([]);

  useEffect(() => {
    loadDesignation();
  },[]);

  const loadDesignation =async () => {
    // Fetch data and update state
    getAllDesig().then((result) => {
      setAllDesig(result);
    });
  };

  // Return the JSX from the component itself
  return (
    <div className='bg-light'>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary">
              <h1>Get All Employee Designation</h1>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>designationId</th>
                    <th>designation</th>
                  </tr>
                </thead>
                <tbody>
                  {Desig.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.designationId}</td>
                      <td>{item.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designation;
