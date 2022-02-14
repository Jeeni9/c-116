noseX=0;
noseY=0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/NMgyX5fL/png-transparent-man-s-mustache-moustache-beard-product-object-thumbnail-1.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloded);
    poseNet.on('pose',gotresult);
}
function modelloded(){
console.log("modelloded");
}
function gotresult(results){
if (results.length>0){
    console.log(results);
    nose=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log(" nose x= "+results[0].pose.nose.x);
    console.log(" nose y= "+results[0].pose.nose.y);
}
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);

}
function take_snapshot(){
    save("my_image.png");
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("nose y = " + noseX);
        console.log("nose x = " + noseY);

    }
}