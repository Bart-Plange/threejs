import * as THREE from 'three';
import { MeshBasicMaterial } from 'three';
import{OrbitControls, orbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 
    45, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer();

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

renderer.setSize(window.innerWidth, innerHeight);

document.body.appendChild(renderer.domElement);
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(-10, 30, 30);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial(
    {color: 0xFFFFFF,
     side: THREE.DoubleSide   
    });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
 
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000FF,
    wireframe : false
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

sphere.rotation.Set(-3, 10, 10);

function animate(time){
    box.rotation.x = time/1000;
    box.rotation.y = time/1000;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
