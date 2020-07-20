const Product = require("../models/Product");

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }));
};

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(thisProduct => res.json({ product: thisProduct }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }));
};

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }));
};
// module.exports.example = (req, res) => {
//     Product.example()
//         .then()
//         .catch();
// };
