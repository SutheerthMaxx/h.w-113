function preload()
{

}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.position(148,250);

    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    circle(70, 40, 60);
    ellipse(140, 40, 55, 55);
    rect(180, 38, 55, 55);

    image(video,100,100,300,300);

}

function take_snapshot()
{
    save("Filtered_Photo.jpg");
}