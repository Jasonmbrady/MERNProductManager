const express = require('express');
const app = express();
const cors = require("cors");
require("./server/config/database")
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const ProductRoutes = require("./server/routes/product-routes");
ProductRoutes(app);




app.listen(8000, () => console.log("listening on port 8000"));