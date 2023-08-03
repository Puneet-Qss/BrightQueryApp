const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://brightquery:bq2023@cluster0.lxx7ku3.mongodb.net/brightQueryDB?retryWrites=true&w=majority"  )
  .then(() => {
    console.log("Database connected Succesfully!");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

module.exports = mongoose;