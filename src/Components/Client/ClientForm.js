import React from 'react';

const ClientForm = () => {
    
    return (
        <div>
            <h1>Client Form</h1>
           <div className='row'>
            <div className='col-6'>
                <div className='card'>
                    <div className='card-header bg-success'></div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-4'>
                                <label>Client ID</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                    <label>Contact Person Name</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>Company Name</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                </div>
                                <br></br>
                                <div className='row'>
                            <div className='col-4'>
                            <label>Address</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>City</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>Pincode</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                </div>
                                <br></br>
                                <div className='row'>
                            <div className='col-4'>
                            <label>State</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>Employee Strength</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>GST No</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                </div>
                                <br></br>
                                <div className='row'>
                            <div className='col-4'>
                            <label>Contact No</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                                <div className='col-4'>
                                <label>Reg No</label>
                                <input type="text" className='form-control' ></input>
                                </div>
                               
                                </div>
                                <br></br>
                                <div className='row'>
                                    <div className='col-2'>
                                        <button className='btn btn-success'>Save</button>
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