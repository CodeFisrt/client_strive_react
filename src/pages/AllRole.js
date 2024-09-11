import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { allRole } from '../services/Role/GetRoll';

const AllRole = () => {
    const [getRoll, setAllRoll] = useState([]);
    useEffect(() => {
        getAllRole();
    }, []);
    

    const getAllRole = async () => {
        allRole().then((result)=>{
            setAllRoll(result);
        })
    }

    
    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header bg-primary'>
                           <h1>Get All Employee Roll</h1>
                           <button className='btn btn-success' onClick={getAllRole}>get role</button>
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>roleId</th>
                                        <th>Role</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getRoll.map((item) => {
                                            return (<tr>
                                                <td>{item.roleId}</td>
                                                <td>{item.role}</td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRole;