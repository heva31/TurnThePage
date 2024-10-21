// // // Testimonials.js
// // import React from 'react';
// // import './Testimonials.css';
// // import Img from '../../assets/image4.png';
// // const testimonials = [
// //     {
// //         name: 'Alice Johnson',
// //         message: 'This bookstore has the best selection of books! I always find what I’m looking for.',
// //         rating: 5,
// //     },
// //     {
// //         name: 'Bob Smith',
// //         message: 'I love the cozy atmosphere and friendly staff. Highly recommend!',
// //         rating: 4,
// //     },
// //     {
// //         name: 'Emma Brown',
// //         message: 'Great online service! My orders always arrive on time.',
// //         rating: 5,
// //     },
// // ];

// // const Testimonials = () => {
// //     return (
// //         <section className="testimonials-section">
// //             <h1>Testimonials</h1>
// //             <div className="testimonials-container">
// //                 <div className="testimonial-card book-card">
// //                     <img
// //                         src={Img} // Replace with the actual book image path
// //                         alt="Book cover"
// //                         className="testimonial-book-image"
// //                     />
// //                 </div>
// //                 <div className="testimonial-reviews">
// //                     {testimonials.map((testimonial, index) => (
// //                         <div key={index} className="testimonial-card">
// //                             <p className="testimonial-message">"{testimonial.message}"</p>
// //                             <p className="testimonial-author">- {testimonial.name}</p>
// //                             <p className="testimonial-rating">Rating: {testimonial.rating} ⭐</p>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default Testimonials;


// import React from 'react';
// import './Testimonials.css'; // Import the CSS file
// import Img from '../../assets/image5.png';

// const testimonials = [
//     {
//         name: 'Alice Johnson',
//         message: 'This bookstore has the best selection of books! I always find what I’m looking for.',
//         rating: 5,
//     },
//     {
//         name: 'Bob Smith',
//         message: 'I love the cozy atmosphere and friendly staff. Highly recommend!',
//         rating: 4,
//     },
//     {
//         name: 'Emma Brown',
//         message: 'Great online service! My orders always arrive on time.',
//         rating: 5,
//     },

// ];

// const Testimonials = () => {
//     return (
//         <section className="testimonials-section">
//             <h1>Testimonials</h1>
//             <div className="testimonials-container">
//                 <div className="testimonial-card book-card">
//                     <img
//                         src={Img}
//                         alt="Book cover"
//                         className="testimonial-book-image"
//                     />
//                 </div>
//                 <div className="testimonial-reviews">
//                     {testimonials.map((testimonial, index) => (
//                         <div key={index} className="testimonial-card">
//                             <p className="testimonial-message">"{testimonial.message}"</p>
//                             <p className="testimonial-author">- {testimonial.name}</p>
//                             <p className="testimonial-rating">Rating: {testimonial.rating} ⭐</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;




import React from 'react';
import './Testimonials.css'; // Import the CSS file
import Img from '../../assets/image5.png';

const testimonials = [
    {
        name: 'Alice Johnson',
        message: 'This bookstore has the best selection of books! I always find what I’m looking for.',
        rating: 5,
    },
    {
        name: 'Bob Smith',
        message: 'I love the cozy atmosphere and friendly staff. Highly recommend!',
        rating: 4,
    },
    {
        name: 'Emma Brown',
        message: 'Great online service! My orders always arrive on time.',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h1>What Our Customers Say</h1>
            <h2>Your favorite online bookstore</h2>
            <div className="testimonials-container">
                <img
                    src={Img}
                    alt="Book cover"
                    className="testimonial-book-image"
                />
                <div className="testimonial-reviews">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-message">"{testimonial.message}"</p>
                            <p className="testimonial-author">- {testimonial.name}</p>
                            <p className="testimonial-rating">Rating: {testimonial.rating} ⭐</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default Testimonials;
