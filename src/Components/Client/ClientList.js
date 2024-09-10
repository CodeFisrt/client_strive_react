import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../services/ClientData';


const ClientList = () => {
    
    const [client,setClient] = useState([]);
 const loadClient = async()=>{
    Employee().then(result =>{
        setClient(result.data)
  } )
 }
useEffect (()=>{
    loadClient();
},[])
  const history = useNavigate();
 const onClientData =()=>{
    history ("/form");
 }
    return (
        <div>
              <br></br> 
            <button className='btn btn-success' onClick={onClientData}>Client Form</button>
           
            <br></br>
            <br></br>
            
          <div className='row'>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header bg-success'></div>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Client Id</th>
                                    <th>Contact Person Name</th>
                                    <th>Company Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Pincode</th>
                                    <th>State</th>
                                    <th>Employee Strength</th>
                                    <th>GSt No</th>
                                    <th>Contact No</th>
                                    <th>Reg No</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    client.map((item,index)=>{
                                        return (<tr>
                                            <td>{index +1}</td>
                                            <td>{item.clientId}</td>
                                            <td>{item.contactPersonName}</td>
                                            <td>{item.companyName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.city}</td>
                                            <td>{item.pincode}</td>
                                            <td>{item.state}</td>
                                            <td>{item.employeeStrength}</td>
                                            <td>{item.gstNo}</td>
                                            <td>{item.contactNo}</td>
                                            <td>{item.regNo}</td>
                                            <td>
                                                <button className='btn btn-primary' >Edit</button>
                                                <button className='btn btn-danger' >Delete</button>
                                            </td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                        </div></div></div></div>  
        </div>
    );
};

export default ClientList;