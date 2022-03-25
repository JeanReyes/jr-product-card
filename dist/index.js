
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./jr-product-card.cjs.production.min.js')
} else {
  module.exports = require('./jr-product-card.cjs.development.js')
}
