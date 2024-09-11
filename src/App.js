import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Designation from './pages/Designation';
import AllRole from './pages/AllRole';
import GelAllEmploe from './pages/Employees/GelAllEmploe';
import AddEmployee from './pages/Employees/AddEmployee';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className='nav-link' to='/AllRole'>Get Roll</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/Designation'>Get Designation</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/GelAllEmploe'>All Employee</Link>
              </li>
             
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path='/AllRole' element={<AllRole></AllRole>}></Route>
          <Route path='/Designation' element={<Designation></Designation>}></Route>
          <Route path='/GelAllEmploe' element={<GelAllEmploe></GelAllEmploe>}></Route>
          <Route path='/AddEmployee' element={<AddEmployee></AddEmployee>}></Route>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;