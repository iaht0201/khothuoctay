const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Products = new Schema({
  name: { type: String, maxlength: 250 },
  image: { type: String },
  price: { type: String, maxlength: 20 },
  unit: { type: String },
});
module.exports = mongoose.model('Products', Products);
