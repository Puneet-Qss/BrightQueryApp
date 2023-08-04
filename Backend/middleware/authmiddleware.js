const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.header.authorization.startsWith("Beared")
  ) {
    try {
      // get token from header

      token = req.headers.authorization.split(" ")[1];

      // verify
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(404)
      throw new Error('Not Authorised')
    }

    if(!token){
        res.status(401)
        throw new Error('Not Authorized , no token')
    }
  }
});

module.exports = { protect };
