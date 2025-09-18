import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Routes } from "react-router"
import { createHashRouter } from 'react-router'
import { RouterProvider } from 'react-router'

import Insights from './advantiumComponents/Insights.jsx'
import About from './advantiumComponents/About.jsx'
import Careers from './advantiumComponents/Careers.jsx'
import Contact from './advantiumComponents/testing.jsx'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
   
//     <Contact/>
//   </StrictMode>,
// )


const Root = createRoot(document.getElementById('root'));

let allRouts = createHashRouter(
  [
    {
      path: '/',
      element: <App  />
    },
  
    {
      path: 'Insights',
      element: <Insights  />
    },
    {
      path: 'About',
      element: <About  />
    },
  
   
    {
      path: 'Careers',
      element: <Careers  />
    },
   
    {
      path: 'Contact',
      element: <Contact  />
    },

  //    {
  //   basename: '/Advantium'  // 👈 ye line important hai for GitHub Pages
  // }
   
  ]
)

Root.render(
  <StrictMode>
    <RouterProvider router={allRouts} />
   </StrictMode>,
)





