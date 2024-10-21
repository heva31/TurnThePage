// import React from 'react';
// import './AuthorSpotlights.css'; // Create this CSS file for styles
// import Img from '../../assets/image1.png';
// const AuthorSpotlights = () => {
//     return (
//         <section className="author-spotlight">
//             <h1>Author Spotlight</h1>
//             <div className="author-container">
//                 <img src={Img} alt="Author" className="author-image" />
//                 <div className="author-details">
//                     <h2>Jane Doe</h2>
//                     <p>Jane Doe is a bestselling author known for her captivating novels that explore the complexities of human emotions. With a unique voice and a talent for storytelling, she has touched the hearts of readers worldwide.</p>
//                     <p><strong>Notable Works:</strong> The Silent Echo, Beyond the Stars, The Last Page</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AuthorSpotlights;
import React from 'react';
import './AuthorSpotlights.css'; // Ensure to create this CSS file
import AuthorImage from '../../assets/image1.png'; // Replace with your actual image path

const AuthorSpotlights = () => {
    return (
        <div className='authorspot'>
            {/* <h1>Author Spotlight</h1> */}
        <div className="author-spotlight">
            <img src={AuthorImage} alt="Author" className="author-image" />
            <div className="author-details">
                <h2 className="author-name">Jane Doe</h2>
                <p className="author-bio">
                    Jane Doe is a bestselling author known for her engaging novels that captivate readers around the world. 
                    With a passion for storytelling, she has published multiple award-winning books in various genres.
                </p>
                <p className="author-quote">"Books are a uniquely portable magic." - Jane Doe</p>
            </div>
        </div></div>
    );
};

export default AuthorSpotlights;
