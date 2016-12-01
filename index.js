var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.create({ name: "Sensitivo's", "address.zipcode": 20001}, function (err, restaurant) {
  if (err) return handleError(err);
  console.log("We created", restaurant.name, 'in', restaurant.address.zipcode);
});

function findByName(restaurant) {
  Restaurant.findOne({name: restaurant}, function(err, result) {
    if(err) {
      console.log(err);
    }
    else {
      console.log(result);
    }
  });
}

function findByZip(zipcode) {
  results = [];
  Restaurant.find({}, function(err, docs) {
    docs.forEach(function(rest) {
      if(rest.address.zipcode === zipcode) {
        results.push(rest);
      }
    });
    console.log(results);
  });
}

function update(restaurant, update) {
  Restaurant.findOneNUpdate({name: restaurant}, {name: update}, {new: true}, function(err, docs) {
    if(err) {
      console.log(err);
    }
    else {
      console.log(docs);
    }
  });
}

function destroy(restaurant) {
  Restaurant.findOneNRemove({name: restaurant}, function(err, docs) {
    if(err) {
      console.log(err);
    }
    else {
      console.log(docs + " was deleted");
    }
  });
}

function addItem(restaurant, item) {
  Restaurant.findOne({name: restaurant}, function(err, docs) {
    docs.items.push(new MenuItem({title: item}));
    docs.save(function(err, results) {
      if(err) {
        console.log(err);
      }
      else {
        console.log(results);
      }
    });
  });
}

function removeItem(restaurant, item) {
  Restaurant.findOneNUpdate({name: restaurant}, {
    $pull: { items: {title: item} }
  },
  {new: true}, function(err, docs) {
    if(err) {
      console.log(err);
    }
    else {
      console.log(docs);
    }
  });
}
