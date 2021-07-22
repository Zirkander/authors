const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        // price: {
        //     type: Number,
        //     required: [true, "{PATH} is required."],
        //     minlength: [1, "{PATH} must be at least {MINLENGTH}."]
        // },
        // description: {
        //     type: String,
        //     required: [true, '{PATH} is required.'],
        //     minlenght: [5, "{PATH} must be at least {MINLENGHT} characters."]
        // },
    },
    { timestamps: true }
);

const Authors = mongoose.model("Authors", AuthorsSchema);
module.exports = Authors;