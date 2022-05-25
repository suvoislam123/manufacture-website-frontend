import logo from './logo.svg';
import './App.css';
import Header from './components/sharedComponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/sharedComponents/NotFound/NotFound';
import Home from './components/standAlonComponents/Home/Home';
import Footer from './components/sharedComponents/Footer/Footer';
import Register from './components/sharedComponents/Login/Register/Register';
import Login from './components/sharedComponents/Login/Login/Login';
import About from './components/standAlonComponents/About/About';
import RequireAuth from './components/sharedComponents/Login/RequireAuth/RequireAuth';
import UserOrders from './components/standAlonComponents/UserOrders/UserOrders';
import AdminOrders from './components/standAlonComponents/Admin/AdminOrders/AdminOrders';
import AdminRequireAuth from './components/sharedComponents/Login/RequireAuth/AdminRequireAuth';
import ManageInventory from './components/standAlonComponents/Admin/ManageInventory/ManageInventory';
import AddProduct from './components/standAlonComponents/Admin/AddProduct/AddProduct';
import UpdateInventoryItem from './components/standAlonComponents/Admin/ManageInventory/UpdateInventoryItem/UpdateInventoryItem';
import Blogs from './components/standAlonComponents/Blogs/Blogs';
import ConfirmOrder from './components/standAlonComponents/UserOrders/ConfirmOrder/ConfirmOrder';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin/updateinventoryitem/:id' element={
          <AdminRequireAuth>
            <UpdateInventoryItem />
          </AdminRequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <UserOrders />
          </RequireAuth>
        }></Route>
        <Route path='/confirmorder/:id' element={<RequireAuth>
          <ConfirmOrder />
        </RequireAuth>}

        ></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About />
          </RequireAuth>
        }></Route>
        <Route path='/admin/orders' element={
          <AdminRequireAuth >
            <AdminOrders />
          </AdminRequireAuth>
        }></Route>
        <Route path='/admin/manageinventory/' element={
          <AdminRequireAuth>
            <ManageInventory />
          </AdminRequireAuth>
        }></Route>
        <Route path='/admin/addproduct/' element={
          <AdminRequireAuth>
            <AddProduct />
          </AdminRequireAuth>
        }></Route>
        <Route path='/admin/manageinventory' element={
          <AdminRequireAuth>
            <ManageInventory />
          </AdminRequireAuth>
        } ></Route>
        <Route path='/orders' element={<UserOrders />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
//https://stackoverflow.com/questions/72162598/why-i-cant-call-usestate-hook-inside-the-components-function
