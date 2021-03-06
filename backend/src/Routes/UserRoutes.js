const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

// Exported Models

const User = require('../Models/User');

// Exported Authentication 

const { ValidateUser }  = require('../Auth/ValidateUser');
const { ValidateUpdatedUser }  = require('../Auth/ValidateUpdatedUser');

// REGISTER ROUTE
router.post('/register', async (req, res) => {
  try{
    // VALIDATING OUR USER
    const { error } = ValidateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // CHECKING IF OUR USER EXISTS
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email Already Exists.');

    // HASH PASSWORDS
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // CREATING OUR NEW USER
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword
    });

    // SAVING OUR USER AND SENDING IT
    try{
        const savedUser = await user.save();
        res.send(JSON.stringify(savedUser));
    } catch(err){
        res.status(400).send(err);
    }
  }catch(err){
    console.log(err);
  }
});

// LOGIN ROUTE
router.post('/login', async(req, res) => {
  try {
    // CHECKING IF OUR USER'S EMAIL IS VALID
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid Email or Password.");

    // CHECKING IF OUR PASSWORD IS VALID
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      console.log("Invalid Email or Password");
      return res.status(400).send("Invalid Email or Password.");
    }

    // CREATING AND ASSIGNING A JWT TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN, {
      expiresIn: "7 Days",
    });

    res.header("verification-token", token).send(token);

    res.status(200).send("Welcome back, " + user.username);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GETTING A SPECIFIC USER
router.get('/user/:id', async(req, res) => { 
    try{ 
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch(err){
        res.json({ message: "Page not Found. Error 404.", error: err });
    }
});

// Updating User Account Details
router.put("/me/:id", async (req, res) => {
  try{
    const user = User.findById(req.params.id);

    // VALIDATING OUR USER
  
    const { error } = ValidateUpdatedUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    // HASHING PASSWORD 
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
   // UPDATING THE USER
  
    User.updateOne(user, {
      username: req.body.username,
      password: hashedPassword,
    })
      .then(console.log("Successfully Updated Account."))
      .then(res.status(200).send("Successfully Updated Account."))
      .catch(err => res.status(400).send(err));
  } catch(err){
      console.log(err);
      res.send(err);
  }
});

// Setting an Admin

router.put("/setadmin/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await User.updateOne(user, {
      isAdmin: req.body.isAdmin,
    })
      .then(res.status(200).send({ status: "Success", user: user.name }));
  } catch (err) {
    res.status(400).send(err);
  }
});

// Deleting a User
router.delete('/delete/user/:id', async(req, res) => {
    try{ 
        const user = await User.findByIdAndDelete(req.params.id);
        res.send("Deleted User: " + user.username);
        console.log("Deleted User: " + user.username);
    }
    catch(err){
        res.json({ message: err })
    }
})

module.exports = router;