// Export all models as well as db connection itself
const theDbConnection = require('./_db');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Place = require('./place');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
    db: theDbConnection,
    Hotel: Hotel,
    Restaurant: Restaurant,
    Activity: Activity,
    Place: Place
};