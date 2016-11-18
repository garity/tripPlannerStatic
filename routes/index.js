const express = require('express');
const router = express.Router();
module.exports = router;
const Promise = require('bluebird');
const Models = require('../models');
const Activity = Models.Activity;
const Hotel	= Models.Hotel;
const Restaurant = Models.Restaurant;

router.get('/', function (req, res, next) {
	const all = Promise.all([
		Hotel.findAll({}),
		Restaurant.findAll({}),
		Activity.findAll({})
		])
	.then(function(items){
		res.render('index', {
	    hotels: items[0],
	    restaurants: items[1],
	    activities: items[2],
	  });
	});
 //    var outerScopeContainer = {};
	// Hotel.findAll()
	// .then(function (dbHotels) {
	//   outerScopeContainer.dbHotels = dbHotels;
	//   return Restaurant.findAll();
	// })
	// .then(function (dbRestaurants) {
	//   outerScopeContainer.dbRestaurants = dbRestaurants;
	//   return Activity.findAll();
	// })
	// .then(function (dbActivities) {
	//   res.render('index', {
	//     hotels: outerScopeContainer.dbHotels,
	//     restaurants: outerScopeContainer.dbRestaurants,
	//     activities: dbActivities
	//   });
	// })
	// .catch(next);
    
});