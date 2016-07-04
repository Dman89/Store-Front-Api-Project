var mongoose = require('mongoose');
var superagent = require('superagent');
var _ = require('underscore');
var Category = require('./category');
var fx = require('./fx');
var product = {
  name: { type: String},
  weight: { type: Number, default: 0.2 },
  size: { type: Number, default: 1 },
  // Pictures must start with "http://"
  pictures: [{ type: String}],
  price: {
    amount: {
      type: Number,
      required: true,
      set: function(v) {
        this.internal.approximatePriceUSD =
          v / (fx()[this.price.currency] || 1);
        return v;
      }
    },
    // Only 3 supported currencies for now
    currency: {
      type: String,
      enum: ['USD', 'EUR', 'GBP'],
      required: true,
      set: function(v) {
        this.internal.approximatePriceUSD =
          this.price.amount / (fx()[v] || 1);
        return v;
      }
    }
  },
  category: Category.Category,
  internal: {
    approximatePriceUSD: Number
  },
  urlCode: {type: String, required: true, lowercase: true, unique: true},
  sku: {type: String, required: true, lowercase: true, unique: true}
};

var productSchema = new mongoose.Schema(product);

productSchema.index({ name: 'text', sku: 'text' });

var currencySymbols = {
  'USD': '$',
  'EUR': '€',
  'GBP': '£'
};

/*
 * Human-readable string form of price - "$25" rather
 * than "25 USD"
 */
productSchema.virtual('displayPrice').get(function() {
  return currencySymbols[this.price.currency] +
    '' + this.price.amount;
});
// add output price for grand total
productSchema.virtual('subTotal').get(function() {
  return this.price.amount;
});

productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });




var model = mongoose.model('Products', productSchema);
module.exports = model;
