function setup() {
    canvas= createCanvas(400,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(400,400);
    posenet= ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);


}

function modelloaded(){
    console.log("poseNet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

    }
}

function draw(){
    background("#d9f502");
}