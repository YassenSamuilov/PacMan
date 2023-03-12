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
//all coordinates where the pacman and the ghost can be, aka the route
var possibleCellsToMoveTo = [ 
  {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}, {x: 1, y: 4}, {x: 1, y: 5},
  {x: 1, y: 6}, {x: 1, y: 7}, {x: 1, y: 8}, {x: 1, y: 14}, {x: 1, y: 20},
  {x: 1, y: 21}, {x: 1, y: 22}, {x: 1, y: 23}, {x: 1, y: 26}, {x: 1, y: 27},
  {x: 1, y: 28}, {x: 1, y: 29}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1},
  {x: 5, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, {x: 8, y: 1}, {x: 9, y: 1},
  {x: 10, y: 1}, {x: 11, y: 1}, {x: 12, y: 1}, {x: 15, y: 1}, {x: 16, y: 1},
  {x: 17, y: 1}, {x: 18, y: 1}, {x: 19, y: 1}, {x: 20, y: 1}, {x: 21, y: 1},
  {x: 22, y: 1}, {x: 23, y: 1}, {x: 24, y: 1}, {x: 25, y: 1}, {x: 26, y: 1},
  {x: 6, y: 2}, {x: 6, y: 3}, {x: 6, y: 4}, {x: 6, y: 5}, {x: 6, y: 6},
  {x: 6, y: 7}, {x: 6, y: 8}, {x: 6, y: 9}, {x: 6, y: 10}, {x: 6, y: 11},
  {x: 6, y: 12}, {x: 6, y: 13}, {x: 6, y: 14}, {x: 6, y: 15}, {x: 6, y: 16},
  {x: 6, y: 17}, {x: 6, y: 18}, {x: 6, y: 19}, {x: 6, y: 20}, {x: 6, y: 21},
  {x: 6, y: 22}, {x: 6, y: 23}, {x: 6, y: 24}, {x: 6, y: 25}, {x: 6, y: 26},
  {x: 6, y: 29}, {x: 21, y: 2}, {x: 21, y: 3}, {x: 21, y: 4}, {x: 21, y: 5},
  { x: 21, y: 6 }, { x: 21, y: 7 }, { x: 21, y: 8 }, { x: 21, y: 9 }, { x: 21, y: 10 },
  { x: 21, y: 11 }, { x: 21, y: 12 }, { x: 21, y: 13 }, { x: 21, y: 14 }, { x: 21, y: 15 },
  { x: 21, y: 16 }, { x: 21, y: 17 }, { x: 21, y: 18 }, { x: 21, y: 19 }, { x: 21, y: 20 },
  { x: 21, y: 21 }, { x: 21, y: 22 }, { x: 21, y: 23 }, { x: 21, y: 24 }, { x: 21, y: 25 },
  { x: 21, y: 26 }, { x: 21, y: 29 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 },
  { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }, { x: 8, y: 5 }, { x: 9, y: 5 }, { x: 10, y: 5 },
  { x: 11, y: 5 }, { x: 12, y: 5 }, { x: 15, y: 5 }, { x: 16, y: 5 }, { x: 17, y: 5 },
  { x: 18, y: 5 }, { x: 19, y: 5 }, { x: 20, y: 5 }, { x: 21, y: 5 }, { x: 22, y: 5 },
  { x: 23, y: 5 }, { x: 24, y: 5 }, { x: 25, y: 5 }, { x: 26, y: 5 }, { x: 2, y: 14 },
  { x: 3, y: 14 }, { x: 4, y: 14 }, { x: 5, y: 14 }, { x: 6, y: 14 }, { x: 7, y: 14 },
  { x: 8, y: 14 }, { x: 9, y: 14 }, 
  { x: 18, y: 14 },
  { x: 19, y: 14 }, { x: 20, y: 14 }, { x: 21, y: 14 }, { x: 22, y: 14 }, { x: 23, y: 14 },
  { x: 24, y: 14 }, { x: 25, y: 14 }, { x: 26, y: 14 }, { x: 2, y: 20 }, { x: 3, y: 20 },
  { x: 4, y: 20 }, { x: 5, y: 20 },
  { x: 21, y: 6 }, { x: 6, y: 20 }, { x: 7, y: 20 }, { x: 8, y: 20 }, { x: 9, y: 20 },
  { x: 10, y: 20 }, { x: 11, y: 20 }, { x: 12, y: 20 }, { x: 15, y: 20 }, { x: 16, y: 20 },
  { x: 17, y: 20 }, { x: 18, y: 20 }, { x: 19, y: 20 }, { x: 20, y: 20 }, { x: 21, y: 20 },
  { x: 22, y: 20 }, { x: 23, y: 20 }, { x: 24, y: 20 }, { x: 25, y: 20 }, { x: 26, y: 20 },
  { x: 2, y: 29 }, { x: 3, y: 29 }, { x: 4, y: 29 }, { x: 5, y: 29 }, { x: 6, y: 29 },
  { x: 7, y: 29 }, { x: 8, y: 29 }, { x: 9, y: 29 }, { x: 10, y: 29 }, { x: 11, y: 29 },
  { x: 12, y: 29 }, { x: 15, y: 29 }, { x: 16, y: 29 }, { x: 17, y: 29 }, { x: 18, y: 29 },
  { x: 19, y: 29 }, { x: 20, y: 29 }, { x: 21, y: 29 }, { x: 22, y: 29 }, { x: 23, y: 29 },
  { x: 24, y: 29 }, { x: 25, y: 29 }, { x: 26, y: 29 }, { x: 13, y: 29 }, { x: 14, y: 29 },
  { x: 12, y: 28 }, { x: 12, y: 27 }, { x: 15, y: 28 }, { x: 15, y: 27 },
  {x: 21, y: 6}, {x: 9, y: 5}, {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8},
{x: 9, y: 11}, {x: 9, y: 12}, {x: 9, y: 13}, {x: 9, y: 14}, {x: 9, y: 15},
{x: 9, y: 16}, {x: 9, y: 17}, {x: 9, y: 18}, {x: 9, y: 19}, {x: 9, y: 20},
{x: 9, y: 23}, {x: 9, y: 24}, {x: 9, y: 25}, {x: 9, y: 26}, {x: 9, y: 29},
{x: 18, y: 5}, {x: 18, y: 6}, {x: 18, y: 7}, {x: 18, y: 8}, {x: 18, y: 11},
{x: 18, y: 12}, {x: 18, y: 13}, {x: 18, y: 14}, {x: 18, y: 15}, {x: 18, y: 16},
{x: 18, y: 17}, {x: 18, y: 18}, {x: 18, y: 19}, {x: 18, y: 20}, {x: 18, y: 23},
{x: 18, y: 24}, {x: 18, y: 25}, {x: 18, y: 26}, {x: 18, y: 29}, {x: 14, y: 5},
{x: 13, y: 5}, 
{x: 12, y: 11}, {x: 11, y: 11}, {x: 10, y: 11}, {x: 15, y: 11}, {x: 16, y: 11},
{x: 17, y: 11}, {x: 10, y: 11}, {x: 11, y: 17}, {x: 12, y: 17}, {x: 13, y: 17},
{x: 14, y: 17}, {x: 15, y: 17}, {x: 16, y: 17}, {x: 17, y: 17}, {x: 10, y: 17},
{x: 10, y: 23}, {x: 11, y: 23}, {x: 12, y: 23}, {x: 13, y: 23}, {x: 14, y: 23},
{x: 15, y: 23}, {x: 16, y: 23}, {x: 17, y: 23}, {x: 10, y: 23}, {x: 26, y: 1},
{ x: 21, y: 6 }, { x : 26 , y : 22}, { x : 26 , y : 23}, { x : 26 , y : 26}, { x : 26 , y : 27},
{ x : 26 , y : 28}, { x : 26 , y : 29}, { x : 2 , y : 8}, { x: 2, y: 20 },
{ x: 3, y: 20 }, { x: 4, y: 20 }, { x: 5, y: 20 }, { x: 6, y: 20 },
{ x: 7, y: 20 }, { x: 8, y: 20 }, { x: 9, y: 20 }, { x: 10, y: 20 },
{ x: 11, y: 20 }, { x: 12, y: 20 }, { x: 15, y: 20 }, { x: 16, y: 20 },
{ x: 17, y: 20 }, { x: 18, y: 20 }, { x: 19, y: 20 }, { x: 20, y: 20 },
{ x: 21, y: 20 }, { x: 22, y: 20 }, { x: 23, y: 20 }, { x: 24, y: 20 },
{ x: 25, y: 20 }, { x: 26, y: 20 }, { x: 2, y: 26 }, { x: 3, y: 26 },
{ x: 4, y: 26 }, { x: 5, y: 26 }, { x: 6, y: 26 }, { x: 9, y: 26 },
{ x: 10, y: 26 }, { x: 11, y: 26 }, { x: 12, y: 26 }, { x: 15, y: 26 },
{ x: 16, y: 26 }, { x: 17, y: 26 }, { x: 18, y: 26 }, { x: 21, y: 26 },
{ x: 22, y: 26 }, { x: 23, y: 26 }, { x: 24, y: 26 }, { x: 25, y: 26 },
{ x: 26, y: 26 }, { x: 3, y: 8 }, { x: 4, y: 8 }, { x: 5, y: 8 },
{ x: 10, y: 8 }, { x:11, y: 8 }, { x: 12, y: 8 }, { x: 15, y: 8 },
{ x: 16, y: 8 }, { x: 17, y: 8 }, { x: 22, y: 8 }, { x: 23, y: 8 },
{ x: 24, y: 8 }, { x: 25, y: 8 },{ x: 26, y: 8},{ x: 26, y: 21},
{ x: 21, y: 6 }, { x: 24, y: 23}, { x: 25, y: 23}, { x: 20, y: 23}, { x: 19, y: 23},
{ x: 2, y: 23}, { x: 3, y: 23}, { x: 7, y: 23}, { x: 8, y: 23}, { x: 12, y: 2},
{ x: 12, y: 3}, { x: 12, y: 4}, { x: 15, y: 2}, { x: 15, y: 3},
{ x: 15, y: 4}, { x: 15, y: 21}, { x: 15, y: 22}, { x: 12, y: 21}, { x: 12, y: 22},
{ x: 24, y: 24}, { x: 24, y: 25}, { x: 3, y: 24}, { x: 3, y: 25}, { x: 12, y: 10},{x: 14, y: 11}, {x: 13, y: 11},
{ x: 12, y: 9}, { x: 15, y: 10}, { x: 15, y: 9},{ x: 26, y: 2},{ x: 26, y: 3},{ x: 26, y: 4},{ x: 26, y: 6},{ x: 26, y: 7},
//center coordinates
//{ x: 13, y: 13},  { x: 14, y: 13},//{ x: 12, y: 14 }, //{ x: 15, y: 14 }, 
//{x: 14, y: 14}, {x: 13, y: 14}, 
//coordinates for the tunnel
{ x: 0, y: 14},{ x: 27, y: 14}, 
//coordinates for the center's gate
//{ x: 13, y: 12},{ x: 14, y: 12}
];
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
 


//creating class pacman for our game charachter
class Pacman { 
  constructor( x,  y){
  this.x=x; this.y=y; //pacman has a x and y of the MapArray
}
//function that takes the argument direction(left, right, top, down), checks wether the new move is allowed, 
//for example up will be y-1, deletes pacman and draws it on the new location
movement(direction){
  switch(direction){
    case "left" :
      if(isItPossibleToMove(this.x-1, this.y)){
        this.delete();
        this.x--;
        this.draw();
      }//the else if is for the tunnel
      else if(this.x==0){
        this.delete();
        this.x=27;
        this.draw();
      }
      break;
    case "up" :
      if(isItPossibleToMove(this.x, this.y-1)){
        this.delete();
        this.y--;
        this.draw();
      }
      break;
    case "right" :
      if(isItPossibleToMove(this.x+1, this.y)){
        this.delete();
        this.x++;
        this.draw();
      }//the else if is for the tunnel
      else if(this.x==27){
        this.delete();
        this.x=0;
        this.draw();
      }
      break;
    case "down" :
      if(isItPossibleToMove(this.x, this.y+1)){
        this.delete();
        this.y++;
        this.draw();
      }
      break;
  }
}
 // function that draws the pacman to its new location, and makes the cell bigger so that the pacman can fit inside 
 //because the cells for the big coins do not cover them fully the cells next to them become black 
    draw() {
    MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x-playerMargin}px`    // new x and y, from where the cell will beggin
    MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y-playerMargin-5}px`
    MapArray[this.x][this.y].style.backgroundImage = "url('SpriteSheet.v1.png')";
    MapArray[this.x][this.y].style.backgroundPosition = "-1105px -2px";
    MapArray[this.x][this.y].style.height = `${playerSize}px`; 
    MapArray[this.x][this.y].style.width = `${playerSize}px`; 
    MapArray[this.x][this.y].style.zIndex = "1";//makes it infront of the rest of the cells
         
    
          
          // a timer for how long the pacman will eat the ghosts
    for(var i in bigCoins){if(bigCoins[i].x==this.x && bigCoins[i].y==this.y){
      itIsEatingTime=true;   bigCoins.splice(i, 1); 
        setTimeout(function () {
            itIsEatingTime=false;
          },timerForEatingGhosts)
      if(isCellEaten(this.x-1,this.y)){
         MapArray[this.x+1][this.y].style.background= "linear-gradient(to right, #000000 40%, transparent 40%)" ;
      }else if(isCellEaten(this.x+1,this.y)){MapArray[this.x-1][this.y].style.background= "linear-gradient(to left, #000000 40%, transparent 40%)" ;}
     else{MapArray[this.x-1][this.y].style.background= "linear-gradient(to left, #000000 40%, transparent 40%)" ;
    MapArray[this.x+1][this.y].style.background= "linear-gradient(to right, #000000 40%, transparent 40%)" ;}
    }}  

  }
   //deletes the image from the cell and gets it back to its normal size and pushes the location to eatenCoins 
   delete(){
   
    MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x}px`;
    MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y}px`;
    MapArray[this.x][this.y].style.height = `${cellSizeY}px`; 
    MapArray[this.x][this.y].style.width = `${cellSizeX}px`; 
    MapArray[this.x][this.y].style.removeProperty("background");
    MapArray[this.x][this.y].style.backgroundColor= "black";
    MapArray[this.x][this.y].style.zIndex = "0";//change back the heirarchy
    eatenCoins.push({x:this.x , y:this.y});
  }
}

//creating the ghost class
class Ghost {
  constructor(x,y) {
    this.y = y; // X and Y of the ghost
    this.x = x;
    this.lastMove = { x: this.x , y:this.y}; // lastmove is needed so that the pacman doesnt go back and forth, it will be removed from the possible next move
    this.freeIndexes = []; // initialize the freeIndexes array 
    this.hasGoneThroughTunnel = false; //checkpoint, so that the ghost goes properly through 
  }

  movement() {
    //two ifs for the tunnel, changing hasGoneThroughTunnel so that the ghost doesnt go back and forth, 
    //for example: he goes, he cant go back(hasGoneThroughTunnel =true), he goes x+-, and when he comes back hasGoneThroughTunnel is again false and he can go through
    if(this.x==27  && this.hasGoneThroughTunnel ==false){
      this.delete();
      this.x=0; this.hasGoneThroughTunnel =true ;
      this.draw();
    }else if(this.x==0 && this.hasGoneThroughTunnel ==false){
      this.delete();
      this.x=27;  this.hasGoneThroughTunnel= true;
      this.draw();
            }
            else if(this.hasGoneThroughTunnel ==false || this.hasGoneThroughTunnel ==true){ 
      this.hasGoneThroughTunnel=false;
      //array freeIndexes has all possible cells, the ghost can move to
      this.freeIndexes = [];
    if ( isItPossibleToMove(this.x+1, this.y)) {
      this.freeIndexes.push({ x: this.x+1 , y: this.y });
    } 
    if ( isItPossibleToMove(this.x-1, this.y)) {
      this.freeIndexes.push({ x: this.x-1 , y: this.y });
    }
    if ( isItPossibleToMove(this.x, this.y-1)) {
      this.freeIndexes.push({ x: this.x , y: this.y-1 });
    }
    if ( isItPossibleToMove(this.x, this.y+1)) {
      this.freeIndexes.push({ x: this.x , y: this.y+1 });
    }
    //we romove the cell he came from
    if(this.lastMove !=null){ for(var i=0; i<this.freeIndexes.length; i++){
       if( this.lastMove.x == this.freeIndexes[i].x && this.lastMove.y == this.freeIndexes[i].y){
                              this.freeIndexes.splice(i,1);
       }
    }}  
    // we choose a random cell of the possible ones, lastMove records the location,we delete it from the cell, we change the X and Y, and draw it on the new one
    if (this.freeIndexes.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.freeIndexes.length);
      const randomValue = this.freeIndexes[randomIndex];
      this.lastMove = { x: this.x , y: this.y};
      this.delete();
      this.y = randomValue.y;
      this.x = randomValue.x;
      this.draw();
    }}
  }
  //deletes the image from the cell. and if the coin is eaten the background color is black
    delete(){//checks if the ghost's x and y has a coin that is eaten
      var alreadyEaten = () => {
        for (var index in eatenCoins) {
          if (this.x == eatenCoins[index].x && this.y == eatenCoins[index].y) {
            return true;
          }
        }
        return false;
      };
      //back to normal x and y and size
      if (alreadyEaten()) {
        MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x}px`; 
        MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y}px`;
        MapArray[this.x][this.y].style.height = `${cellSizeY}px`; 
        MapArray[this.x][this.y].style.width = `${cellSizeX}px`; 
        MapArray[this.x][this.y].style.backgroundImage = "url('SpriteSheet.v1.png')";
        MapArray[this.x][this.y].style.backgroundPosition = "30px 30px";
        MapArray[this.x][this.y].style.zIndex = "0"; //change back the heirarchy
          }else{
        MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x}px`;
        MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y}px`;
        MapArray[this.x][this.y].style.height = `${cellSizeY}px`; 
        MapArray[this.x][this.y].style.width = `${cellSizeX}px`; 
        MapArray[this.x][this.y].style.removeProperty("background");
        MapArray[this.x][this.y].style.zIndex = "0";//change back the heirarchy
      }
    }
   
  
  //draws the ghost
  draw() {
    MapArray[this.x][this.y].style.zIndex = "1";//makes it infront of the rest of the cells
    MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x-playerMargin}px`  // new x and y, from where the cell will beggin
    MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y-playerMargin-5}px`
    MapArray[this.x][this.y].style.backgroundImage = "url('SpriteSheet.v1.png')";
    if(itIsEatingTime){MapArray[this.x][this.y].style.backgroundPosition = coordinatesGhostRunning;}else{MapArray[this.x][this.y].style.backgroundPosition = coordinatesGhostNormal;}
    MapArray[this.x][this.y].style.height = `${playerSize}px`; //new height and widht
        MapArray[this.x][this.y].style.width = `${playerSize}px`;
    
  }
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
   //setInterval for the movement of the ghosts with two layers of IFs, itIsEatingTime(the pacman will eat them), 
   //and pacmanHasLost(the pacman X and Y are the same as one of the ghosts)
  
   var timer = setInterval(function () {
  if(!itIsEatingTime){
  if(!pacmanHasLost()){
  ghost1.movement();
  ghost2.movement();
  ghost3.movement();
  ghost4.movement(); 
  //there are ifs for pacmanhaslost, because if the pacman and the ghost are next to each other they will simply switch places, and the gamo wont end
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

 

// function to check if the pacman location is the same as that of a ghost, aka whether the game is over
pacmanHasLost = () => {
  if(pacman.x==ghost1.x && pacman.y==ghost1.y){return true;}
  else if(pacman.x==ghost2.x && pacman.y==ghost2.y){return true;}
  else if(pacman.x==ghost3.x && pacman.y==ghost3.y){return true;}
  else if(pacman.x==ghost4.x && pacman.y==ghost4.y){return true;}else{return false;}
}