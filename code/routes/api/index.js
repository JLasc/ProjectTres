const router = require("express").Router();
const productRoutes = require("./products.js");
const orderRoutes = require("./order.js");
const userRoutes = require("./user.js")

router.use("/products", productRoutes);
router.use("/orders", orderRoutes)
router.use("/user", userRoutes)

module.exports = router;