// Frontend Products Types

// const products: {
//     _id: number;
//     title: string;
//     description: string;
//     image: string;
//     price: string;
//     countInStock: number;
// }[]

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true },

    description: { type: String, required: true },

    image: {type: String, required: true},

    price: {type: Number, required: true},

    countInStock: {type: Number, required: true}
})

module.exports = mongoose.model('User', UserSchema);