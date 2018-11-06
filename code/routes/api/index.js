const router = require("express").Router();
const productRoutes = require("./products.js");

router.use("/products", productRoutes);

module.exports = router;