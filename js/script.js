'use strict';

function resize(renderer) {
    const body = document.body;
    const main = document.getElementById('main');
    const width = body.clientWidth;
    const height = body.clientHeight;
    const rendererHeight = height * (4.0 / 10.0);
    renderer.setSize(width, rendererHeight);
    camera.aspect = width / rendererHeight;
    camera.updateProjectionMatrix();
    main.style.height = `${height - height / 4.0}`;
    return width;
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x212121);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

window.addEventListener('resize', () => resize(renderer));

// The first time we resize, the width is wrong. Resizing again seems to fix it.
resize(renderer);
resize(renderer);

animate();
