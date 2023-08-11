const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//Routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const app = express();
dotenv.config(); //Allows you  read variables that come from .env file

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection successfull!!"))
  .catch((error) => console.log(error));

app.use(express.json());

app.use("/api/", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server running");
});
