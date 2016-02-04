
contacts.fetch();

if(contacts.models[0]== undefined){
contacts.create({
         name:'Rohith',
         mobile:'9496450009',
         imgUrl:'./img/rohith.jpg',
         order:contacts.nextOrder(),
         lastSeen:'just now',
         status:'good'
    });
contacts.create({
     name:'Rahul',
         mobile:'8281389083',
         imgUrl:'./img/rahul.jpg',
         order:'contacts.nextOrder()',
         lastSeen:'yesterday',
         status:'Well'
    });
contacts.create({
         name:'Rahina',
         mobile:'9496450009',
         imgUrl:'./img/rahina.jpg',
         order:'contacts.nextOrder()',
         lastSeen:'just now',
         status:'happy'
    }); 
}


var root = new ListView({
collection:contacts
});


$('#form-area').hide();

 
$('#newMessage').click(function (){
	msg = $('#message').val();
	if(msg!=""){
	chatlist.create({message:msg});	
	$('#message').val('');
	}else{alert('enter something')}


});