// // import React from 'react';
// // import '../styles/HeroSection.css'; // Ensure CSS file is linked

// // // const HeroSection = () => {
// // //   return (
// // //     <section className="hero-section">
// // //       <div className="hero-content">
// // //         <h1>Discover Your Next Great Read</h1>
// // //         <p>Explore thousands of books across various genres and find your next favorite.</p>
// // //         <button className="hero-button">Shop Now</button>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;



// // const HeroSection = () => {
// //     return (
// //       <div className="hero-section">
// //         <div>
// //           <h1 className="hero-text">Welcome to Our Bookstore</h1>
// //           <p className="hero-subtext">Discover your next great read</p>
// //         </div>
// //       </div>
// //     );
// //   };
  
// //   export default HeroSection;


// // src/components/HeroSection.js
// import React from 'react';
// import './HeroSection.css'; // Add your styles

// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       <div className="hero-content">
//         <h1>Discover Your Next Favorite Book</h1>
//         <p>Browse our vast collection and find the perfect read.</p>
//         <button className="cta-button">Shop Now</button>
//       </div>
//       <div className="hero-image">
//         <img src="path/to/hero-image.jpg" alt="Books" />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Add your styles
import heroImage from '../../assets/image1.png';
const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Book</h1>
        <p>Browse our vast collection and find the perfect read.</p>
        <button className="cta-button">Shop Now</button>
      </div>
      <div className="hero-image">
        {/* <img src={heroImage} alt="Books" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
