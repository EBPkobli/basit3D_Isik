let Aci;
function setup() {
    createCanvas(800, 600, WEBGL);
    Aci = 0;
}

function draw() {

    let dx = mouseX - width/2;
    let dy = mouseY - height/2;
    let v = createVector(dx, -dy, 0);

    v.normalize();

    directionalLight(255, 255, 255, 255, v);
    //pointLight(255, 255, 255, 255, -150, 50,0);
    background(81);

    rectMode(CENTER);
    
   // fill(200,78,99);
   // stroke(250);
    //normalMaterial();
    ambientMaterial(255, 222,55);
    rotateX(Aci);
    rotateY(Aci);
    rotateZ(Aci);
    sphere(100);
    Aci+=0.01;
}