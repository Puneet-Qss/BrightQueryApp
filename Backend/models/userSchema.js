const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least six characters long"],
  },
 
},
{
    timestamp : true
}
);

module.exports = mongoose.model("User", userSchema);
