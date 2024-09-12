import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { ClientData } from '../../services/Client/ClientGet';

const AddClient = () => {
    const [addClient, setAddClient] = useState({
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
    const readClientData = (event, key) => {
        setAddClient(old => ({ ...old, [key]: event.target.value }))
    }
    const saveData = async () => {

        const result = await axios.post("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient", addClient)
        if (result.data.result) {
            alert(" New Client Successfully");
            loadClient();
        } else {
            alert(result.data.message)
        }

    }

    const [client, setClient] = useState([]);
    const loadClient = async () => {
        ClientData().then((result) => {
            setClient(result.data)
        })
    }
    useEffect(() => {
        loadClient();


    }, [])
    return (
        <div>
            <h1>Client Form</h1>
            <br></br>

            <div className='row '>
                <div className='col-6'>
                    <div className='card '>
                        <div className='card-header bg-success'></div>
                        <div className='card-body'>
                            <div className='row'>
                              
                    <div className='col-4'>
                                    <label>Contact Person Name</label>
                                    <input type="text" value={addClient.contactPersonName} onChange={(event) => readClientData(event, 'contactPersonName')} className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                    <label>Company Name</label>
                                    <input type="text" value={addClient.companyName} onChange={(event) => readClientData(event, 'companyName')} className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                    <label>Address</label>
                                    <input type="text" value={addClient.address} onChange={(event) => readClientData(event, 'address')} className='form-control' ></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row'>
                              
                 <div className='col-4'>
                                    <label>City</label>
                                    <input type="text" value={addClient.city} onChange={(event) => readClientData(event, 'city')} className='form-control' ></input>
                                </div>
                                 <div className='col-4'>
                                    <label>Pincode</label>
                                    <input type="text" value={addClient.pincode} onChange={(event) => readClientData(event, 'pincode')} className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                    <label>State</label>
                                    <input type="text" value={addClient.state} onChange={(event) => readClientData(event, 'state')} className='form-control' ></input>
                                </div>
                            </div>
                         
                           
                            <br></br>
                            <div className='row'>
                                <div className='col-4'>
                                    <label>Contact No</label>
                                    <input type="text" value={addClient.contactNo} onChange={(event) => readClientData(event, 'contactNo')} className='form-control' ></input>
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

export default AddClient;