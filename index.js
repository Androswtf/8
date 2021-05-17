

import * as THREE from 'three';
import { Loader } from 'three';

window.onload = () => {

let w = innerWidth,
    h = innerHeight;

const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 2000);
camera.position.set(0,0,0);
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(w,h);

document.body.appendChild(renderer.domElement);

let light = new THREE.PointLight(0xffffff,1)
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.position.set(0,5,-3);

scene.add(light);

light = new THREE.AmbientLight(0xffffff, .5);
light.position.set(-2,-.5,-3);
scene.add(light)

let geom = new THREE.BoxGeometry(1,1,1, 100, 1, 1);
let material = new THREE.MeshPhongMaterial({
    specular: 0x222222,
});
let cube = new THREE.Mesh(geom, material);
cube.position.setZ(-4);
cube.castShadow = true;
cube.receiveShadow = true;

scene.add(cube);

let text = new THREE.TextureLoader();

text.load('/normal.jpg', function(text) {
    cube.material = new THREE.MeshPhongMaterial({
        ...cube.material,
        normalMap: text,
        normalScale: new THREE.Vector2(2,2)
    })
});

text.load('/base.jpg', function(text) {
    cube.material = new THREE.MeshPhongMaterial({
        ...cube.material,
        map: text,
    });
});

text.load('/ao.jpg', function(text) {
    cube.material = new THREE.MeshPhongMaterial({
        ...cube.material,
        aoMap: text
    });
});

let planeGeom = new THREE.PlaneGeometry(4,4);
let planeMat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
});
let plane = new THREE.Mesh(planeGeom, planeMat);

plane.rotateX(2);
plane.position.set(0,-1, -4);

plane.castShadow = false;
plane.receiveShadow = true;


scene.add(plane);

renderer.setClearColor(0x000000);
camera.position.set(0,1,-6);



let startPos = camera.position.x;
let time = 0;

controls = new THREE.OrbitControls( camera, renderer.domElement );

function init() {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50.0, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function initScene() {
    let cubeGeom = new THREE.BoxGeometry(60, 60, 60);
    let cubeMat = new THREE.MeshPhongMaterial({
        color: 0xaa0000
    });
    cube = new THREE.Mesh(cubeGeom, cubeMat);
    cube.position.set(-100, 0, 0);
    scene.add(cube);

    let sphereGeom = new THREE.SphereGeometry(45, 60, 60);
    let sphereMat = new THREE.MeshPhongMaterial({
        color: 0x0000ff
    });
    sphere = new THREE.Mesh(sphereGeom, sphereMat);
    sphere.position.set(100, 0, 0);
    scene.add(sphere);

    let plane = new THREE.GridHelper(250, 25);
    scene.add(plane);

    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-25, 50, 50);
    scene.add(camera);
    camera.add(light);

    camera.position.set(0, 0, 500);
    cameraParams.distance = camera.position.clone().sub(cube.position).length();
    updateCamera();
}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

document.onmousedown = function(e) {
    cameraParams.mdown.set(e.clientX, e.clientY);
    cameraParams.thetam = cameraParams.theta;
    cameraParams.phim = cameraParams.phi;

    document.onmousemove = function(e) {
        cameraParams.mmove.set(e.clientX, e.clientY);
        cameraParams.theta = -(cameraParams.mmove.x - cameraParams.mdown.x) * 0.5 + cameraParams.thetam;
        cameraParams.phi = (cameraParams.mmove.y - cameraParams.mdown.y) * 0.5 + cameraParams.phim;
        cameraParams.phi = Math.min(90, Math.max(-90, cameraParams.phi));

        updateCamera();
    };

    document.onmouseup = function(e) {
        document.onmousemove = null;
    };
};

loop();

}


