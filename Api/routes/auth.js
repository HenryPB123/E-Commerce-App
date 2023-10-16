const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js"); //For codding the password, It makes safer
const jwt = require("jsonwebtoken"); //to make the app saffer

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET), //encrypt the password
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

    if (!user) {
      res.status(401).json("Wrong credentials");
    } else {
      let hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SECRET
      );

      let originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: "365d" }
      );

      if (originalPassword !== req.body.password) {
        res.status(401).json("Wrong credentials");
      } else {
        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
