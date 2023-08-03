const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./db");
const UserSchema = require('./models/User');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the UserSchema to create the User model
const User = mongoose.model('User', UserSchema);

app.post("/users", async (req, res) => {
    const username = req.body.username;

    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        console.log("User already exists:", existingUser);
        return res.status(400).json({ error: "User already exists" });
      }
  
      let user = new User();
      user.username = username;
      user.password = req.body.password;
      const doc = await user.save();
      
      console.log("User created:", doc);
    
      res.json(doc);

    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "An error occurred while creating the user." });
    }
  });
  
app.listen(8080, () => {
  console.log("Server is Listening on the PORT.");
});
