var Dates = Backbone.Model.extend({
	defaults: {
		'id': '',
		'value': ''
	}
});

var DateCollection = Backbone.Collection.extend({
	model: Dates,
	url: '/app/get-dates'
});
