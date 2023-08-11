const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js"); //For codding the password, It makes safer

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.DES.encrypt(
      req.body.password,
      process.env.PASS_SECRET.toString()
    ), //encrypt the password
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(username.password, PASS_SECRET); //Decrypt the password
    console.log("hhhhh", user);

    const password = hashedPassword.toString(CryptoJS.enc.Utf8); //In case there is a special character

    console.log("password", password);
    !password !== req.body.password &&
      res.status(401).json("Wrong credentials!");
    //!ARREGLAR
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
