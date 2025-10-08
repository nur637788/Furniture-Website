import { StrictMode,  } from 'react'
import { createRoot} from 'react-dom/client'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Bed from './components/Catagoris/Bed';
import Chair from './components/Catagoris/Chair';
import Sofa from './components/Catagoris/Sofa';
import Table from './components/Catagoris/Table';
import Lamp from './components/Catagoris/Lamp';
import ProductDetiels from './components/ProductDetiels'
import Account from './components/Acccount';
import ShopNow from './components/ShopNow'
import ErrorPage from './components/ErrorPage';
import TermCondition from './components/TermCondition';
import PrivacyPolicy from './components/PrivecyPolicy';


// Animation Diclaration
AOS.init({
  duration: 2000,
  once: true,
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/product",
        element:<Products></Products>
      },
            // Product Detiels dekhanor jonno
      {                 
        path: "product/:id",
        element:<ProductDetiels></ProductDetiels>
      },

      {
        path: "/about",
        element: <About></About>,
      },

      { 
        path: "/contact",
        element: <Contact></Contact>,
      },
      
        // Button Link
      { 
        path: "/chair",
        element: <Chair></Chair>,
      },
      { 
        path: "/sofa",
        element: <Sofa></Sofa>,
      },
      { 
        path: "/table",
        element: <Table></Table>,
      },
       { 
        path: "/bed",
        element: <Bed></Bed>,
      },
      { 
        path: "/lamp",
        element: <Lamp></Lamp>,
      },
      {
        path: "/account",
        element: <Account></Account>
      },
      {
        path: "/shopnow",
        element: <ShopNow></ShopNow>
      },
      {
        path: "/errorpage",
        element: <ErrorPage></ErrorPage>
      },
          // Footer Button Link
      {
        path:'/termcondition',
        element:<TermCondition></TermCondition>
      },
      {
        path:'/privacypolicy',
        element:<PrivacyPolicy></PrivacyPolicy>
      },
       

       
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
