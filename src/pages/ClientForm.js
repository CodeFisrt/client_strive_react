import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../services/ClientData';

const ClientForm = () => {
    const [addClient,setAddClient] = useState({
        "clientId": 0,
  "contactPersonName": "",
  "companyName": "",
  "address": "",
  "city": "",
  "pincode": "",
  "state": "",
  "EmployeeStrength": 0,
  "gstNo": "",
  "contactNo": "",
  "regNo": ""
    })
    const readClientData =(event,key)=>{
        setAddClient(old=>({...old,[key]:event.target.value}))
    }
const saveData = async ()=>{
 
        const result = await axios.post("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient",addClient)
    if(result.data.result){
        alert("Client Data Update Successfully")
    }else{
        alert(result.data.message)
    }
    
}
const history = useNavigate();
const saveClientData =()=>{
   history ("/list");
} 
const [client,setClient] = useState([]);
const loadClient = async()=>{
   Employee().then(result =>{
       setClient(result.data)
 } )
}
useEffect (()=>{
   loadClient();

},[])
    return (
        <div>
            <h1>Client Form</h1>
            <br></br>
            <button onClick={saveClientData} className='btn btn-success'>Save</button>
           <div className='row'>
            <div className='col-6'>
                <div className='card'>
                    <div className='card-header bg-success'></div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-4'>
                                <label>Client ID</label>
                                <input type="text"  onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                    <label>Contact Person Name</label>
                                <input type="text"  onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>Company Name</label>
                                <input type="text" onChange={(event)=>readClientData(event,'')} className='form-control' ></input>
                                </div>
                                </div>
                                <br></br>
                                <div className='row'>
                            <div className='col-4'>
                            <label>Address</label>
                                <input type="text" onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>City</label>
                                <input type="text" onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>Pincode</label>
                                <input type="text" onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                                </div>
                                <br></br>
                                <div className='row'>
                            <div className='col-4'>
                            <label>State</label>
                                <input type="text" onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>Employee Strength</label>
                                <input type="text" onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>GST No</label>
                                <input type="text" onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                                </div>
                                <br></br>
                                <div className='row'>
                            <div className='col-4'>
                            <label>Contact No</label>
                                <input type="text" onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>Reg No</label>
                                <input type="text" onChange={(event)=>readClientData(event,'')}className='form-control' ></input>
                                </div>
                               
                                </div>
                                <br></br>
                                <div className='row'>
                                    <div className='col-2'>
                                        <button onClick={saveData} className='btn btn-success'>Save</button>
                                    </div>
                                    <div className='col-2'>
                                        <button className='btn btn-warning'>Update</button>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div> 
        </div>
    );
};

export default ClientForm;