import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'


import   { createBrowserRouter, RouterProvider }  from "react-router-dom"

import App from './App.jsx'

import Error from './components/Error.jsx';


import "./index.css";
import Details from './components/Details.jsx';







const appRouter =createBrowserRouter([


  {
    

    children:[

      {
        path:"/",
        element: <App />

      },

       {
        path:"/details",
        element: <Details />

      }

 


    ],
    errorElement: <Error />

  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={appRouter}/>
  </StrictMode>,
)
