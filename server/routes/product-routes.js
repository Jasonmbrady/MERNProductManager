const ProdController = require("../controllers/products");

module.exports = app => {
    app.get("/api/products", ProdController.getAllProducts);
    app.get("/api/products/:id", ProdController.getOneProduct);
    app.post("/api/products", ProdController.createProduct);

};