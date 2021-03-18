'use strict';

// This boid code is adapted from beneater's (MIT license)
// https://github.com/beneater/boids

const NUM_BOIDS = 100;
const FLOCKING_DISTANCE = 0.9;
const INITIAL_VELOCITY = 0.1;
const speedLimit = 0.1;
const centeringFactor = 0.3;
const minDistance = 1.0;
const avoidFactor = 0.08;
const cameraZ = 15.0;
let sizeX = 50;
let sizeY = 50;

let canvasWidth = 600;
let canvasHeight = 600;

const boids = (() => {
    const result = [];
    for (let i = 0; i < NUM_BOIDS; i += 1) {
        const boid = {
            center: {
                x: Math.random() * sizeX - sizeX / 2,
                y: Math.random() * sizeY - sizeY / 2,
            },
            velocity: {
                x: Math.random() * INITIAL_VELOCITY - INITIAL_VELOCITY / 2,
                y: Math.random() * INITIAL_VELOCITY - INITIAL_VELOCITY / 2,
            }
        };
        result.push(boid);
    }
    return result;
})();

function distance(b1, b2) {
    const dx = b1.center.x - b2.center.x;
    const dy = b1.center.y - b2.center.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function nClosestBoids(boid, n) {
    const sorted = boids.slice();
    sorted.sort((a, b) => distance(boid, a) - distance(boid, b));
    return sorted.slice(1, n + 1);
}

function keepWithinBounds(boid) {
    const margin = 0.1;
    const turnFactor = 0.01;

    if (boid.center.x < -sizeX / 2) {
        boid.velocity.x += turnFactor;
    }
    if (boid.center.y < -sizeY / 2) {
        boid.velocity.y += turnFactor;
    }
    if (boid.center.x > sizeX / 2) {
        boid.velocity.x -= turnFactor;
    }
    if (boid.center.y > sizeY / 2) {
        boid.velocity.y -= turnFactor;
    }
}

function flyTowardsCenter(boid) {
    const center = { x: 0, y: 0 };
    let numNeighbors = 0;

    for (let otherBoid of boids) {
        if (distance(boid, otherBoid) < FLOCKING_DISTANCE) {
            center.x += otherBoid.center.x;
            center.y += otherBoid.center.y;
            numNeighbors += 1;
        }
    }

    if (numNeighbors > 0) {
        center.x /= numNeighbors;
        center.y /= numNeighbors;

        boid.velocity.x += (center.x - boid.center.x) * centeringFactor;
        boid.velocity.y += (center.y - boid.center.y) * centeringFactor;
    }
}

function avoidOthers(boid) {
    const move = { x: 0, y: 0 };

    for (let otherBoid of boids) {
        if (otherBoid !== boid) {
            if (distance(boid, otherBoid) < minDistance) {
                move.x += boid.center.x - otherBoid.center.x;
                move.y += boid.center.y - otherBoid.center.y;
            }
        }
    }

    boid.center.x += move.x * avoidFactor;
    boid.center.y += move.y * avoidFactor;
}

function matchVelocity(boid) {
    const matchingFactor = 0.5;

    const averageVelocity = { x: 0, y: 0 };
    let numNeighbors = 0;

    for (let otherBoid of boids) {
        if (distance(boid, otherBoid) < FLOCKING_DISTANCE) {
            averageVelocity.x += otherBoid.velocity.x;
            averageVelocity.y += otherBoid.velocity.y;
            numNeighbors += 1;
        }
    }

    if (numNeighbors > 0) {
        averageVelocity.x /= numNeighbors;
        averageVelocity.y /= numNeighbors;

        boid.velocity.x += (averageVelocity.x - boid.velocity.x) * matchingFactor;
        boid.velocity.y += (averageVelocity.y - boid.velocity.y) * matchingFactor;
    }
}

function limitSpeed(boid) {
    const velocity = Math.sqrt(
        boid.velocity.x * boid.velocity.x
            + boid.velocity.y * boid.velocity.y);
    if (velocity > speedLimit) {
        boid.velocity.x = (boid.velocity.x / velocity) * speedLimit;
        boid.velocity.y = (boid.velocity.y / velocity) * speedLimit;
    }
}

function resize(renderer) {
    const body = document.body;
    const main = document.getElementById('main');
    const width = body.clientWidth;
    const height = body.clientHeight;
    const rendererHeight = height * (4.0 / 10.0);
    const rendererWidth = width * 0.6;
    canvasWidth = rendererWidth;
    canvasHeight = rendererHeight;
    renderer.setSize(rendererWidth, rendererHeight);
    camera.aspect = rendererWidth / rendererHeight;
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

//const boidGeometry = new THREE.Triangle(
//    new THREE.Vector3(0, 5, 0),
//    new THREE.Vector3(-5, 0, 0),
//    new THREE.Vector3(5, 0, 0),
//);
const boidGeometry = new THREE.CircleGeometry(0.2, 10);
const boidMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const boidMesh = new THREE.InstancedMesh(boidGeometry, boidMaterial, NUM_BOIDS);
const template = new THREE.Object3D();
const templateColor = new THREE.Color();

// boidMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
// boid2Mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
// scene.add(boid2Mesh);
boidMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
scene.add(boidMesh);

camera.position.z = cameraZ;

function setupBoidInstances() {
    for (let i = 0; i < NUM_BOIDS; i++) {
        flyTowardsCenter(boids[i]);
        avoidOthers(boids[i]);
        matchVelocity(boids[i]);
        limitSpeed(boids[i]);
        keepWithinBounds(boids[i]);

        boids[i].center.x += boids[i].velocity.x;
        boids[i].center.y += boids[i].velocity.y;

        template.position.set(boids[i].center.x, boids[i].center.y, 0);
        template.rotation.y = 0;
        template.rotation.x = 0;
        template.updateMatrix();

        const velocity = Math.sqrt(boids[i].velocity.x * boids[i].velocity.x + boids[i].velocity.y * boids[i].velocity.y) / speedLimit;
        templateColor.setRGB(velocity, velocity, velocity);

        boidMesh.setMatrixAt(i, template.matrix);
        boidMesh.setColorAt(i, templateColor);
    }

    boidMesh.instanceMatrix.needsUpdate = true;
}

setupBoidInstances();

scene.add(boidMesh);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    setupBoidInstances();
}

window.addEventListener('resize', () => resize(renderer));

// The first time we resize, the width is wrong. Resizing again seems to fix it.
resize(renderer);
resize(renderer);

animate();
