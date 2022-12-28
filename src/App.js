
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';
import Login from './Component/Login/Login';
import MeetExaminer from './Component/MeetExaminer/MeetExaminer';
import MeetExplorer from './Component/MeetExplorer/MeetExplorer';
import MeetReports from './Component/MeetReports/MeetReports';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
// import Navbar from './Component/Navbar/Navbar';
import Register from './Component/Register/Register';
// import jwtDecode from 'jwt-decode';
import React from 'react'



function App() {
  
  let routers = createBrowserRouter ([{
    path:'/',element:<Layout />,children:[
    {index:true,element:<Home/> },
    {path:'register',element:<Register/>},
    {path:'home',element:<Home/>},
    {path:'login',element:<Login />},
    {path:'about',element:<About/>},
    {path:'meetexaminer',element:<ProtectedRoute><MeetExaminer/></ProtectedRoute> },
    {path:'meetexplorer',element:<MeetExplorer/>},
    {path:'meetreports',element:<ProtectedRoute><MeetReports/></ProtectedRoute>},
    {path:'*',element:<Home/> }
    ]
  }]);
  return <>
  <RouterProvider router={routers}/>
  
  
  
  
  </>
}

export default App;
