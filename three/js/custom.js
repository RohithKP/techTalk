var camera;
var scene;
var renderer;
var material;
var texloader;


init();
// animate();

function init(){

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1000);
    var geometry = new THREE.CylinderGeometry( 6, 6, 13, 30,30,true,0,6.3 );
    texloader = new THREE.TextureLoader();
		tex = texloader.load(
			// resource URL
			'img/don.jpg'
		);

	var material = new THREE.MeshBasicMaterial(  {
			map: tex,
			transparent: false,
			depthTest: true,
			depthWrite: true,
			polygonOffset: true,
			polygonOffsetFactor: - 4,
			wireframe: false
		} );

	cylinder = new THREE.Mesh(geometry, material);
	cylinder.position.z = -20;
	scene.add(cylinder);


	renderer = new THREE.WebGLRenderer({alpha:true});
	renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(renderer.domElement);
	 window.addEventListener( 'resize', onWindowResize, false );
}

function changeMaterial(x){
tex = texloader.load(x);
cylinder.material = new THREE.MeshBasicMaterial(  {map:tex});
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}


//xxxx

var isDragging = false;
var previousMousePosition = {
    x: 0,
    y: 0
};

$(renderer.domElement).on('mousedown', function(e) {
    isDragging = true;
})
.on('mousemove', function(e) {
   
    var deltaMove = {
        x: e.offsetX-previousMousePosition.x,
        y: e.offsetY-previousMousePosition.y
    };
    if(isDragging) {
            
        var deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                0,
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));
        
        cylinder.quaternion.multiplyQuaternions(deltaRotationQuaternion, cylinder.quaternion);
    }
    
    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
});
/* */

$(document).on('mouseup', function(e) {
    isDragging = false;
});


function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
// update(0, totalGameTime);




function toRadians(angle) {
	return angle * (Math.PI / 180);
}

function toDegrees(angle) {
	return angle * (180 / Math.PI);
}