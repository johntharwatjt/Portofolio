import * as THREE from 'three';
import { DirectionalLight, Light, Mesh, PerspectiveCamera, PlaneGeometry, WireframeGeometry } from 'three';

console.log('hey')
const showProjects = document.querySelector('.show-projects');


container = document.getElementById( 'canvas' );
showProjects.appendChild( container );

renderer = new THREE.WebGLRenderer();
renderer.setSize(800,500)

container.appendChild( renderer.domElement );


window.addEventListener('resize',function(){
    console.log(window.innerWidth)

    
})

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
10000
);
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

camera.position.set(0,14,25);



function animate(time){  renderer.render(scene,camera);}
renderer.setAnimationLoop(animate);


// import {OrbitControls, OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// const orbit = new OrbitControls(camera,renderer.domElement)
// orbit.update();

// to be able to move around the object 

// const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper);






renderer.setClearColor( 0x000000, 0 );




const decore = new URL('../assets/7.glb',import.meta.url)
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

const assetLoader = new GLTFLoader();
assetLoader.load(decore.href,function(gltf){

    const model = gltf.scene;
    scene.add(model);
    model.position.set(5,0,10)
    model.scale.set(13,13,13)
    model.receiveShadow
  
    
},undefined,function(error){
    console.error(error);
})



const spotLight = new THREE.SpotLight();
spotLight.position.set(30,30,80)
scene.add(spotLight);


// const spotLightHelper = new THREE.SpotLightHelper(spotLight)
// scene.add(spotLightHelper);





const dLight = new THREE.DirectionalLight(0xFFFFFF,2);

dLight.position.set(-30,50,0)
scene.add(dLight);


// const dLightHelper = new THREE.DirectionalLightHelper(dLight,10);
// scene.add(dLightHelper);


