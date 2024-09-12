import axios from 'axios';
import React, { useState } from 'react';

const GetPayProID = () => {
    const [projectId,setProjectId]=useState();
    const[data,setdata]=useState({})
    const readform=(event)=>{
       
        setProjectId(event.target.value);

    }

    const paymProId=async()=>{

        const result=await axios.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllPaymentsByProjectId?projectId="+projectId);
        setdata(result.data.data)

    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-3">
                        <div className="card">
                            <div className="card-header bg-warning fw-bold">Get Payments By Project ID</div>
                            
                            <div className="card-body">
                                <form action="#" className="d-flex flex-wrap align-items-end">
                                    <div className="row gx-3 gy-2">

                                        <div className="mb-3 col-sm-3">
                                            <label className="form-label">Project Id</label>
                                            <input type="text" onChange={(event)=>readform(event)} className="form-control" />
                                        </div>

                                        <div className="mb-3 col-sm-3">
                                         
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default GetPayProID;