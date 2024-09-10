import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ExampleComponent from './Components/ExampleComponent';
import Login from './pages/Login';
import ClientList from './Components/Client/ClientList';
import ClientForm from './Components/Client/ClientForm';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to='/Login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to=''>All designation</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/ExampleComponent'>Constants</Link>
              </li>
              <li class="nav-item">
        <Link class="nav-link" to="/list">Client List</Link>
      </li>
    
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path='/ExampleComponent'  element={<ExampleComponent></ExampleComponent>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path="/list" element={<ClientList></ClientList>}></Route>
    <Route path="/form" element={<ClientForm></ClientForm>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;