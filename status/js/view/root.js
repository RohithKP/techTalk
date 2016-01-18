var Root = Backbone.View.extend({
	el: '#root',

	initialize:function(options) {
		this.projects   = options.projects;
		this.activities = options.activities;
		this.dates      = options.dates;
		/**/
		this.allStatus  = options.allStatus;
	},

	render: function() {
		var statusForm = new StatusForm({
			"projects"   : this.projects,
			"activities" : this.activities,
			"dates"      : this.dates,
			/**/
			"allStatus"  : this.allStatus
		});

		var todoList = new TodoList({ collection: this.allStatus });

		this.$el.append( statusForm.render().el );
		this.$el.append( todoList.render().el );

		return this;
	}
});




