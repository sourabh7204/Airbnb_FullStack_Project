# 🌍 WanderLust – Airbnb Full-Stack Clone

A **production-ready Airbnb clone** built with **Node.js, Express.js, MongoDB, and EJS**.  
WanderLust allows users to **explore, create, edit, and delete accommodation listings**, with **reviews, validations, and clean UI integration**.  

> 🚀 This project demonstrates **real-world full-stack development skills** — from REST APIs and database modeling to server-side rendering and error handling.  

🔗 **Live Demo**: [WanderLust on Render](https://airbnb-project-qk0s.onrender.com/listings)  
🔗 **GitHub Repo**: [Airbnb_FullStack_Project](https://github.com/sourabh7204/Airbnb_FullStack_Project)

---

## ✨ Key Features

- 🏡 Create, Read, Update, and Delete Listings  
- 📝 Add and manage Reviews with Joi validation  
- ⚠️ Centralized error handling using `ExpressError`  
- 🎨 Server-side rendering with **EJS + ejs-mate** layouts  
- 🔄 RESTful, modular route structure  
- 💾 MongoDB + Mongoose for persistent storage  
- 🧩 Middleware for validation and error handling  

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Templating:** EJS + ejs-mate (layout inheritance)  
- **Validation:** Joi  
- **Styling:** Bootstrap + custom CSS  
- **Dev Tools:** Nodemon, Method-Override  

---

## 📂 Project Structure

├── models/ # Mongoose schemas (Listing, Review)
├── routes/ # Express routers (listings, reviews)
├── views/ # EJS templates
│ ├── listings/ # index, show, new, edit
│ └── includes/ # Navbar, Footer
├── utils/ # Custom utilities (error handling, middleware)
├── public/ # Static assets (CSS, JS, images)
├── init/ # Database seeding script
├── app.js # Main Express app entry point
├── package.json # Project dependencies & scripts
└── README.md # Documentation

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- [Node.js](https://nodejs.org/) installed  
- [MongoDB](https://www.mongodb.com/try/download/community) running locally  

### Installation

```bash
# Clone the repository
git clone https://github.com/sourabh7204/Airbnb_FullStack_Project.git
cd Airbnb_FullStack_Project

# Install dependencies
npm install
```
##Environment Variables

Create a .env file in the root and add:
MONGO_URL=mongodb://127.0.0.1:27017/WanderLust
Seed the Database
bash
Copy code
node init/index.js
Start the Server
bash
Copy code
node app.js
Now open 👉 http://localhost:8080


##📡 API & Routes
Method	Route	Description
GET	/	Root route (test)
GET	/listings	Show all listings
GET	/listings/new	Form to create listing
POST	/listings	Add new listing
GET	/listings/:id	View single listing
GET	/listings/:id/edit	Edit listing form
PUT	/listings/:id	Update listing
DELETE	/listings/:id	Delete listing
POST	/listings/:id/reviews	Add review
DELETE	/listings/:id/reviews/:reviewId	Delete review

📸 Screenshots (UI Samples)
(Add screenshots for better presentation — recruiters love visuals!)

🏡 Home Page (Listings)

➕ Create New Listing

📝 Listing Details + Reviews

✏️ Edit Listing

📌 What I Learned
Designing MongoDB schemas & relationships

Building scalable RESTful APIs with Express

Implementing server-side rendering (SSR) with EJS

Writing modular middleware for validation & error handling

Applying MVC architecture for maintainability

🔮 ##Future Improvements
🔑 Add Authentication & Authorization (JWT or Passport.js)

📸 Image Uploads with Cloudinary or AWS S3

📅 Booking System (check-in/check-out, availability)

❤️ Wishlist & Favorites feature

📍 Integrate Google Maps API for location-based listings

🤝 ##Contributing
Want to improve or suggest features?
Feel free to open an issue or PR!

## 👨‍💻 Author  

**Sourabh Vishwakarma**  
- 🌐 [GitHub](https://github.com/sourabh7204)  
- 💼 [LinkedIn](https://www.linkedin.com/in/sourabh7204)  
