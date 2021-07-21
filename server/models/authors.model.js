const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
    {
        product: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
        },
        price: {
            type: Number,
            required: [true, "{PATH} is required."],
            minlength: [1, "{PATH} must be at least {MINLENGTH}."]
        },
        description: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlenght: [5, "{PATH} must be at least {MINLENGHT} characters."]
        },
    },
    { timestamps: true }
);

const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;