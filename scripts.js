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
function animate(){
  console.log("should animate!");
  var boxes = [];
  for(var i=0; i<sequence.length; i++){
      if(sequence[i]===0){
        boxes.push("green");
        // $("#green").fadeOut(500).fadeIn(500);
      }
      else if(sequence[i]===1){
        boxes.push("red");
        // $("#red").fadeOut(500).fadeIn(500);
      }
      else if(sequence[i]===2){
        boxes.push("blue");
        // $("#blue").fadeOut(500).fadeIn(500);
      }
      else if(sequence[i]===3){
        boxes.push("yellow");
        // $("#yellow").fadeOut(500).fadeIn(500);
      };
  };
  console.log(boxes);
  // for loop that will iterate over the right sequence and set up a timeout that will be (500 x index)
  for( var i=0; i<boxes.length; i++){
    // Closures
    (function() {
      var box = boxes[i];
      setTimeout(function(){
        $( "#"+box ).fadeOut(500).fadeIn(500);
        $("."+box)[0].pause();
        $("."+box)[0].currentTime = 0
        $("."+box)[0].play();
      },750*i)
    }())
  }
};
function startButton(){
  $($( ":button" )).click(function() {
    //if ($('li').text() == 'Level 1') {
      animate();
      $( "#initiate" ).prop( "disabled", true );
    //};
  });
};
function logClicks(){
  $('.box').click(function(e) {
    $( "#"+e.target.id ).fadeOut(500).fadeIn(500);
    $("."+e.target.id)[0].pause();
    $("."+e.target.id)[0].currentTime = 0
    $("."+e.target.id)[0].play();
    console.log(e.target.id);
    clicksArray.push(e.target.id); // then e.srcElement.className has the class
    doAllTheStuff();
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

function isUserInputEqual() {
  var equals = true;
  sequence.forEach(function( value, index ) {
    if (userInput[index] !== value) {
      equals = false;
    }
  });
  return equals;
};
function checkResults(){

  var equals = isUserInputEqual();

  if(equals){
  console.log("Proceeding to next level");
  } else{
    if(level===1){
      $('h3').text("You lost! Refresh to play again!");
    }
    else{
    $('h3').text("You beat "+(level-1)+" levels of Simon! Refresh to play again!");
    }
  };
};
//     else {
//       laterLevels()
//   });
// };
  // run this: laterLevels()
  function laterLevels(){
    var yes= isUserInputEqual();
    if(yes){
      counter +=1;
      level +=1;
      sequence=[];
      clicksArray=[];
      userInput=[];
      $( "#initiate" ).prop( "disabled", false );
      $('h3').text('Level '+level);
      buildSequence();
      if(sequence.length===clicksArray.length){
        arrayConverter();
        checkResults();
      };
    };
  };

function doAllTheStuff() {
  if(sequence.length===clicksArray.length){
    arrayConverter();
    checkResults();
    laterLevels();
  };
}
$( document ).ready(function() {
    buildSequence();
    startButton();
    logClicks();
});






//the first step is to create the arrays that will have the possible sequences for each level
//create a variable that uses Math.random() and math,floor() to create an integer to select from the nested arrays.
//create a function that animates the four boxes, that can be used again and again through out the game, this function will need a for loop that will respond to the different length of arrays
//prompt user to click on the elements in the right order based on what has just been given
//click animates elements the same way as before
//log click events, push them into an array, check the new array against the old array
//if the arrays match, change color background, and add the level before to the UL list
//if you lose alert the player they have lost, ask if they want to play again, if no, return to page with one levels on it, if yes reload original page.
