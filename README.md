# 🌍 WanderLust - Airbnb FullStack Clone

Welcome to **WanderLust**, a full-stack clone of Airbnb built using **Node.js**, **Express.js**, **MongoDB**, and **EJS** templating. This project lets users explore, create, edit, and delete travel accommodation listings — all wrapped in a clean UI and powerful backend.

![Project Preview](./path-to-your-screenshot.png)

---

## ✨ Features

- 📝 Create, Read, Update, and Delete Listings
- 🛠 Custom error handling with `ExpressError`
- 💬 Review system with validation using Joi
- 🌐 Server-side rendering using EJS
- ⚙️ RESTful routes & clean code structure
- 📁 MongoDB-backed data persistence
- 💡 Middleware for validation, error handling, and routing

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Templating Engine**: EJS with `ejs-mate` for layout inheritance
- **Validation**: Joi for schema validation
- **Styling**: Custom CSS (public folder) or Bootstrap (optional)
- **Dev Tools**: Nodemon, Method-Override

---

## 📁 Project Structure

```
├── models/              # Mongoose schemas for Listing & Review
├── routes/              # Express routers for modular route handling
├── views/               # EJS views (layouts, includes, listings, error pages)
│   ├── listings/        # index, show, new, edit views
│   └── includes/        # Navbar and Footer
├── utils/               # Reusable utilities like error handlers
├── public/              # Static assets (CSS, JS, images)
├── init/                # DB seeding script with sample data
├── app.js               # Main Express app
├── package.json         # Project metadata and dependencies
└── README.md            # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sourabh7204/Airbnb_FullStack_Project.git
   cd Airbnb_FullStack_Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file (optional) and set:

   ```env
   MONGO_URL=mongodb://127.0.0.1:27017/WanderLust
   ```

4. Seed the database:

   ```bash
   node init/index.js
   ```

5. Start the server:

   ```bash
   node app.js
   ```

6. Visit `http://localhost:8080` in your browser.

---

## 🧪 Routes Overview

| Method | Route | Description |
|--------|-------|-------------|
| GET    | `/`   | Root Test Route |
| GET    | `/listings` | Show all listings |
| GET    | `/listings/new` | Form to create new listing |
| POST   | `/listings` | Submit new listing |
| GET    | `/listings/:id` | Show single listing |
| GET    | `/listings/:id/edit` | Edit form |
| PUT    | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |
| POST   | `/listings/:id/reviews` | Add a review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete review |

---

## 🖼 Screenshots

*You can update this section with screenshots of `index`, `new`, `show`, and `edit` views from your app.*

---

## 🤝 Contributing

If you'd like to contribute or suggest features, feel free to open an issue or pull request!

---

## 🙋‍♂️ Author

**Sourabh Vishwakarma**  
[GitHub Profile](https://github.com/sourabh7204)

---

