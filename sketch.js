
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg1 = loadAnimation(" images/mouse1.png")
    mouseImg2 = loadAnimation(" images/mouse2.png"," images/mouse3.png")
    mouseImg3 = loadAnimation(" images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600)
cat.addAnimation("c1",catImg1)
cat.scale = 0.2

mouse = createSprite(200,600)
mouse.addAnimation("m1", mouseImg1)
mouse.scale = 0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
    cat.velocityX = 0
    cat.addAnimation("c3",catImg3)
    cat.x = 300
    cat.scale = 0.2
    cat.changeAnimation("c3")
    mouse.addAnimation("m3",mouseImg3)
    mouse.scale = 0.2
    mouse.changeAnimation("m3")
}

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("c2",catImg2)
    cat.changeAnimation("c2")
    mouse.addAnimation("m2",mouseImg2)
    mouse.frameDelay = 25
    mouse.changeAnimation("m2")
}
  //For moving and changing animation write code here


}
