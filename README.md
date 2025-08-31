WanderLust – An Airbnb Full-Stack Clone
A production-ready Airbnb clone built using Node.js, Express.js, MongoDB, and EJS.

WanderLust allows users to explore, create, edit, and delete accommodation listings, complete with reviews, validation, and a clean UI.

This project demonstrates real-world full-stack development skills: from REST APIs and database modeling to server-side rendering and robust error handling.

🔗 Live Demo: WanderLust on Render

🔗 GitHub Repo: Airbnb_FullStack_Project

Key Features
Listings CRUD: Full Create, Read, Update, and Delete functionality for accommodation listings.

Reviews with Validation: Users can add and manage reviews, with schema validation implemented using Joi.

Robust Error Handling: Implemented a centralized error system with ExpressError for a seamless user experience and simplified debugging.

Dynamic UI: Built with server-side rendering using EJS and ejs-mate for layout inheritance.

RESTful Routing: Designed a clean, scalable, and modular route structure.

MongoDB Persistence: Data is stored and retrieved efficiently with Mongoose.

Middleware Support: Custom middleware used for user authentication, data validation, and error handling.

Tech Stack
Backend: Node.js, Express.js, MongoDB, Mongoose

Templating: EJS, ejs-mate

Validation: Joi

Styling: Bootstrap, custom CSS

Dev Tools: Nodemon, Method-Override

What I Learned
Building Scalable RESTful APIs: Gained hands-on experience in building and implementing a scalable RESTful API with Express, demonstrating a clear understanding of resource-based routing and HTTP methods.

Designing MongoDB Schemas: Designed and modeled MongoDB schemas to establish efficient one-to-many relationships for listings and reviews.

Implementing Server-Side Rendering (SSR): Utilized EJS to handle dynamic content, improving performance and SEO.

Writing Modular Middleware: Developed custom middleware for authentication, validation, and error handling, highlighting a focus on clean, maintainable code.

Using MVC Architecture: Applied the Model-View-Controller (MVC) architectural pattern to organize the codebase, enhancing maintainability and collaboration.

Project Structure
├── models/              # Mongoose schemas (Listing, Review)
├── routes/              # Express routers (listings, reviews)
├── views/               # EJS templates
│   ├── listings/        # index, show, new, edit
│   └── includes/        # Navbar, Footer
├── utils/               # Custom utilities (error handling, middleware)
├── public/              # Static assets (CSS, JS, images)
├── init/                # Database seeding script
├── app.js               # Main Express app entry point
├── package.json         # Project dependencies & scripts
└── README.md            # Documentation
Getting Started (Local Setup)
Prerequisites

Install Node.js

Install and run MongoDB locally

Installation

Bash

# Clone the repository
git clone https://github.com/sourabh7204/Airbnb_FullStack_Project.git
cd Airbnb_FullStack_Project

# Install dependencies
npm install
Environment Variables
Create a .env file in the root and add your MongoDB URL:

MONGO_URL=mongodb://127.0.0.1:27017/WanderLust
Seed the Database

Bash

node init/index.js
Start the Server

Bash

node app.js
Visit the application at 👉 http://localhost:8080

Deployment Guide (Render/Heroku)
Deploying to Render (Free Hosting)

Push your project to GitHub.

Go to Render → New → Web Service.

Connect your GitHub repo and select this project.

Set the following commands:

Build Command: npm install

Start Command: node app.js

Add MONGO_URL to your environment variables (using a cloud database like MongoDB Atlas is recommended).

Deploy! Render will provide a live URL.

Deploying to Heroku

Install the Heroku CLI: npm install -g heroku

Login: heroku login

Initialize Git (if not already done):

Bash

git init
git add .
git commit -m "Deploy WanderLust"
Create a Heroku app: heroku create wanderlust-clone

Set environment variables: heroku config:set MONGO_URL=<your_mongodb_atlas_url>

Deploy: git push heroku main

Visit the app: heroku open

API & Routes
Method	Route	Description
GET	/	Root route (test)
GET	/listings	Show all listings
GET	/listings/new	Form to create a new listing
POST	/listings	Add a new listing
GET	/listings/:id	View a single listing
GET	/listings/:id/edit	Edit a listing
PUT	/listings/:id	Update a listing
DELETE	/listings/:id	Delete a listing
POST	/listings/:id/reviews	Add a new review
DELETE	/listings/:id/reviews/:reviewId	Delete a review

Export to Sheets
Screenshots (UI Samples)
(Add screenshots for better presentation—recruiters love visuals!)

Home Page (Listings)

Create New Listing

Listing Details + Reviews

Edit Listing

Contributing
Want to improve or suggest features? Feel free to open an issue or a pull request!

Author
Sourabh Vishwakarma

GitHub: sourabh7204

LinkedIn: sourabh-vishwakarma
