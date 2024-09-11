import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { allRole } from '../../services/Role/GetRoll';
import { getAllDesig } from '../../services/Designation/DesignationGet';
import { readEmp } from '../../services/Employee/EmployeeApi';

const AddEmployee = () => {
    const [roll, setRoll] = useState([])
    const [desig, setDesig] = useState([]);
    const[emp,setEmp]=useState([]);
   

     useEffect(() => {
        getAllRole();
        loadDesignation();
        readAllEmployee();
    }, [])
    const [newEmp, setNewEmp] = useState({
        "roleId": 0,
        "userName": "",
        "empCode": "",
        "empId": 0,
        "empName": "",
        "empEmailId": "",
        "empDesignationId": 0,
        "empContactNo": "",
        "empAltContactNo": "",
        "empPersonalEmailId": "",
        "empExpTotalYear": 0,
        "empExpTotalMonth": 0,
        "empCity": "",
        "empState": "",
        "empPinCode": "",
        "empAddress": "",
        "empPerCity": "",
        "empPerState": "",
        "empPerPinCode": "",
        "empPerAddress": "",
        "password": "",
        "ErpEmployeeSkills": [
            {
                "empSkillId": 0,
                "empId": 0,
                "skill": "",
                "totalYearExp": 0,
                "lastVersionUsed": ""
            }
        ],
        "ErmEmpExperiences": [
            {
                "empExpId": 0,
                "empId": 0,
                "companyName": "",
                "startDate": "2024-09-10T21:54:12.012Z",
                "endDate": "2024-09-10T21:54:12.012Z",
                "designation": "",
                "projectsWorkedOn": ""
            }
        ]
    })

    const onFormRead = (event, key) => {
        setNewEmp(data => ({ ...data, [key]: event.target.value }));
    }

    const addnewEmp = async () => {
        const result = await axios.post("https://freeapi.miniprojectideas.com/api/ClientStrive/CreateNewEmployee", newEmp);
        if (result.data.result) {
            alert("New Employee Created.")
        } else {
            alert(result.data.message);
        }
    }

    const getAllRole = async () => {
        allRole().then((result) => {
            setRoll(result);
        })
    }
    const loadDesignation = async () => {
        // Fetch data and update state
        getAllDesig().then((result) => {
            setDesig(result);
        });
    };

    const readAllEmployee=async()=>{
        readEmp().then((result)=>{
            setEmp(result);
        })
    }

    

    return (
        <div>
           
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header bg-light'>
                        <h3>Add New Emp Form</h3>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <label>RoleID</label>
                            <select onChange={(event) => onFormRead(event, 'roleId')} className='form-select' value={newEmp.roleId}>
                                <option>Select Role ID</option>
                                {
                                    roll.map((item) => {
                                        return (<option value={item.roleId}>{item.role}</option>)
                                    })
                                }
                            </select>

                            <label>UserName:</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'userName')} value={newEmp.userName} className='form-control' />

                            <label>empCode</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empCode')} value={newEmp.empCode} className='form-control' />

                            <label>empName</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empName')} value={newEmp.empName} className='form-control' />

                            <label>empEmailId</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empEmailId')} value={newEmp.empEmailId} className='form-control' />

                            <label>empDesignationId</label>
                            <select onChange={(event) => onFormRead(event, 'empDesignationId')} className='form-select' value={newEmp.empDesignationId}>
                                {/* <option>Select Designation</option>
                                {
                                    desig.map((item) => {
                                        return (<option value={item.designationId}>{item.designation}</option>)
                                    })
                                } */}
                                {
                                    desig.map((item)=>{
                                        return(<option value={item.designationId}>{item.designation}</option>)
                                    })
                                }
                            </select>

                            <label>empContactNo</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empContactNo')} value={newEmp.empContactNo} className='form-control' />

                            <label>empPersonalEmailId</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empPersonalEmailId')} value={newEmp.empPersonalEmailId} className='form-control' />

                            <label>empExpTotalYear</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empExpTotalYear')} value={newEmp.empExpTotalYear} className='form-control' />

                            <label>empExpTotalMonth</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empExpTotalMonth')} value={newEmp.empExpTotalMonth} className='form-control' />

                            <label>empCity</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empCity')} value={newEmp.empCity} className='form-control' />

                            <label>empState</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empState')} value={newEmp.empState} className='form-control' />

                            <label>empPinCode</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empPinCode')} value={newEmp.empPinCode} className='form-control' />

                            <label>empAddress</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empAddress')} value={newEmp.empAddress} className='form-control' />

                            <label>empPerCity</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empPerCity')} value={newEmp.empPerCity} className='form-control' />

                            <label>empPerState</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empPerState')} value={newEmp.empPerState} className='form-control' />

                            <label>empPerPinCode</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empPerPinCode')} value={newEmp.empPerPinCode} className='form-control' />

                            <label>empPerAddress</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'empPerAddress')} value={newEmp.empPerAddress} className='form-control' />

                            <label>password</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'password')} value={newEmp.password} className='form-control' />

                            <label>ErpEmployeeSkills empId</label>
                            <select onChange={(event)=>onFormRead(event,'ErpEmployeeSkills.empId')} className='form-select' value={newEmp.ErpEmployeeSkills.empId}>
                                <option>Select emp id</option>
                                {
                                    emp.map((item)=>{
                                        return(<option value={item.empId}>{item.empName}</option>)
                                    })
                                }
                            </select>

                            <label>ErpEmployeeSkills skill</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'ErpEmployeeSkills.skill')} value={newEmp.ErpEmployeeSkills[0].skill} className='form-control' />

                            <label>ErpEmployeeSkills totalYearExp</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'ErpEmployeeSkills.totalYearExp')} value={newEmp.ErpEmployeeSkills[0].totalYearExp} className='form-control' />

                            <label>ErpEmployeeSkills lastVersionUsed</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'ErpEmployeeSkills.lastVersionUsed')} value={newEmp.ErpEmployeeSkills[0].lastVersionUsed} className='form-control' />

                            <label>ErmEmpExperiences empId</label>
                            <select onChange={(event)=>onFormRead(event,'ErmEmpExperiences.empId')} className='form-select' value={newEmp.ErmEmpExperiences.empId}>
                                <option>ErmEmpExperiences empId</option>
                                {
                                    emp.map((item)=>{
                                        return(<option value={item.empId}>{item.empName}</option>)
                                    })
                                }
                            </select>

                            <label>ErmEmpExperiences companyName</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'ErmEmpExperiences.companyName')} value={newEmp.ErmEmpExperiences[0].companyName} className='form-control' />

                            <label>ErmEmpExperiences startDate</label>
                            <input type='date' onChange={(event) => onFormRead(event, 'ErmEmpExperiences.startDate')} value={newEmp.ErmEmpExperiences[0].startDate} className='form-control' />

                            <label>ErmEmpExperiences endDate</label>
                            <input type='date' onChange={(event) => onFormRead(event, 'ErmEmpExperiences.endDate')} value={newEmp.ErmEmpExperiences[0].endDate} className='form-control' />

                            <label>ErmEmpExperiences designation</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'ErmEmpExperiences.designation')} value={newEmp.ErmEmpExperiences[0].designation} className='form-control' />

                            <label>ErmEmpExperiences projectsWorkedOn</label>
                            <input type='text' onChange={(event) => onFormRead(event, 'ErmEmpExperiences.projectsWorkedOn')} value={newEmp.ErmEmpExperiences[0].projectsWorkedOn} className='form-control' />

                            <button onClick={addnewEmp} className='btn btn-success mt-2'>Add Employee</button>
                            <button className='btn btn-primary mt-2' >Update Employee</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddEmployee;
