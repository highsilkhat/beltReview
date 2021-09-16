const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    size: {
        type: String,
        required: [true, "Size is required"],
        enum: ["small", "medium", "large", "extra large", "sheet"]
    },
    crust: {
        type: String,
        required: [true, "Crust is required"],
    },
    toppings: {
        type: [String],
        required: [true, "Topping(s) are required"] ,
    },
    sauce: {
        type: String,
        required: [true, "Sauce is required"],
    },
    numOrders: {
        type: Number,
        required: [true, "Number of orders is required" ],
        min: [1, "Must have at least 1 order"]
    },
    cheese: {
        type: String,
        required: [true, "Cheese type is required"]
    },
    readyBy: {
        type: Date,
        required: [true, "Ready by time is required"],
    },

}, {timestamps: true})

const Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;