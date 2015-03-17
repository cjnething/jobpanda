/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Field = db.Model.extend({
	tablename: 'fields',
	listings: function(){
		return this.hasMany(Listing);
	}
});

module.exports = Field;