noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup()
{
video = createCapture(VIDEO);
video.size(550 , 500);
canvas = createCanvas(550 , 550);
canvas.position(560 , 100);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
//function setup ends
function draw()
{
background('#ff3333');
document.getElementById("square_side").innerHTML = "width and height of the square will be " + difference + "px";
fill('#3366ff');
stroke('#000000');
square(noseX , noseY , difference);
}
//function draw ends
function modelLoaded()
{
console.log('Model loaded');
}
//function modelLoaded ends
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX + "noseY = " + noseY);
//left wrist and right wrist start here
rightWristX = results[0].pose.rightWrist.x;
leftWristX = results[0].pose.leftWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}
}
//function gotPoses ends