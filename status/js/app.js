var projects = new Projects([{
	id: 1,
	value: 'SNT'
}, {
	id: 2,
	value: 'CM'
}, {
	id: 3,
	value: 'Savi'
}, {
	id: 4,
	value: 'Tolven'
}]);

var activities = new Activities([{
	id: 1,
	value: 'Coding'
}, {
	id: 2,
	value: 'Traning'
}, {
	id: 3,
	value: 'Testing'
}]);

var dates = new DateCollection([{
	id: 1,
	value: '10/01/15'
}, {
	id: 2,
	value: '11/01/15'
}, {
	id: 3,
	value: '12/01/15'
}]);

var allStatus=new StatusCollection();
lsdata = localStorage.getItem('allStatus');
if(!!lsdata){
	allStatus = new StatusCollection(JSON.parse(lsdata));
}
var root = new Root({
	"projects"   :projects,
	"activities" :activities,
	"dates"      :dates,
	/**/
	"allStatus"  :allStatus
});


root.render();




