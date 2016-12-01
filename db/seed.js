var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var ItemModel = Schema.ItemModel;


RestaurantModel.remove({}, function(err){
  console.log(err);
});
ItemModel.remove({}, function(err){
  console.log(err);
});

var sandovan = new RestaurantModel({
  name: "Sandovan's Restaurant and Lounge",
  address : {
    street : "4809 Georgia Avenue NW",
    zipcode : 20010,
  },
  yelpUrl: "http://www.yelp.com/biz/sandovans-restaurant-and-lounge-washington",
  items: []
});

var johnnyCarryout = new RestaurantModel({
  name: "Johnny's Carryout",
  address : {
    street : "3445 14th Street NW",
    zipcode : 20010,
  },
  yelpUrl: "http://www.yelp.com/biz/johnnys-carryout-washington",
  items: []
});

var cheesesteak = new ItemModel({title: "Cheesesteak"});
var jerkChicken = new ItemModel({title: "Jerk Chicken"});
var wings = new ItemModel({title: "Wings with Mumbo Sauce"});
var plantains = new ItemModel({title: "Fried Plantains"});

var restaurants = [johnnyCarryout, sandovan];
var items = [cheesesteak, jerkChicken, wings, plantains];

for (i = 0; i < restaurants.length; i++) {
  restaurants[i].items.push(items[i], items[i + 2]);
  restaurants[i].save();
  console.log(restaurants);
}
