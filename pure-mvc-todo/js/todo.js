var Todo = function(text) {
	this.attr = {
		id: Date.now(),
		text: text || 'Default text',
		completed: false
	};
	this.changed = {
		key: '',
		last_value: ''
	};
};

Todo.prototype.get = function(key) {
	if ( this.attr.hasOwnProperty(key) ) {
		return this.attr[key];
	} else {
		return false;
	}
};

Todo.prototype.set = function(key, value) {
	if ( this.attr.hasOwnProperty(key) ) {
		this.changed.key = key;
		this.changed.last_value = this.attr[key];

		this.attr[key] = value;

		// $(window).trigger('todo.changed', {
		// 	key: this.changed.key,
		// 	last_value: this.changed.last_value,
		// 	payload: this.attr
		// })

		return this.attr[key];
	} else {
		return false;
	}
};

