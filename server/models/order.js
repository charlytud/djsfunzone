const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  product:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true
  },
  unityPrice: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order };

