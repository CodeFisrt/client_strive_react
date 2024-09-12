import axios from 'axios';
import React, { useState } from 'react';

const AddPayments = () => {
    // Use useState to manage form data
    const [addPayment, setPayments] = useState({
        projectPaymentId: 0,
        projectId: 0,
        paymentDate: "",
        paymentMode: "",
        amount: 0,
        naration: ""
    });

    // Update form state based on input changes
    const readForm = (event, key) => {
        setPayments(prevData => ({...prevData,[key]: event.target.value}));
    };

    // Handle form submission
    const addNewPayment = async () => {
        try {
            const result = await axios.post("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdatePayment", addPayment);
            if (result.data.result) {
                alert("New Payment Created successfully.");
            } else {
                alert(result.data.message);
            }
        } catch (error) {
            console.error('Error adding payment:', error);
            alert('Error adding payment. Please try again.');
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-3">
                        <div className="card">
                            <div className="card-header bg-warning fw-bold">Add Payment</div>
                            <div className="card-body">
                                <form className="d-flex flex-wrap align-items-end" onSubmit={(e) => e.preventDefault()}>
                                    <div className="row gx-3 gy-2">
                                        <div className="mb-3 col-sm-3">
                                            <label className="form-label">Project Id</label>
                                            <input
                                                type="text"
                                                onChange={(event) => readForm(event, 'projectId')}
                                                value={addPayment.projectId}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3 col-sm-3">
                                            <label className="form-label">Payment Date</label>
                                            <input
                                                type="date"
                                                onChange={(event) => readForm(event, 'paymentDate')}
                                                value={addPayment.paymentDate}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3 col-sm-3">
                                            <label className="form-label">Payment Mode</label>
                                            <input
                                                type="text"
                                                onChange={(event) => readForm(event, 'paymentMode')}
                                                value={addPayment.paymentMode}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3 col-sm-3">
                                            <label className="form-label">Payment Amount</label>
                                            <input
                                                type="number"
                                                onChange={(event) => readForm(event, 'amount')}
                                                value={addPayment.amount}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3 col-sm-3">
                                            <label className="form-label">Narration</label>
                                            <input
                                                type="text"
                                                onChange={(event) => readForm(event, 'naration')}
                                                value={addPayment.naration}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3 col-sm-3">
                                            <button type="button" className="btn btn-primary" onClick={addNewPayment}>
                                                Add New Payment
                                            </button>
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

export default AddPayments;

