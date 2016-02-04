var ChatModel = Backbone.Model.extend({
    defaults:function() {
      return {
      	   threadId:app.id,
           receiver:app.receiver,
           sender:"",
           message:"" ,
           date:Date.now()
     };
    }
	});

ChatColl = Backbone.Collection.extend({
	model:ChatModel,

	localStorage: new Backbone.LocalStorage("ChatCollection"),
	now:function () {
		return Date.now();
	},
 	comparator:'date'
});

chatlist = new ChatColl;

// chatlist.create(
// {
// sender:"Rohith",
// receiver:"someone",
// message:"Hey there"
// });
