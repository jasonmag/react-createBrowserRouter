import React from "react";
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Link, 
  Route, 
  Outlet, 
  RouterProvider
} from 'react-router-dom';
import { Home } from "./Home";
import { Data, dataLoader } from "./Data";
import { Contact } from "./Contact";


export function App(props) {

  // Routes to the components
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path="/data" element={<Data/>} loader={dataLoader}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )
  
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
};

const Root = () => {
  return (
    <>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/data"> Data </Link>
      </div>

      <div>
        <Outlet/>
      </div>
    </>
  )
};

export default App;