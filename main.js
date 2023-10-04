function preload() {
}

function setup(){
 canvas = createCanvas(300, 300);
 canvas.center();
}

function draw() {
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}