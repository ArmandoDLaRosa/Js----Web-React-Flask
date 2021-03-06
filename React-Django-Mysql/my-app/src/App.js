import logo from './logo.svg';
import './App.css';
import {Home} from "./components/Home";
import {Department} from "./components/Department";
import {Employee} from "./components/Employee";

// import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'   Switch in react v6 was changed to Routes
  //<Route path='/home' component = {Home}/> also changed to be
  //<Route path='/home' element={<Home/>}/>


import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom' 

function App() {
  return (    
    <BrowserRouter>
      <div className="App">
        <h3 className = 'd-flex justify-content-center m-3'>
          React JS Frontend
        </h3>
        <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
            <ul className='navbar-nav'>
                <li className='nav-item- m-1'>
                  <NavLink className="btn btn-light btn-outline-primary" to="/home">
                      Home
                  </NavLink>
                </li>
                <li className='nav-item- m-1'>
                  <NavLink className="btn btn-light btn-outline-primary" to="/department">
                      Department
                  </NavLink>
                </li>
                <li className='nav-item- m-1'>
                  <NavLink className="btn btn-light btn-outline-primary" to="/employee">
                      Employee
                  </NavLink>
                </li>
            </ul>
        </nav>
        
        <Routes>
            <Route path='/home' element={<Home/>}/> 
            <Route path='/department' element={<Department/>}/>
            <Route path='/employee' element={<Employee/>}/>
        </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
