import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Pricing from './Components/Pricingcompo/Pricing';
import Blog from './Components/Blog/Blog';
import CustomeRequest from './Components/CustomeRequest/CustomeRequest';
import Portfolio from './Components/Portfolio/Portfolio';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
    children: [
      {
        path: "/dashboard",
        element: (<Dashboard />),

        children: [
          {
            path: "/dashboard/pricing",
            element: (<Pricing />),
          },
          {
            path: "/dashboard/blog",
            element: (<Blog />),
          },
          {
            path: "/dashboard/custome-request",
            element: (<CustomeRequest />),
          },
          {
            path: "/dashboard/portfolio",
            element: (<Portfolio />),
          },
        ]
      },
    ]
  }
]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
