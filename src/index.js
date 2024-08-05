import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import About from './components/About/About';



const router = createBrowserRouter([
  {
    path:'/',
    element:<root/>,
    children:[
           {
            path:"",
            element:<About/>
           }
    ]
  }
])

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider
  router={router}
  fallbackElement={<Layout/>}
/>
</React.StrictMode>
);


