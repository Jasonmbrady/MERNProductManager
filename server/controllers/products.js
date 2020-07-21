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

module.exports.updateProduct = (req, res) => {
    Product.update({ _id: req.params.id }, req.body, { new: true })
        .then(thisProduct => res.json({ product: thisProduct }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }));
};

module.exports.delete = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(thisProduct => res.json({ product: thisProduct }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }));
};
