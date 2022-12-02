const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone:req.body.phone,
    password: 
    CryptoJS.AES.encrypt(req.body.password,
      process.env.PASS_SEC
      ).toString(),
    });
    
    try {
      const savedUser = await newUser.save();
      console.log(savedUser)
      
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log("hi kartikey",user)
    !user && res.status(401).json("Wrong credentials!");
    console.log("hasasgsgha")
    
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
      ); 
      
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      // user.password;
      
      OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");
      
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
        );
        
        const { password, ...others } = user._doc;
        
    res.status(200).json({...others, accessToken});
    // res.status(200).json({...others});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
