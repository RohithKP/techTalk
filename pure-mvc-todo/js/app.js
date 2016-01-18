var todos = new Todos('todos');

todos.each(function(todo) {
	todo.set('completed', true);
});

var ul = new UL(todos);

$('#addTodo').click(addTodo);

var  = function addTodo(){
	var value =  $('#todoItem').val();
	todos.add(value);
	window.ul.render( $('#root') );
};