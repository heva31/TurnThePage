<h1>Turn the Page Bookstore</h1>
<p>The <strong>Turn the Page Bookstore</strong> is a comprehensive web-based platform designed to provide users with a seamless experience for discovering and purchasing books online. Built using React for the frontend and Django for the backend, it integrates APIs, a cart system, and user management features.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h2 id="features">Features</h2>
<ul>
    <li><strong>Book Search:</strong> Utilize Google APIs to search for books by title, author, or ISBN.</li>
    <li><strong>User Authentication:</strong> Secure sign-up and login for managing user accounts.</li>
    <li><strong>Book Details:</strong> View comprehensive details about each book, including ratings and reviews.</li>
    <li><strong>Shopping Cart:</strong> Add and manage books in a virtual cart for purchase.</li>
    <li><strong>Wishlist:</strong> Save favorite books for later reference.</li>
    <li><strong>Responsive Design:</strong> Fully responsive interface for optimal browsing on all devices.</li>
</ul>

<h2 id="technologies-used">Technologies Used</h2>
<ul>
    <li><strong>Frontend:</strong> React</li>
    <li><strong>Backend:</strong> Django</li>
    <li><strong>Database:</strong> SQLite</li>
    <li><strong>APIs:</strong> Google Books API for book functionality</li>
</ul>

<h2 id="installation">Installation</h2>
<p>To set up the <strong>Turn the Page Bookstore</strong> project locally, follow these steps:</p>
<ol>
    <li><strong>Clone the repository:</strong>
        <pre><code>git clone https://github.com/yourusername/turn-the-page-bookstore.git</code></pre>
    </li>
    <li><strong>Navigate to the project directory:</strong>
        <pre><code>cd turn-the-page-bookstore</code></pre>
    </li>
    <li><strong>Set up the backend:</strong>
        <ol>
            <li>Navigate to the backend directory:
                <pre><code>cd bookstore-backend</code></pre>
            </li>
            <li>Install dependencies:
                <pre><code>pip install -r requirements.txt</code></pre>
            </li>
            <li>Run migrations:
                <pre><code>python manage.py migrate</code></pre>
            </li>
            <li>Start the Django server:
                <pre><code>python manage.py runserver</code></pre>
            </li>
        </ol>
    </li>
    <li><strong>Set up the frontend:</strong>
        <ol>
            <li>Navigate to the frontend directory:
                <pre><code>cd ../bookstore-frontend</code></pre>
            </li>
            <li>Install dependencies:
                <pre><code>npm install</code></pre>
            </li>
            <li>Start the React application:
                <pre><code>npm start</code></pre>
            </li>
        </ol>
    </li>
    <li><strong>Create and Add an API Key:</strong>
        <ol>
            <li>Go to <a href="https://console.developers.google.com/">Google Developers Console</a> and create a new project.</li>
            <li>Enable the <strong>Google Books API</strong> for your project.</li>
            <li>Generate an API key and copy it.</li>
            <li>Add the API key to your frontend environment file (<code>frontend/.env</code>) as follows:
                <pre><code>REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key_here</code></pre>
            </li>
        </ol>
    </li>
</ol>

<h2 id="usage">Usage</h2>
<ol>
    <li>Open your browser and navigate to <code>http://localhost:3000</code> to access the application.</li>
    <li>Use the search feature to find books.</li>
    <li>Click on a book to view details and add it to your cart or wishlist.</li>
    <li>Sign up or log in to manage your account and purchases.</li>
</ol>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! If you would like to contribute to the <strong>Turn the Page Bookstore</strong> project, please follow these steps:</p>
<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch:
        <pre><code>git checkout -b feature/YourFeature</code></pre>
    </li>
    <li>Make your changes.</li>
    <li>Commit your changes:
        <pre><code>git commit -m 'Add some feature'</code></pre>
    </li>
    <li>Push to the branch:
        <pre><code>git push origin feature/YourFeature</code></pre>
    </li>
    <li>Open a pull request.</li>
</ol>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
