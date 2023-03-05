var mainBoard = document.getElementById('mainBoard'); // variable to access mainBoard class
var marginMap = 1; //this is the margin in pixels, for the position of the cells, because there are walls at the top left corner so the cells cant start there
var sizeX = 28;  // X of MapArray , how many cells will be there on every row
var sizeY = 31; // Y of MapArray , how many cells will be there on every column
var cellSizeX = 19.57; //size of the widht of cells in pixels         !! the map is not a square therefore the cells will not be the squares !!
var cellSizeY = 19.35; //size of the height of cells in pixels
var MapArray = [];  // array of cells, for the movement and position of the pacman character and the ghosts
var direction = [] //direction of pacman when a key is pressed
direction.push("left")
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
  { x: 8, y: 14 }, { x: 9, y: 14 }, { x: 12, y: 14 }, { x: 15, y: 14 }, { x: 18, y: 14 },
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
{x: 13, y: 5}, {x: 14, y: 14}, {x: 13, y: 14}, {x: 14, y: 11}, {x: 13, y: 11},
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
{ x: 24, y: 24}, { x: 24, y: 25}, { x: 3, y: 24}, { x: 3, y: 25}, { x: 12, y: 10},
{ x: 12, y: 9}, { x: 15, y: 10}, { x: 15, y: 9}, { x: 13, y: 12},
{ x: 13, y: 13}, { x: 14, y: 12}, { x: 14, y: 13},
{ x: 26, y: 2},{ x: 26, y: 3},{ x: 26, y: 4},{ x: 26, y: 6},{ x: 26, y: 7},
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
 


//creating class pacman for our game charachter
class Pacman { 
  constructor( x,  y){
  this.x=x; this.y=y; //pacman has a x and y of the MapArray
}
//function that takes the argument direction(left, right, top, down), checks wether the new move is allowed, for example up will be y-1, deletes pacman and draws it on the new location
movement(direction ){
  switch(direction [direction.length-1]){
    case "left" :
      if(isItPossibleToMove(this.x-1, this.y)){
        MapArray[this.x][this.y].style.removeProperty("background");
        this.x--;
        this.display();
       }
       
      //else if(isItPossibleToMove(direction[direction.length-2].x,direction[direction.length-2].y,)){
      //      this.movement(direction[direction.length-1].pop());
      // }
      break;
    case "up" :
      if(isItPossibleToMove(this.x, this.y-1)){
        MapArray[this.x][this.y].style.removeProperty("background");
        this.y--;
        this.display();
      }
      break;
    case "right" :
      if(isItPossibleToMove(this.x+1, this.y)){
        MapArray[this.x][this.y].style.removeProperty("background");
        this.x++;
        this.display();
      }
      break;
    case "down" :
      if(isItPossibleToMove(this.x, this.y+1)){
        MapArray[this.x][this.y].style.removeProperty("background");
        this.y++;
        this.display();
      }
      break;
  }
}
 // function that draws the pacman to its new location
  display() {
    MapArray[this.x][this.y].style.backgroundImage = "url('SpriteSheet.v1.png')";
    MapArray[this.x][this.y].style.backgroundPosition = "-1105px -1px";
  
    
  }
}

// creating two dimensional array MapArray
for (let x = 0; x < sizeX; x++) {
  MapArray.push([]); //array gets two dimensions
    for (let y = 0; y < sizeY; y++) {
        MapArray[x][y] = document.createElement("div"); //creating a cell
        
        MapArray[x][y].style.height = `${cellSizeY}px`; //height of the cell
        MapArray[x][y].style.width = `${cellSizeX}px`; //widht of the cell
        MapArray[x][y].style.marginLeft = `${(x*cellSizeX)+marginMap}px` // y of a cell times the X cell size we want plus the margin(because of the walls), so that cell 2,3... are next to cell 1
        MapArray[x][y].style.marginTop = `${(y*cellSizeY)}px`  //x of a cell times the Y cell size we want 
        MapArray[x][y].style.borderStyle = "solid";  // borderis solid
        MapArray[x][y].style.borderWidth = "0px";  //border's widht 1px
        MapArray[x][y].style.padding = "0px";  //nopadding
        MapArray[x][y].style.position = "absolute"; //position is absolute
        MapArray[x][y].style.borderColor = "green";  //color of the border is red so that we can visualise them for now 
          if(isItPossibleToMove(x,y)){
            //MapArray[x][y].style.backgroundColor = "red";
          }
        mainBoard.appendChild(MapArray[x][y]);  // creating the div
    }
}
//creating pacman variable of the class Pacman
 var pacman = new Pacman(1,1);
 
// eventlistener, so that when a key is pressed, that key is now the new direction
document.addEventListener("keydown", (event) => {

  var key = event.code;
  switch(key){
    case "ArrowUp":
      direction.push("up");
      break;
      case "ArrowDown":
        direction.push("down");
      break;
      case "ArrowLeft":
        direction.push("left");
      break;
      case "ArrowRight":
        direction.push("right");
      break;
        
  }
});
//moves the character every one second by executing the movement function with the argument direction(in which direction the pacman will move)
setInterval(function() {
  pacman.movement(direction);
}, 200);

