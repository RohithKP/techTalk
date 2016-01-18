var TodoRow = Backbone.View.extend({
    tagName: 'li',
    
    className: 'todo-item',

    initialize: function() {
        // this.listenTo(this.model, 'change', this.render.bind(this, arg1 arg1) );
    },

    render: function() {
        this.$el.append( '<span><label>Project: </label>' + this.model.get('project_id') + '</span>&nbsp;&nbsp;' );
        this.$el.append( '<span><label>Activity: </label>' + this.model.get('activity_id') + '</span>&nbsp;&nbsp;' );
        this.$el.append( '<span><label>Date: </label>' + this.model.get('date') + '</span>&nbsp;&nbsp;' );
        this.$el.append( '<span class="block_span"><label></label><p>' + this.model.get('description') + '</p></span>&nbsp;&nbsp;' );

        return this;
    }
});


var TodoList = Backbone.View.extend({
    tagName: 'ul',

    className: 'todo-list',

    // listen to the collection for addition/deletion and re-render
    initialize: function() {
        this.listenTo(this.collection, 'add', this.render);
        this.listenTo(this.collection, 'remove', this.render);
    },

    render: function() {
        var listItem,
            html = [];
        html.push('<h3>My History</h3>');
        this.collection.each(function(todo) {
            listItem = new TodoRow({
                model: todo
            });
            html.push( listItem.render().el )
        });

        this.$el.html( html );

        return this;
    }
});