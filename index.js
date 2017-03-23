var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;


// UN COMMENT CREATE, also put inside a function

// Restaurant.create({
//     name: 'Insomnia Cookies',
//     address: {
//         street: '2318 18th St NW',
//         zipcode: 20009
//     },
//     yelpUrl: 'https://www.yelp.com/search?find_desc=insomnia+cookies&find_loc=Washington%2C+DC'
// }, function(err, restaurant) {
//     (err) ? console.log(err): console.log(restaurant);
// });


function findByName(restaurant) {
    Restaurant.findOne({
        name: restaurant
    }, (err, rest) => {
        (err) ? console.log(err): console.log(rest);
    })
}

// findByName("The Blind Dog Cafe");

function findByZip(zip) {
    inZip = []
    Restaurant.find({}, (err, all) => {
        for (let i = 0, len = all.length; i < len; i++) {
            if (all[i].address.zipcode === zip) inZip.push(all[i])
        }
        console.log(inZip);
    })
}

// findByZip(20009);

function updateRestaurantName(restaurant, updatedName) {
    Restaurant.findOneAndUpdate({
        name: restaurant
    }, {
        name: updatedName
    }, {
        new: true
    }, (err, rest) => {
        (err) ? console.log(err): console.log(rest); // found here
    })
}
// updateRestaurantName("Insomnia Cookies", "Insomniac");

function deleteRestaurant(restaurant) {
    Restaurant.deleteOne({
        name: restaurant
    }, (err) => {
        (err) ? console.log(err): console.log("Success");
    })
}

deleteRestaurant("Insomniac");
