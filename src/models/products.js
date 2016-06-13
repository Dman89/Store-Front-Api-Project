var mongoose = require('mongoose');
var Category = require('./category');
var fx = require('./fx');
var product = {
  name: { type: String, required: true },
  // Pictures must start with "http://"
  pictures: [{ type: String, match: /^http:\/\//i }],
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
  urlCode: {type: String, required: true, lowercase: true, unique: true}
};

var productSchema = new mongoose.Schema(product);

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

productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });

var model = mongoose.model('Products', productSchema);
module.exports = model;
