var Todos = function(name) {
	this.name = name || 'Default Todos';
	this.uuid = Date.now() + '-' + this.name;
	this.collection = [];
};

Todos.prototype.add = function(text) {
	if ( 'string' !== typeof text ) {
		console.log( 'cant add anything other than stringed todos' );
		return;
	};

	this
		.collection
		.push( new Todo(text) );

	return this.collection;
};

Todos.prototype.each = function(callback) {
	var i, j;

	for (i = 0, j = this.collection.length; i < j; i ++) {
		callback( this.collection[i] );
	};
};
































var sum = function(x, y) {
	this.result = x + y;
};

sum(2, 3);
// window.result;

sum.call({}, 2, 3);
sum.apply({}, [2, 3]);












