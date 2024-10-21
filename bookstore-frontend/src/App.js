import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Router, Routes, and Route
import HomePage from "./pages/HomePage/HomePage";  // Import HomePage
import BookDetailPage from "./pages/BookDetailPage/BookDetailPage";  // Import BookDetailPage
import Navbar from "./components/Navbar/Navbar";  // Import Navbar component
import Wishlist from './pages/Wishlist/Wishlist';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ContactPage from './pages/ContactUs/Contactus';
import CategoryBooksPage from './pages/CategoriesPage/CategoryBooksPage';
import Logout from './components/Logout/Logout';
import BestSellersPage from './pages/BestSellersPage/BestSellersPage';
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage/CartPage";

import ProfilePage from "./pages/ProfilePage/ProfilePage";



function App() {
  const token = localStorage.getItem('token');
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />  // Define route for HomePage
        <Route path="/home" element={<HomePage />} />  // Define route for HomePage
        <Route path="/book/:id" element={<BookDetailPage />} />  // Define route for BookDetailPage

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/categories" element={<CategoriesPage />} />
        
        {/* <Route path="/categories/:categoryName" element={<CategoryBooksPage />} /> */}
        <Route path="/categories/:categoryId" element={<CategoryBooksPage />} />
        <Route path="/bestsellers" element={<BestSellersPage />} />
        <Route path="/cart" element={<CartPage token={token}/>} /> {/* Cart route */}
        <Route path="/wishlist" element={<Wishlist token={token}/>} /> {/* Cart route */}
        <Route path="/contactus" element={<ContactPage/>} /> {/* Cart route */}
        <Route path="/profile" element={<ProfilePage />} />


      </Routes>
      <Footer />

    </Router>
  );
}

export default App;

