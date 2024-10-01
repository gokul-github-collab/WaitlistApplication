import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useNavigate } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoutes';
import { Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AddProduct from './components/AddProduct';
import Products from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PositionNumber from './components/PositionNumber';
import EditProduct from './components/EditProduct';
import RegisteredItemsPage from './pages/RegisteredItemsPage';

const Logout = () => {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear();
  return <RegisterPage />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='' element={<MainLayout />}>

        <Route index element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/products/:id/:referral_id' element={<ProductDetailPage />} />
        <Route path='/add-product' element={<ProtectedRoute> <AddProduct /> </ProtectedRoute>} />
        <Route path='/edit-product/:product_id' element={<ProtectedRoute> <EditProduct /> </ProtectedRoute>} />
        <Route path='/position/:no/:ref_no/:p_id/:email' element={<PositionNumber />} />
        <Route path='/position/:email/:product_id' element={<PositionNumber />} />


        <Route path='/registered-products' element={<RegisteredItemsPage />} />

        <Route path='/registered-products/:email' element={<RegisteredItemsPage />} />
      </Route>



      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
