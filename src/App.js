import Signin from './pages/login/Signin';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import CommonLayoutmain from './pages/Commonlayoutmain/CommonLayoutmain';

import { ToastContainer } from 'react-toastify';
import Dashboard from './components/dashboard/Dashboard';
import AddResturantPage from './components/ResturantContent/AddResturantPage';
import RestPage from './pages/resturants/RestPage';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
         <Route path="/" element={<CommonLayoutmain><Dashboard/></CommonLayoutmain>} />
         <Route path="/login" element={<Signin/>}/>
         <Route path="/restaurants/add" element={<CommonLayoutmain><AddResturantPage/></CommonLayoutmain>}/>
         <Route path="/resturants" element={<CommonLayoutmain><RestPage/></CommonLayoutmain>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
