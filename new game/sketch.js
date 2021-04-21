var bg
var bullet;
var enemy,enemyGroup
function preload(){
bg=loadImage("bg.jpg")

}

function setup(){
createCanvas(800,600)
enemyGroup=new Group()


 

var canon=createSprite(200,440,50,50)
canon.shapeColor="red"





}
function draw(){
background(bg)
if(keyDown("space")){

    bullet.velocityX=3
}

enemy()

  

bullet.bounceOff(enemyGroup)
bullet()
drawSprites();



}
function enemy(){

    if(frameCount%100===0){ 
    var enemy=createSprite(480,440,50,50)
    enemy.shapeColor="yellow"
    enemy.velocityX=-3

    enemyGroup.add(enemy)
    }
 

}
function bullet(){
    bullet=createSprite(200,440,20,20)
    bullet.shapeColor="blue"

}
