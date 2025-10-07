import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  Routes } from "react-router"
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider
} from 'react-router-dom';


import Insights from './advantiumComponents/Insights.jsx'
import About from './advantiumComponents/About.jsx'
import Careers from './advantiumComponents/Careers.jsx'
import Contact from './advantiumComponents/Contact.jsx'
import CMportal from './advantiumComponents/CMportal/CMportal.jsx'
import Apps from './advantiumComponents/Apps/Apps.jsx'
import WebsiteCMS from './advantiumComponents/websiteCMS/WebsiteCMS.jsx'
import Ecom from './advantiumComponents/Ecommerce/Ecom.jsx'
import DMplatform from './advantiumComponents/DMplatform/DMplatform.jsx'
import LMS from './advantiumComponents/LMS/LMS.jsx'
import Code from './advantiumComponents/CodeReview/Code.jsx'
import Strategy from './advantiumComponents/Strategy/Strategy.jsx'
import Technical from './advantiumComponents/TechnicalArchitecture/Technical.jsx'
import DataAI from './advantiumComponents/DataAI/DataAI.jsx'
import Replatform from './advantiumComponents/Replatforming/Replatform.jsx'
import Technology from './advantiumComponents/Technology/Technology.jsx'
import Integration from './advantiumComponents/Integration/Integration.jsx'
import DevSecOps from './advantiumComponents/DevSecOps/DevSecOps.jsx'
import Security from './advantiumComponents/SecurityPrivacy/Security.jsx'
import Maintenance from './advantiumComponents/Maintenance/Maintenance.jsx'
import Design from './advantiumComponents/Design/Design.jsx'
import SoftDev from './advantiumComponents/SoftwereDev/SoftDev.jsx'
import SoftSolution from './advantiumComponents/SoftSolution.jsx'
import PureEnergy from './advantiumComponents/PureEnergy/PureEnergy.jsx'
import RequestForm from './advantiumComponents/RequestForm/RequestForm.jsx'
import OpenApp from './advantiumComponents/OpenApplication/OpenApp.jsx'
import MobileApp from './advantiumComponents/MobileApp/MobileApp.jsx'
import WebApp from './advantiumComponents/WebApp/WebApp.jsx'
import AppDesign from './advantiumComponents/AppDesign/AppDesign.jsx'
import DesignSprint from './advantiumComponents/DesignSprint/DesignSprint.jsx'
import UXDesign from './advantiumComponents/UXdesign/UXDesign.jsx'
import UIDesign from './advantiumComponents/UIdesign /UIDesign.jsx'
import Nou from './advantiumComponents/Nou/Nou.jsx'
import InCorpe from './advantiumComponents/InCorpe/InCorpe.jsx'
import EastBorn from './advantiumComponents/EastBorn/EastBorn.jsx'
import Fundaments from './advantiumComponents/Fundaments/Fundaments.jsx'
import JustEat from './advantiumComponents/JustEat/JustEat.jsx'
import TakeAway from './advantiumComponents/TakeAway/TakeAway.jsx'



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

    {
      path: "CMportal",
      element: <CMportal/>
    },

    {
      path: "Apps",
      element: <Apps/>
    },

    {
      path: "WebsiteCMS",
      element: <WebsiteCMS/>
    },
    {
      path: "Ecom",
      element: <Ecom/>
    },
    {
      path: "DMplatform",
      element: <DMplatform/>
    },
    {
      path: "LMS",
      element: <LMS/>
    },
    {
      path: "Code",
      element: <Code/>
    },
    {
      path: "Strategy",
      element: <Strategy/>
    },
    {
      path: "Technical",
      element: <Technical/>
    },
    {
      path: "DataAI",
      element: <DataAI/>
    },
    {
      path: "Replatform",
      element: <Replatform/>
    },
    {
      path: "Technology",
      element: <Technology/>
    },
    {
      path: "Integration",
      element: <Integration/>
    },
    {
      path: "DevSecOps",
      element: <DevSecOps/>
    },
    {
      path: "Security",
      element: <Security/>
    },
    {
      path: "Maintenance",
      element: <Maintenance/>
    },
    {
      path: "Design",
      element: <Design/>
    },
    {
      path: "SoftDev",
      element: <SoftDev/>
    },
    {
      path: "PureEnergy",
      element: <PureEnergy/>
    },
    {
      path: "RequestForm",
      element: <RequestForm/>
    },
    {
      path: "OpenApp",
      element: <OpenApp/>
    },
    {
      path: "MobileApp",
      element: <MobileApp/>
    },
    {
      path: "WebApp",
      element: <WebApp/>
    },
    {
      path: "AppDesign",
      element: <AppDesign/>
    },
    {
      path: "DesignSprint",
      element: <DesignSprint/>
    },
    {
      path: "UXDesign",
      element: <UXDesign/>
    },
    {
      path: "UIDesign",
      element: <UIDesign/>
    },
    {
      path: "Nou",
      element: <Nou/>
    },
    {
      path: "InCorpe",
      element: <InCorpe/>
    },
    {
      path: "EastBorn",
      element: <EastBorn/>
    },
    {
      path: "Fundaments",
      element: <Fundaments/>
    },
    {
      path: "JustEat",
      element: <JustEat/>
    },
    {
      path: "TakeAway",
      element: <TakeAway/>
    },
    

     {
    basename: '/Advantium'  // 👈 ye line important hai for GitHub Pages
  }
   
  ]
)





Root.render(
  <StrictMode>
    <RouterProvider router={allRouts} />
   </StrictMode>,
)





