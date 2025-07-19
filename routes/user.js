const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post("/signup", async (req, res) => {
  let { username, email, password } = req.body;
  const newUser = new UserActivation({ email, username });
  const registerUser = await User.register(newUser, password);
  console.log(registerUser);
  req.flash("success", "Welcome to Wanderlust!");
  res.redirect("/listings");
});

module.exports = router;
