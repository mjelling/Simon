var counter=2;
var level=1;
var sequence=[];
var clicksArray=[];
var userInput=[];
function buildSequence() {
  for(var i=0; i<counter; i++){
    var x=Math.floor(Math.random()*4);
    sequence.push(x);
  };
};

function logClicks(){
  $('.box').click(function(e) {
    clicksArray.push(e.target.id); // then e.srcElement.className has the class
  });
};

function arrayConverter(){
  for(var i=0; i<clicksArray.length; i++){
    if(clicksArray[i]==="green"){
      userInput.push(0);
    }
    else if(clicksArray[i]==="red"){
      userInput.push(1);
    }
    else if(clicksArray[i]==="blue"){
      userInput.push(2);
    }
    else if(clicksArray[i]==="yellow"){
      userInput.push(3);
    }
  };
};

function checkResults(){
  if(sequence===userInput){
    alert("On to the next level");
  }
  else{
    alert("You lost, refresh page to play again");
  }
};


function simon(){
  buildSequence();
  //animation
  //clicklog
  if(sequence.length===clicksArray.length){
    arrayConverter();
    checkResults();
    while (sequence===userInput){
      counter +=1;
      level +=1;
      sequence=[];
      clicksArray=[];
      userInput=[];
      $('li').text('Level '+level);
      buildSequence();
      if(sequence.length===clicksArray.length){
        arrayConverter();
        checkResults();
      };
    };
  };
};


$( document ).ready(function() {
    logClicks();
    simon();
});






//the first step is to create the arrays that will have the possible sequences for each level
//create a variable that uses Math.random() and math,floor() to create an integer to select from the nested arrays.
//create a function that animates the four boxes, that can be used again and again through out the game, this function will need a for loop that will respond to the different length of arrays
//prompt user to click on the elements in the right order based on what has just been given
//click animates elements the same way as before
//log click events, push them into an array, check the new array against the old array
//if the arrays match, change color background, and add the level before to the UL list
//if you lose alert the player they have lost, ask if they want to play again, if no, return to page with one levels on it, if yes reload original page.
