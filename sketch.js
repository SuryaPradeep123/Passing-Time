const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    time();

}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    console.log(datetime);
    hour = datetime.slice(11,13);
    console.log(hour);

    if(hour >= 04 && hour <= 06){
        bg = "sunrise1.png";
    }
    else if(hour >= 06 && hour <= 08){
        bg = "sunrise2.png";
    }
    else if(hour >= 08 && hour <= 10){
        bg = "sunrise3.png";
    }
    else if(hour >= 10 && hour <= 12){
        bg = "sunrise4.png";
    }
    else if(hour >= 12 && hour <= 14){
        bg = "sunrise5.png";
    }
    else if(hour >= 14 && hour <= 16){
        bg = "sunrise6.png";
    }
    else if(hour >= 16 && hour <= 18){
        bg = "sunset7.png";
    }
    else if(hour >= 18 && hour <= 20){
        bg = "sunset8.png";
    }
    else if(hour >= 20 && hour <= 22){
        bg = "sunset10.png";
    }
    else if(hour >= 22 && hour <= 24){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }
    
    backgroundImg = loadImage(bg);

}

function time(){

    if(hour == 00){
        fill("black");
        textSize(24)
        text("Time : 12 A.M",100,175);
    }
    else if(hour == 01){
        fill("black");
        textSize(24)
        text("Time : 1 A.M",100,175);
    }
    else if(hour == 02){
        fill("black");
        textSize(24)
        text("Time : 2 A.M",100,175);
    }
    else if(hour == 03){
        fill("black");
        textSize(24)
        text("Time : 3 A.M",100,175);
    }
    else if(hour == 04){
        fill("black");
        textSize(24)
        text("Time : 4 A.M",100,175);
    }
    else if(hour == 05){
        fill("black");
        textSize(24)
        text("Time : 5 A.M",100,175);
    }
    else if(hour == 06){
        fill("black");
        textSize(24)
        text("Time : 6 A.M",100,175);
    }
    else if(hour == 07){
        fill("black");
        textSize(24)
        text("Time : 7 A.M",100,175);
    }
    else if(hour == 08){
        fill("black");
        textSize(24)
        text("Time : 8 A.M",100,175);
    }
    else if(hour == 09){
        fill("black");
        textSize(24)
        text("Time : 9 A.M",100,175);
    }
    else if(hour == 10){
        fill("black");
        textSize(24)
        text("Time : 10 A.M",100,175);
    }
    else if(hour == 11){
        fill("black");
        textSize(24)
        text("Time : 11 A.M",100,175);
    }
    else if(hour == 12){
        fill("black");
        textSize(24)
        text("Time : 12 P.M",100,175);
    }
    else if(hour == 13){
        fill("black");
        textSize(24)
        text("Time : 1 P.M",100,175);
    }
    else if(hour == 14){
        fill("black");
        textSize(24)
        text("Time : 2 P.M",100,175);
    }
    else if(hour == 15){
        fill("black");
        textSize(24)
        text("Time : 3 P.M",100,175);
    }
    else if(hour == 16){
        fill("black");
        textSize(24)
        text("Time : 4 P.M",100,175);
    }
    else if(hour == 17){
        fill("black");
        textSize(24)
        text("Time : 5 P.M",100,175);
    }
    else if(hour == 18){
        fill("black");
        textSize(24)
        text("Time : 6 P.M",100,175);
    }
    else if(hour == 19){
        fill("black");
        textSize(24)
        text("Time : 7 P.M",100,175);
    }
    else if(hour == 20){
        fill("black");
        textSize(24)
        text("Time :8 P.M",100,175);
    }
    else  if(hour == 21){
        fill("black");
        textSize(24)
        text("Time : 9 P.M",100,175);
    }
    else if(hour == 22){
        fill("black");
        textSize(24)
        text("Time : 10 P.M",100,175);
    }
    else{
        fill("black");
        textSize(24)
        text("Time : 11 P.M",100,175);
    }

}
