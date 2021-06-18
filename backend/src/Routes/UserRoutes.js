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

});

// LOGIN ROUTE
router.post('/login', async(req, res) => {

    // CHECKING IF OUR USER'S EMAIL IS VALID
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Invalid Email or Password.');

    // CHECKING IF OUR PASSWORD IS VALID
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Invalid Email or Password.");

    // CREATING AND ASSIGNING A JWT TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
    res.header('auth-token', token).send(token);

    res.send("Welcome back " + user.name + " to VincetheKid!")
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
  const user = User.findById(req.params.id);

  // VALIDATING OUR USER

  const { error } = ValidateUpdatedUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // CHECKING IF OUR USER EXISTS

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email Already Exists.");

  // HASHING PASSWORD 

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

 // UPDATING THE USER

  User.updateOne(user, {
    email: req.body.email,
    username: req.body.username,
    password: hashedPassword,
  })
    .then(console.log("Updated Account."))
    .then(res.status(200).send("Updated Account."))
    .catch(err => res.status(400).send(err));

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
router.delete('/user/:id', (req, res) => {
    try{ 
        const user = User.findByIdAndDelete(req.params._id);
        res.send("Deleted User: " + user.name);
        console.log("Deleted User: " + user.name);
    }
    catch(err){
        res.json({ message: err })
    }
})

module.exports = router;