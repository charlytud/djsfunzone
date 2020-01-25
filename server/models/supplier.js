const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  contactName: {
    type: String,
    required: true
  },
  contactTitle: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
    default: 'n/a'
  },
  city: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true,
    default: 'n/a'
  },
  postalCode: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  fax: {
    type: Number,
    required: true
  },
  homePage: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = { Supplier };

