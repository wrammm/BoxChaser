var topBoxPosition = 0;
var leftBoxPosition = 0;
var originalGameBoxWidth = $( "#gameBox" ).width();
var originalGameBoxHeight = $( "#gameBox" ).height();
var gameBoxWidth = originalGameBoxWidth;
var gameBoxHeight = originalGameBoxHeight;
var highestLevel = 1;
var score = 0;
var level = 1;
var timer = 0;
var timeleft = 10;
var downloadTimer;
var gameBoardWidth  = $( "#gameBoard" ).width();
var gameBoardHeight = $( "#gameBoard" ).height();
$("#startButton").html("Start Level " + level);
$("#gameBox").hide();
$("#highestLevel").html("Highest Level Reached: " + highestLevel);

$("#startButton").mousedown(function(){
    $("#gameBox").show();
    $("#countdown").show();
    $("#startButton").hide();
    document.getElementById("countdown").innerHTML = timeleft;
    startTimer();
  });

$("#gameBox").mousedown(function(){
    topBoxPosition = Math.floor(Math.random() * (gameBoardHeight - gameBoxHeight));
    leftBoxPosition = Math.floor(Math.random() * (gameBoardWidth - gameBoxWidth));
    $("#gameBox").css({top: topBoxPosition, left: leftBoxPosition, position:'absolute'});
    score += 1;
    $("#score").html("Score: " + score);
    if(score == 10) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Nice work!"
        timeleft = 10;
        $("#countdown").html(timeleft);
        $("#countdown").hide();
        $("#gameBox").hide();
        $("#startButton").show();
        newLevel();
    }
  });

  function newLevel(){
    score = 0;
    level += 1;

    if(level == 4) {
        gameBoxWidth = originalGameBoxWidth;
        gameBoxHeight = originalGameBoxHeight / 2;
        $("#gameBox").css("background-color", "midnightblue");
    } else if(level == 5) {
        gameBoxWidth = originalGameBoxWidth / 2;
        gameBoxHeight = originalGameBoxHeight;
        $("#gameBox").css("border-style", "solid");
        $("#gameBox").css("border-color", "white");
        $("#gameBox").css("background-color", "black");
    } else if(level == 7) {
        gameBoxWidth = originalGameBoxWidth / 4;
        gameBoxHeight = originalGameBoxHeight * 1.3;
        $("#gameBox").css("border-style", "dotted");
        $("#gameBox").css("border-color", "darkcyan");
        $("#gameBox").css("background-color", "black");
    } else if(level == 9) {
        gameBoxWidth = originalGameBoxWidth / 2;
        gameBoxHeight = originalGameBoxHeight / 4;
        $("#gameBox").css("border-color", "midnightblue");
        $("#gameBox").css("background-color", "black");
    }

    if(level > highestLevel) {
        highestLevel = level;
    }
    $("#highestLevel").html("Highest Level Reached: " + highestLevel);
    
    gameBoxWidth = gameBoxWidth / 2;
    gameBoxHeight = gameBoxHeight / 2;
    $("#gameBox").width(gameBoxWidth);
    $("#gameBox").height(gameBoxHeight);

    $("#score").html("Score: " + score);
    $("#level").html("Level: " + level);
    $("#startButton").html("Start Level " + level);
  }

  function startTimer() {
    timeleft = 10;
    downloadTimer = setInterval(function(){
      $("#countdown").html(timeleft);
      timeleft -= 1;
      if(timeleft <= -2){
        clearInterval(downloadTimer);
        if (confirm("Game over! You made it to level " + level + ".\nWould You like to play again?")) {
            startOver();
          } else {
            startOver();
          }
      }
    }, 1000);
  }

  function startOver(){
    $("#highestLevel").html("Highest Level Reached: " + highestLevel);
    score = 0;
    level = 1;
    timeleft = 0;
    
    $("#gameBox").width(originalGameBoxWidth);
    $("#gameBox").height(originalGameBoxHeight);
    $("#gameBox").css("border-style", "none");
    $("#gameBox").css("background-color", "darkcyan");
    $("#startButton").html("Start Level " + level);
    $("#startButton").show();
    $("#gameBox").hide();
    $("#countdown").html("");
    $("#score").html("Score: " + score);
    $("#level").html("Level: " + level);
    $("#startButton").html("Start Level " + level);
  }
  