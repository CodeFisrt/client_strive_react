import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState({
        "password": "",
        "username": ""
    })

    const readForm = (event, key) => {
        setLogin(olddata => ({...olddata, [key]: event.target.value }))
    }

    const empLogin = async () => {
        const result = await axios.post("https://freeapi.miniprojectideas.com/api/ClientStrive/Login", login);
        if (result.data.result) {
            alert("Employee Login SucessFully")
        } else {
            alert(result.data.message);
        }
    }
    return (

        <div>
            <div class="container py-3">
    <div class="card">
        <div class="card-header bg-warning fw-bold">Add Payment</div>
        <div class="card-body">
            <form class="row g-3 align-items-end" onSubmit="(e) => e.preventDefault()">
                <div class="col-sm-3">
                    <label class="form-label">Username:</label>
                    <input type="text" onChange="(event) => readForm(event, 'username')" value={login.username} class="form-control" placeholder="Enter UserName"/>
                </div>
                <div class="col-sm-3">
                    <label class="form-label">Password:</label>
                    <input type="password" onChange="(event) => readForm(event, 'password')" value={login.password} class="form-control" placeholder='Enter Your Password'/>
                </div>
                <div class="col-sm-3">
                    <button type="button" class="btn btn-primary" onClick="empLogin">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>

    );
};

export default Login;