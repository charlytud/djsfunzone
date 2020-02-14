const adminUser = require("../api/admin/user");
const user = require("../api/public/user");
const adminProduct = require("../api/admin/product");
const product = require("../api/public/product");
// const adminSupplier = require("../api/admin/supplier");
// const supplier = require("../api/public/supplier");

module.exports = app => {
    app.use("/admin", adminUser);
    app.use("/api", user);
    app.use("/admin", adminProduct);
    app.use("/api", product);
    //app.use("/api/products/field", product);
    app.use("/api/", product);
    // app.use("/admin/supplier", adminSupplier);
    // app.use("/api/suppliers", supplier);
    // app.use("/api/", supplier);
};