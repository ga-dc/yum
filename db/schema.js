<<<<<<< HEAD
// requiring mongoose dependency
var mongoose = require('mongoose')

// instantiate a name space for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

// defining schema for menuItems
var MenuItemSchema = new Schema({
  body: String
})

// defining schema for restuarants.
var RestaurantSchema = new Schema({
  name: String,
  menuItems: [MenuItemSchema]
})

// setting models in mongoose utilizing schemas defined above, we'll be using
// these frequently throughout our app
mongoose.model("Restaurant", RestaurantSchema)
mongoose.model("MenuItem", MenuItemSchema)
=======
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
>>>>>>> e31dd953459502f93e1ea32ad4e2908c5ce098ed
