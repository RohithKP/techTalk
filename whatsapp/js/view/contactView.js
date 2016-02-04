var app = {};
var ContactView = Backbone.View.extend({
	tagName:"li",

	template:_.template($('#item-template').html()),

	events:{
    "click":"open",
    "change":"save",
    // "click .destroy":"clear"
	},
    open:function(){
        app.id = this.model.id;
        app.receiver = this.model.get('name');
        chatlist.fetch();
        $('#form-area').show();
        var x =new ChatList({collection:chatlist});
    },
	render:function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

    // save:function(){
    //   this.model.save({title:  $(".editing #title").val(),email:$(".editing #email").val(),mobile:$(".editing #mobile").val()});
    // },

    clear:function(){
    	this.model.destroy();
    }

});