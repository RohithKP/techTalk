var camera;
var scene;
var renderer;
var material;
var texloader;
init();
animate();

function init(){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1000);
    var geometry = new THREE.CylinderGeometry( 6, 6, 13, 30,30,true,0,6.3 );
    texloader = new THREE.TextureLoader();
		tex = texloader.load(
			// resource URL
			'img/don.jpg'
		);

console.log(tex);
	var material = new THREE.MeshBasicMaterial(  {
			specular: 0x444444,
			map: tex,

			normalScale: new THREE.Vector2( 1, 1 ),
			shininess: 30,
			transparent: true,
			depthTest: true,
			depthWrite: false,
			polygonOffset: true,
			polygonOffsetFactor: - 4,
			wireframe: false
		} );
	cylinder = new THREE.Mesh(geometry, material);
	cylinder.position.z = -20;
	scene.add(cylinder);

	   //  var light = new THREE.DirectionalLight( 0xffffff );
    // light.position.set( 0, 1, 1 ).normalize();
    // scene.add(light);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(renderer.domElement);

	 window.addEventListener( 'resize', onWindowResize, false );
	document.getElementById('upload').onchange = changeMaterial;
	render();
}

function changeMaterial(){
tex = texloader.load("img/"+this.value);
cylinder.material = new THREE.MeshBasicMaterial(  {map:tex});
}

function animate(){
	// cylinder.rotation.x += .05;
cylinder.rotation.y += .05;
   render();
requestAnimationFrame( animate );
}

function render(){
		renderer.render(scene,camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}