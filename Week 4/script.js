var newTable = document.createElement("table");
newTable.style.border = "thin solid black";
for(i = 0; i < 4; i++){
  var newHead = document.createElement("th");
  newHead.textContent = "Header" + (i + 1);
  newHead.style.border = "thin solid black";
  newTable.appendChild(newHead);
}

for(i = 0; i < 3; i++){
var newLine = document.createElement("tr");
newTable.appendChild(newLine);
	for(j = 0; j < 4; j++){
  	var newBox = document.createElement("td");
    newBox.textContent = (i+1) + ", " + (j+1);
    newBox.style.border = "thin solid black";
    newTable.appendChild(newBox);
  }
}



var newLine = document.createElement("tr");
newTable.appendChild(newLine);
document.body.appendChild(newTable);

var newButton = document.createElement("button");
newButton.textContent = "Left";
newButton.id = "leftButton";
document.body.appendChild(newButton);

var newButton = document.createElement("button");
newButton.textContent = "Right";
newButton.id = "rightButton";
document.body.appendChild(newButton);

var newButton = document.createElement("button");
newButton.textContent = "Up";
newButton.id = "upButton";
document.body.appendChild(newButton);

var newButton = document.createElement("button");
newButton.textContent = "Down";
newButton.id = "downButton";
document.body.appendChild(newButton);

var newButton = document.createElement("button");
newButton.textContent = "Mark Cell";
newButton.id = "markButton";
document.body.appendChild(newButton);

var childList = newTable.children;
var x = 5;
childList[x].style.border = "thick solid black";

function leftClick(event){
  if(x != 5 && x != 10 && x!= 15){
    childList[x].style.border = "thin solid black";
    x--;
    childList[x].style.border = "thick solid black";
  }
}
function rightClick(event){
  if(x != 8 && x != 13 && x!= 18){
    childList[x].style.border = "thin solid black";
    x++;
    childList[x].style.border = "thick solid black";
  }
}
function upClick(event){
  if(x != 5 && x != 6 && x!= 7 && x!=8){
    childList[x].style.border = "thin solid black";
    x-=5;
    childList[x].style.border = "thick solid black";
  }
}
function downClick(event){
  if(x != 15 && x != 16 && x != 17 && x!= 18){
    childList[x].style.border = "thin solid black";
    x+=5;
    childList[x].style.border = "thick solid black";
  }
}
function markClick(event){
  childList[x].style.background = "yellow";
}
document.getElementById("leftButton").addEventListener("click", leftClick);
document.getElementById("rightButton").addEventListener("click", rightClick);
document.getElementById("upButton").addEventListener("click", upClick);
document.getElementById("downButton").addEventListener("click", downClick);
document.getElementById("markButton").addEventListener("click", markClick);
