const router = require("express").Router();
const productRoutes = require("./products.js");
const orderRoutes = require("./order.js");
const userRoutes = require("./users.js")

router.use("/products", productRoutes);
router.use("/orders", orderRoutes)
router.use("/users", userRoutes)

module.exports = router;