import React, { useEffect, useState } from 'react';
import { readEmp } from '../../services/Employee/EmployeeApi';
import { useNavigate } from 'react-router-dom';

const GelAllEmploe = () => {
const [emp,setEmp]=useState([]);

useEffect(()=>{
    readAllEmployee();

},[])

const readAllEmployee=async()=>{
    readEmp().then((result)=>{
        setEmp(result);
    })
}

const history=useNavigate()

const onNavigateAddEmp=()=>{
    history('/AddEmployee');

}



    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header bg-primary'>
                           <h1>Get All Employee Data</h1>
                           <button className='btn btn-success' onClick={readAllEmployee}>get role</button>
                           <button className='btn btn-warning' onClick={onNavigateAddEmp}>Add New Employee</button>
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>empName</th>
                                        <th>empId</th>
                                        <th>empCode</th>
                                        <th>empEmailId</th>
                                        <th>empDesignation</th>
                                        <th>role</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        emp.map((item,index) => {
                                            return (<tr>
                                                <td>{index+1}</td>
                                                <td>{item.empName}</td>
                                                <td>{item.empId}</td>
                                                <td>{item.empCode}</td>
                                                <td>{item.empEmailId}</td>
                                                <td>{item.empDesignation}</td>
                                                <td>{item.role}</td>
                                                <td>
                                                    <button className='btn btn-primary'>Edit</button>
                                                    <button className='btn btn-dengar'>Delete</button>
                                                </td>
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

export default GelAllEmploe;