import React from 'react'
import Header from './components/header/Header'
// import Banner from "../src/components/Home/banner"
import Home from '../src/pages/Home'
import Footer from './components/footer/Footer'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet

} from "react-router-dom";
import { productsData } from './Api/Api';
// import { create } from '@mui/material/styles/createTransitions';

const Layout = () => {
  return (
    <div >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}



const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<Layout />}>
    <Route index element={<Home />} loader={productsData} ></Route>

   </Route>
  ))
 
  return (
    <div className='font-bodyFont bg-gray-100'>
     <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App

