const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pizza_belt_review", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Tank, I'm in!"))
    .catch(err=>console.log("Tank, I need an exit!", err))