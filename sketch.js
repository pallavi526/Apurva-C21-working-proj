var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1 = createSprite(80,590,180,20);
   surface2 = createSprite(290,590,180,20);
   surface3 = createSprite(510,590,180,20);
   surface4 = createSprite(720,590,180,20);
   
   surface1.shapeColor = "red";
   surface2.shapeColor = "blue";
   surface3.shapeColor = "green";
   surface4.shapeColor = "pink";

    //create box sprite and give velocity
     box = createSprite(random(20,750));
     box.velocityX = 2;
     box.velocityY = -2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    box.bounceOff(edges);
   
    
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) &&  box.bounceOff(surface1)){
        box.shapeColor = "red";
    }else if(surface2.isTouching(box)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        music.stop();
    }else if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "green";
        music.play();
    }else if(surface4.isTouching(box) &&  box.bounceOff(surface4)){
        box.shapeColor = "pink";
    }


drawSprites();
}
