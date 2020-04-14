const adminUser = require("../api/admin/user");
const user = require("../api/public/user");
const adminProduct = require("../api/admin/product");
const product = require("../api/public/product");
const booking = require("../api/public/booking");
// const auth = require('./../middlewares/auth');


module.exports = app => {
    app.use("/admin", adminUser);
    app.use("/api", user);
    app.use("/admin", adminProduct);
    app.use("/api", product);
    //app.use("/api/products/field", product);
    app.use("/api", booking);
};