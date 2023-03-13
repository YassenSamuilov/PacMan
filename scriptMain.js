var mainBoard = document.getElementById('mainBoard'); // variable to access mainBoard class
var marginMap = 2; //this is the margin in pixels, for the position of the cells, because there are walls at the top left corner so the cells cant start there
var sizeX = 28;  // X of MapArray , how many cells will be there on every row
var sizeY = 31; // Y of MapArray , how many cells will be there on every column
var cellSizeX = 19.57; //size of the widht of cells in pixels         !! the map is not a square therefore the cells will not be the squares !!
var cellSizeY = 19.35; //size of the height of cells in pixels
var MapArray = [];  // array of cells, for the movement and position of the pacman character and the ghosts
var direction = "left" //direction of pacman when a key is pressed
var speed =100;// speed of ghosts in miliseconds
const eatenCoins = [];//array with the coordinates of the eaten coins
var playerSize=33;// what size will the cells be when there is a ghost or the pacman in them
var playerMargin =5;// minus what margin will the cells be when there is a ghost or the pacman in them
var itIsEatingTime = false; //is it time for the pacman to eat ghosts
var timerForEatingGhosts =4000; //for how long will the pacman be able to eat ghosts


const coordinatesGhostRunning = "-1416px -158px";//the blue color for a ghost
const coordinatesGhostNormal = "-1106px -158px";//the normal color for a ghost

let leftUpCornerArray = new Array(28);//creating two dimesional array for the coordinates of the left up corner of each cell
for (let i = 0; i < leftUpCornerArray.length; i++) {
  leftUpCornerArray[i] = new Array(31);
}
//coordinates for the four big coins
const bigCoins = [{x :1 , y :3},{x :26 , y :3},{x :1 , y :23},{x :26 , y :23}]
//function that returns whether the desired location is allowed
function isItPossibleToMove(a, b) {
  for (var i = 0; i < possibleCellsToMoveTo.length; i++) {
    if (a == possibleCellsToMoveTo[i].x && b == possibleCellsToMoveTo[i].y) {
      return true;
    }
  }
  return false;
}
//checks if a cell has been eaten
function isCellEaten(a,b){
  for (var i = 0; i < eatenCoins.length; i++) {
    if (a == eatenCoins[i].x && b == eatenCoins[i].y) {
      return true;
    }
  }
  return false;
}
// function to check if the pacman location is the same as that of a ghost, aka whether the game is over
pacmanHasLost = () => {
  if(pacman.x==ghost1.x && pacman.y==ghost1.y){return true;}
  else if(pacman.x==ghost2.x && pacman.y==ghost2.y){return true;}
  else if(pacman.x==ghost3.x && pacman.y==ghost3.y){return true;}
  else if(pacman.x==ghost4.x && pacman.y==ghost4.y){return true;}else{return false;}
} 


// creating two dimensional array MapArray
for (let x = 0; x < sizeX; x++) {
  MapArray.push([]); //array gets two dimensions
    for (let y = 0; y < sizeY; y++) {
        MapArray[x][y] = document.createElement("div"); //creating a cell
        
        MapArray[x][y].style.height = `${cellSizeY}px`; //height of the cell
        MapArray[x][y].style.width = `${cellSizeX}px`; //widht of the cell
        MapArray[x][y].style.marginLeft = `${(x*cellSizeX)+marginMap}px` // y of a cell times the X cell size we want plus the margin(because of the walls), 
                                                                         //so that cell 2,3... are next to cell 1
        MapArray[x][y].style.marginTop = `${(y*cellSizeY)}px`  //x of a cell times the Y cell size we want 
        leftUpCornerArray[x][y] = {x :x*cellSizeX+marginMap, y : y*cellSizeY} 
        MapArray[x][y].style.borderStyle = "solid";  // borderis solid
        MapArray[x][y].style.borderWidth = "0px";  //border's widht 1px
        MapArray[x][y].style.padding = "0px";  //no padding
        MapArray[x][y].style.position = "absolute"; //position is absolute
        MapArray[x][y].style.borderColor = "green";  //color of the border is red so that we can visualise them for now 
        MapArray[x][y].style.zIndex = "0";
          if(isItPossibleToMove(x,y)){
          // MapArray[x][y].style.backgroundColor = "red";
          }
        mainBoard.appendChild(MapArray[x][y]);  // creating the div
    }
}
//creating pacman variable of the class Pacman
 var pacman = new Pacman(1,1);
let ghost1 = new Ghost(13,11)//creating the ghosts and drawing them
let ghost2 = new Ghost(13,13)
let ghost3 = new Ghost(14,13)
let ghost4 = new Ghost(14,14)
ghost1.draw();
ghost2.draw();
ghost3.draw();
ghost4.draw();

// eventlistener, so that when a key is pressed, that key is now the new direction
document.addEventListener("keydown", (event) => {

  var key = event.code;
  switch(key){
    case "ArrowUp":
      if(isItPossibleToMove(pacman.x, pacman.y-1)){ direction ="up";}
     
      break;
      case "ArrowDown":
        if(isItPossibleToMove(pacman.x, pacman.y+1)){direction ="down";}
      
      break;
      case "ArrowLeft":
        if(isItPossibleToMove(pacman.x-1, pacman.y)){direction ="left";}
      
      break;
      case "ArrowRight":
        if(isItPossibleToMove(pacman.x+1, pacman.y)){direction ="right";}
      
      break;
        
  }
});


//timer so that in the beggining there is timer when the other three ghosts start moving
{setInterval(function(){
  //checks whether the ghost is insode the center and moves him one cell up
  if(ghost2.x==13 &&(ghost2.y==13 ||ghost2.y==12)){
    ghost2.delete();
    ghost2.y=11;
    ghost2.draw();
  }},3000)

setInterval(function(){
    if(ghost3.x==14 &&(ghost3.y==13 ||ghost3.y==12)){
      ghost3.delete();
    ghost3.y=11;
    ghost3.draw();
    }
  },6000)
//checks whether the ghost is insode the center and moves him one cell up, but by the normal speed, the outer setInterval is executed once, the inside twice
  setInterval(function(){
    setInterval(function () {
     if(ghost4.x==14 &&(ghost4.y==13 ||ghost4.y==12 ||ghost4.y==14)){
      ghost4.delete();
    ghost4.y--;
    ghost4.draw();
  }}, speed);
  },9000)}

 
  
 

//setInterval for the movement of the pacman
var timera = setInterval(function () {  
  pacman.draw();pacman.movement(direction); //moves the character by executing the movement function with the argument direction(in which direction the pacman will move), 
   }, speed);
   //setInterval for the movement of the ghosts with two layers of IFs, itIsEatingTime(the pacman will eat the ghosts), 
   //and pacmanHasLost(if the pacman X and Y are the same as one of the ghost)
  
   var timer = setInterval(function () {
  if(!itIsEatingTime){
  if(!pacmanHasLost()){
  ghost1.movement();
  ghost2.movement();
  ghost3.movement();
  ghost4.movement(); 
  //there are ifs for pacmanhaslost, because if the pacman and the ghost are next to each other they will simply switch places, and the game wont end
  if(pacmanHasLost()){clearInterval(timer);
    clearInterval(timera);console.log("game lost")}
    }else{clearInterval(timer);//stopping the setInterval
      clearInterval(timera);console.log("game lost")}
  }else {
      if(!pacmanHasLost()){
    ghost1.movement();
    ghost2.movement();
    ghost3.movement();
    ghost4.movement();
    if(pacmanHasLost()){clearInterval(timer);
      console.log("a ghost was eaten")}
      }else{
        console.log("a ghost was eaten")
      clearInterval(timer);}}
    }, speed);

 

