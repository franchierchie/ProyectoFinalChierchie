import { Navigate, Route, Routes } from 'react-router-dom';

import { CartPage, ItemDetailContainer, ItemListContainer } from './pages';
import { LoginPage, RegisterPage } from './auth/pages';
import { NavBar } from './components';


function App() {
  
  return (
  <>
    <NavBar />

    <Routes>
      <Route path="/" element={ <ItemListContainer /> } />
      <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
      <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
      <Route path="/cart" element={ <CartPage /> } />

      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />

      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  </>
  )
}

export default App
