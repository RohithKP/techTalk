var contacts = new ContactList();
var collection = new ContactList();

// contacts.create({
//          name:'Rohith',
//          mobile:'9496450009',
//          imgUrl:'./img/rohith.jpg',
//          order:contacts.nextOrder(),
//          lastSeen:'just now',
//          status:'fck'
//     });
//     contacts.create({
//          name:'Rahul',
//          mobile:'8281389083',
//          imgUrl:'./img/rahul.jpg',
//          order:'contacts.nextOrder()',
//          lastSeen:'yesterday',
//          status:'Well'
//     });
//     contacts.create({
//          name:'Rahina',
//          mobile:'9496450009',
//          imgUrl:'./img/rahina.jpg',
//          order:'contacts.nextOrder()',
//          lastSeen:'just now',
//          status:'happy'
//     }); 

collection.fetch();
var root = new ListView({
collection:collection
});




 
