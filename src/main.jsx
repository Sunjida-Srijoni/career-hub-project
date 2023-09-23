import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
    {
      path: "/home",
      element: <Home></Home>

    },
    {
      path: "/applied",
      element:<AppliedJobs></AppliedJobs>,
      loader: () => fetch('/jobs.json')

    },
    {
      path: "/job/:id",
      element: <JobDetails></JobDetails>,
      loader: () => fetch('../jobs.json')
    }

  ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)