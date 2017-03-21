var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({}, function(err){
  if(err){
    console.log(err);
  }
});

MenuItem.remove({}, function(err){
  if(err){
    console.log(err);
  }
});

var restaurant1 = new Restaurant({
  name: "Modern Market Eatery",
  address: {
    street: "1010 Vermont Ave NW",
    zipcode: 20005
  },
  yelp: "https://www.yelp.com/biz/modern-market-eatery-washington"
});
var restaurant2 = new Restaurant({
  name: "Potbellys",
  address: {
    street: "1701 Pennsylvania Ave NW",
    zipcode: 20006
  },
  yelp: "https://www.yelp.com/biz/potbelly-sandwich-shop-washington-13?osq=Potbelly+Sandwich+Shop"
});

var item1 = new MenuItem({
    title: "Steak Salad"
});
var item2 = new MenuItem({
    title: "Chicken Sandwich"
});
var item3 = new MenuItem({
    title: "Cheese Pizza"
});

var restaurants = [restaurant1, restaurant2];
var menuItems = [item1, item2, item3];

for(var i = 0; i < restaurants.lenght; i++){
  restaurants[i].menuItems.push(restaurants[i], menuItems[i+1]);
  restaurants[i].save(function(err, restaurant){
    if(err){
      console.log(err);
    } else {
      console.log(restaurant);
    }
  });
}
