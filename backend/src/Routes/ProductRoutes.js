const router = require("express").Router();
const jwt = require("jsonwebtoken");

// Exported Components

const Product = require('../Models/Product');
const ValidateProduct = require("../Auth/ValidateProduct");

router.post('/create', (req, res) => {
    // VALIDATING OUR POST

    const { error } = ValidateProduct(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // CHECKING IF OUR POST EXISTS
    const titleExists = await User.findOne({title: req.body.title});
    if(titleExists) return res.status(400).send('Product Name Already Exists.');

    // CREATING OUR NEW POST
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        countInStock: req.body.countInStock
    });

    // SAVING OUR POST AND SENDING IT
    try{
        const savedProduct = await product.save();
        res.send(JSON.stringify(savedProduct));
    } catch(err){
        res.status(400).send(err);
    }
});

// GETTING A SPECIFIC PRODUCT

router.get('/item/:id', async(req, res) => { 
    try{ 
        const product = await Product.findById(req.params.id);
        res.json({ type: "Success", payload: product, msg: "Successfully Got a Product" });
    }
    catch(err){
        res.json({ message: "Page not Found. Error 404.", error: err });
    }
})

// GETTING ALL PRODUCTS

router.get('/products', () => {
    Product.find({}, (err, products) => {
        if (err) {
      console.log({ type: "Error", payload: err, msg: "Failed to get the Products... Please try again." });
    } else {
      res.json({ type: "Success", payload: products, msg: "Successfully Got All of The Products."});
    }
    })
})

router.put('/update/:id', (req, res) => {
    // FINDING OUT PRODUCT
    const product = Product.findById(req.params.id);

    // VALIDATING OUR USER

    const { error } = ValidateProduct(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // CHECKING IF OUR USER EXISTS

    const titleExists = await User.findOne({ title: req.body.title });
    if (titleExists) return res.status(400).send("Product name Already Exists.");

    // UPDATING THE USER

    Product.updateOne(product, {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        countInStock: req.body.countInStock
    })
        .then(console.log("Successfully Updated Product."))
        .then(res.status(200).send("Successfully Updated Product."))
        .catch(err => res.status(400).send(err));
});

// DELETING THE PRODUCT

router.delete('/delete/:id', (req, res) => {
    try{ 
        const product = User.findByIdAndDelete(req.params.id);
        res.send({ type: "Success", msg: "Successfully Deleted Product: " + product.title });
        console.log("Deleted Product: " + product.title);
    }
    catch(err){
        res.json({ type: "Error", msg: err })
    }
})

module.exports = router;