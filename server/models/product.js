const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName:{
    type: String,
    required: true
  },
  supplierId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  quantityPerUnit: {
    type: Number,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  unitsInStock: {
    type: Number,
    required: true
  },
  unitsInOrder: {
    type: Number,
    required: true
  },
  reorderLevel: {
    type: Number,
    default: 0
  },
  discontinued: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };

