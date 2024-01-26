const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 15;

// BoxGeometry
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: "blue" } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

// TorusGeometry
const torusGeometry = new THREE.TorusGeometry( 3, 0.5, 16, 100 ); 
const torusMaterial = new THREE.MeshBasicMaterial( { color: "red" } ); 
const torus = new THREE.Mesh( torusGeometry, torusMaterial ); 
scene.add( torus );
torus.position.set(0, 6, 0);

// CylinderGeometry
const cylinderGeometry = new THREE.CylinderGeometry( 2, 2, 5, 22 ); 
const cylinderMaterial = new THREE.MeshBasicMaterial( {color: "orange"} ); 
const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial ); 
scene.add( cylinder );
cylinder.position.set(-14, 0, 0);

// CapsuleGeometry
const capsuleGeometry = new THREE.CapsuleGeometry( 2, 2, 6, 10 ); 
const capsuleMaterial = new THREE.MeshBasicMaterial( {color: "pink"} ); 
const capsule = new THREE.Mesh( capsuleGeometry, capsuleMaterial ); 
scene.add( capsule );
capsule.position.set(14, 0, 0);

// ConeGeometry
const geometry = new THREE.ConeGeometry(2, 5, 32 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh(geometry, material ); 
scene.add( cone );
cone.position.set(0, -6, 0);

function animate() {
	requestAnimationFrame( animate );

    // start animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    torus.rotation.x += 0.01;

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    cylinder.rotation.z += 0.01;

    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    
    // end animation
	renderer.render( scene, camera );
}
animate();