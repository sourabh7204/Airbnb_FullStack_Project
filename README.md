🌍 WanderLust – Airbnb Full-Stack Clone

A production-ready Airbnb clone built with Node.js, Express.js, MongoDB, and EJS.
WanderLust allows users to explore, create, edit, and delete accommodation listings, with reviews, validations, and clean UI integration.

🚀 This project demonstrates real-world full-stack development skills — from REST APIs and database modeling to server-side rendering and error handling.

🔗 Live Demo: WanderLust on Render

🔗 GitHub Repo: Airbnb_FullStack_Project

✨ Key Features

🏡 Listings CRUD → Create, Read, Update, Delete listings

📝 Reviews with Validation → Add & manage reviews (Joi validation)

⚠️ Custom Error Handling → Centralized error system (ExpressError)

🎨 Dynamic UI → Server-side rendering with EJS + ejs-mate layouts

🔄 RESTful Routing → Clean, scalable, modular route structure

💾 MongoDB Persistence → Data stored & retrieved with Mongoose

🧩 Middleware Support → Validation, routing, and error handling

🧰 Tech Stack

Backend: Node.js, Express.js, MongoDB, Mongoose
Templating: EJS + ejs-mate (layout inheritance)
Validation: Joi (schema validation)
Styling: Bootstrap + custom CSS (from public/)
Dev Tools: Nodemon, Method-Override

📂 Project Structure
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

🚀 Getting Started (Local Setup)
Prerequisites

Install Node.js

Install and run MongoDB
 locally

Installation
# Clone the repository
git clone https://github.com/sourabh7204/Airbnb_FullStack_Project.git
cd Airbnb_FullStack_Project

# Install dependencies
npm install

Environment Variables

Create a .env file in the root and add:

MONGO_URL=mongodb://127.0.0.1:27017/WanderLust

Seed the Database
node init/index.js

Start the Server
node app.js


Visit 👉 http://localhost:8080

☁️ Deployment Guide (Render/Heroku)
Deploying to Render (Free Hosting)

Push your project to GitHub.

Go to Render
 → New → Web Service.

Connect your GitHub repo and select this project.

Set:

Build Command:

npm install


Start Command:

node app.js


Environment Variables:
Add MONGO_URL (use MongoDB Atlas for cloud DB).

Deploy 🎉 → Render will give you a live URL.

Deploying to Heroku

Install the Heroku CLI:

npm install -g heroku


Login:

heroku login


Initialize Git (if not already):

git init
git add .
git commit -m "Deploy WanderLust"


Create a Heroku app:

heroku create wanderlust-clone


Set environment variable:

heroku config:set MONGO_URL=<your_mongodb_atlas_url>


Deploy:

git push heroku main


Visit:

heroku open

📡 API & Routes
Method	Route	Description
GET	/	Root route (test)
GET	/listings	Show all listings
GET	/listings/new	Form to create a listing
POST	/listings	Add a new listing
GET	/listings/:id	View single listing
GET	/listings/:id/edit	Edit listing form
PUT	/listings/:id	Update a listing
DELETE	/listings/:id	Delete listing
POST	/listings/:id/reviews	Add review
DELETE	/listings/:id/reviews/:reviewId	Delete review
📸 Screenshots (UI Samples)

(Add screenshots for better presentation — recruiters love visuals!)

Home Page (Listings)

Create New Listing

Listing Details + Reviews

Edit Listing

📌 What I Learned

Building scalable RESTful APIs with Express

Designing MongoDB schemas & relationships

Implementing server-side rendering (SSR) with EJS

Writing modular middleware for validation & error handling

Using MVC architecture for maintainability

🤝 Contributing

Want to improve or suggest features?
Feel free to open an issue or PR!

👨‍💻 Author

Sourabh Vishwakarma

🌐 GitHub

💼 LinkedIn
