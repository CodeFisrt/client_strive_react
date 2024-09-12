import React, { useEffect, useState } from 'react';
import { allPayment } from '../../services/Payments/AllPaymets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GetAllPayments = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        getAllPayments();
    }, []);

    const getAllPayments = async () => {
        try {
            allPayment().then((result) => {
                setPayments(result);
            }) // Await the response to ensure data fetching is complete.
            // Check if `result` is in the expected format (array of payment objects).
        } catch (error) {
            console.error('Error fetching payments:', error); // Log any errors that occur during data fetching.
        }
    };
    const history=useNavigate()

   
    const onNavigateAddPay=()=>{
        history('/AddPayments');
    }

    
    

   
       return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header bg-primary">
                            <h1>Get All Employee Designation</h1>
                        </div>
                        <div>
                            <button className='btn btn-success' onClick={getAllPayments}>Payments</button>
                            <button className='btn btn-warning' onClick={onNavigateAddPay}>Add New Payments</button>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>Payment Date</th>
                                        <th>Payment Mode</th>
                                        <th>Narration</th>
                                        <th>Project Name</th>
                                        <th>Company Name</th>
                                        <th>Client Id</th>
                                        <th>Project Id</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments.length > 0 ? (
                                        payments.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.paymentDate}</td>
                                                <td>{item.paymentMode}</td>
                                                <td>{item.naration}</td>
                                                <td>{item.projectName}</td>
                                                <td>{item.companyName}</td>
                                                <td>{item.clientId}</td>
                                                <td>{item.projectId}</td>
                                                <td>
                                                    <button className='btn btn-primary'>Edit</button>
                                                    <button className='btn btn-danger' >Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="text-center">
                                                No data available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            
        
        </div >
    );
};

export default GetAllPayments;
