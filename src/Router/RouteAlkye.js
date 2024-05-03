
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Signup from '../Signup/Signup'

import PrivateRoutes from './PrivateRoutes'

function RouteAlkye() {
  return (
    <div className="App">
        <Router>
          <Routes>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Signup/>} path='/signup'/>
            <Route element={<PrivateRoutes />}>
               
                <Route element={<Dashboard/>} path="/dashboard"/>
            </Route>
            <Route  path="/" element={< Navigate to ='/login'/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default RouteAlkye;