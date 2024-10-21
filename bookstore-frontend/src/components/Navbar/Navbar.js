import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure CSS file is linked
// import logo from '../../assets/image.png';
import logo from '../../assets/Untitled design (5).png';

const Navbar = () => {
  return (
    <nav className="navbar">
      
<div className="navbar-brand">
  <Link to="/" className="d-flex align-items-center">
    <img src={logo} alt="Bookstore Logo" className="logo" style={{ width: '100px', height: '50px', marginLeft: '8px' ,marginTop:'0px',marginLeft:'8px'}} 
    />
  </Link>
</div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/categories">Categories</Link></li> */}
        <li><Link to="/bestsellers">Bestsellers</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../../assets/image.png';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       setIsLoggedIn(!!localStorage.getItem('token'));
//     };
//     window.addEventListener('storage', checkLoginStatus);

//     // Cleanup the event listener when component unmounts
//     return () => {
//       window.removeEventListener('storage', checkLoginStatus);
//     };
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/" className="d-flex align-items-center">
//           <img
//             src={logo}
//             alt="Bookstore Logo"
//             className="logo"
//             style={{ width: '100px', height: '50px', marginLeft: '8px' }}
//           />
//         </Link>
//       </div>

//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/bestsellers">Bestsellers</Link></li>
//         <li><Link to="/contactus">Contact Us</Link></li>
//         <li><Link to="/cart">Cart</Link></li>
//         <li><Link to="/wishlist">Wishlist</Link></li>
//         <li><Link to="/profile">Profile</Link></li>

//         {!isLoggedIn ? (
//           <>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Signup</Link></li>
//           </>
//         ) : (
//           <li><Link to="/logout">Logout</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
