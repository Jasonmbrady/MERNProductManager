const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB!"))
    .catch(err => console.log("Unable to connect", err));