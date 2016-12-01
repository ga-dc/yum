var mongoose = require("mongoose");
var Schema   = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuModel       = Schema.MenuModel



var item1 = new MenuModel({title: "The Big Veggie Salad"});
var item2 = new MenuModel({title: "Turkey Burger"});
var item3 = new MenuModel({title: "Roasted Chicken"});
var item4 = new MenuModel({title: "Pop Tarts"});
var item5 = new MenuModel({title: "Greek Salad"});
var item6 = new MenuModel({title: "Patatas Fritas"});
var item7 = new MenuModel({title: "Veggie Burger"});
var item8 = new MenuModel({title: "Sweet Potato Fries"});
var item9 = new MenuModel({title: "Nachos"});
var item10 = new MenuModel({title: "Mac & Cheese"});
var item11 = new MenuModel({title: "Flatbread Pizza"});
var item12 = new MenuModel({title: "Chicken Fajitas"});

var restaurant1 = new RestaurantModel({name: "Commissary", address: { street: "P Street", zipcode: 20005}, yelp_url: "http://www.yelp.com/biz/commissary-washington", items: [item1, item2,item12, item8]});
var restaurant2 = new RestaurantModel({name: "Tryst", address: { street: "18th Street", zipcode: 20009}, yelp_url: "http://www.yelp.com/biz/tryst-washington", items: [item7, item11, item5, item9]});
var restaurant3 = new RestaurantModel({name: "Barcelona", address: { street: "14th Street", zipcode: 20005}, yelp_url: "http://www.yelp.com/biz/barcelona-14th-street-washington", items: [item3, item6]});
var restaurant4 = new RestaurantModel({name: "Ted's Bulletin", address: { street: "14th Street", zipcode: 20009}, yelp_url: "http://www.yelp.com/biz/teds-bulletin-washington-3", items: [item4, item10]});



var items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];
var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4]
