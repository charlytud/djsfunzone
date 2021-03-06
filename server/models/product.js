const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  rate:{
    type: Number,
    required: true
  },
  picture:{
    type: String,
    required: false
  }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };

