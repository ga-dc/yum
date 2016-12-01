var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var MenuItemSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [{type: ObjectId, ref: "MenuItemSchema"}]
})

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("MenuItem", MenuItemSchema);

module.exports = mongoose;
