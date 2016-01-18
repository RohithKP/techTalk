var LI = function() {
	this.tag = 'li';
	this.el  = document.createElement( this.tag );
	this.$el = $( this.el );

	this.render = function(todo) {
		var input,
			span;
		
		if ( todo.get('completed') ) {
			input = $('<input type="checkbox" "checked" />');
			span = $('<span><del>' + todo.get('text') + '</del></span>' );
		} else {
			input = $('<input type="checkbox" />');
			span = $('<span>' + todo.get('text') + '</span>' );
		};

		this.$el
			.append( input )
			.append( span );

		return this;
	};
};

var UL = function(todos) {
	this.tag = 'ul';
	this.el  = document.createElement( this.tag );
	this.$el = $( this.el );
	this.data = todos;

	this.render = function(root) {
		var li;

		this.data.each(function(todo) {
			li = new LI();
			li.render(todo);

			this.$el.append( li.$el );
		}.bind(this));

		root.append( this.$el );
	};
};


