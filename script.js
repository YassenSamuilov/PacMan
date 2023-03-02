var pacman = document.querySelector('.pacman'); 
var mainBoard = document.getElementById('mainBoard'); // promenliwata mainBoard e nachina po koito shte nazowawame diva mainBoard
var marginMap = 13; //towa e ogranichenie w pikseli, otnazqshto se za lokaciqta na kletkite na MapArray, tui kato ne moje da zapochwat ot 0x 0px, zaradi stenite na snimkata na mapa
var sizeX = 22;  // X na MapArray , toest kolko kletkishte ima na wseki red
var sizeY = 22; // Y na MapArray , toest kolko kletkishte ima na wsqka kolona
var cellSize = 24; //razmera w px na kletkite
var MapArray = [];  // array na koito wsqka poziziq pushwame now array i toj stawa dwumeren

// suzdawame dwumeren masiv, pokriwasht mapa, w negowite kletki shte slojim pacman
for (let x = 0; x < sizeY; x++) {
  MapArray.push([]); //array stawa dwumeren
    for (let y = 0; y < sizeX; y++) {
        MapArray[x][y] = document.createElement("div"); //suzdawame kletka
        
        MapArray[x][y].style.height = `${cellSize}px`; //opredelqme wisochinata na klethata
        MapArray[x][y].style.width = `${cellSize}px`; //opredelqme shirinata na klethata
        MapArray[x][y].style.marginLeft = `${(y*cellSize)+marginMap}px` //opredelqme raztoqnieto na lqwo na kletkata na klethata, zashtoto ima steni i ne iskame pacmana da se pokazwa wurhu tqh
        MapArray[x][y].style.marginTop = `${(x*cellSize)+marginMap-5}px`  //opredelqme raztoqnieto ot gore
        MapArray[x][y].style.borderStyle = "solid";  // bordera e solid
        MapArray[x][y].style.borderWidth = "1px";  //bordera e shirok 1px
        MapArray[x][y].style.padding = "0px";  //nqma padding
        MapArray[x][y].style.position = "absolute"; //position is absolute
        MapArray[x][y].style.borderColor = "red";  //zweta na kletkata e cherven za e otlichitelen

        mainBoard.appendChild(MapArray[x][y]);
    }
}


