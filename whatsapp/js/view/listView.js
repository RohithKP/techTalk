var ListView = Backbone.View.extend({
	tagName:"ul",

	events:{
    
	},
initialize:function(){
this.Contacts = this.collection;	
this.listenTo(this.Contacts,'add',this.addOne);
this.listenTo(this.Contacts,'reset',this.addAll);
this.addAll();
},

render:function(){
	if(this.Contacts.legth){

	}
},

addOne:function(contact){
var view = new ContactView({model:contact});
this.$el.append(view.render().el);
// this.model.save({title:  $(".editing #title").val(),email:$(".editing #email").val(),mobile:$(".editing #mobile").val()});
console.log(contact.get('order'));
$('#container').html(this.$el);
},

addAll:function(){
	this.Contacts.each(this.addOne,this);
},

});