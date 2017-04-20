// global variables initiated
var rand, rand2, total, selectCount=0;
var NumClick;
var playerNum=0;
var P1Score=0;
var P2Score=0;
var ScoreCurrent=45;
var ScoreCurrentRevert;
var bug=0;
var lockOut = 0;
//refresh
//      making new arrays to hold total tile value and score of leftover tiles
//tileTotal = new Array();
//currentTiles = new Array(1,2,3,4,5,6,7,8,9);
//      this function will keep track of what tiles have been selected 
//      and only allow user to select correct total based on dice
    
function selectTile(obj) { 
    if (lockOut == 1){
    numClick = obj;
    console.log(obj, numClick, total); //confirm variables
    var img = document.getElementById(obj); //get image
    if (total - numClick < 0){
        alert("The selected tile is beyond your total role"); //to large a selected tile
        console.log("error", numClick, total); //error log and var check
    } 
    else { 

        total = total - obj; //change total
        img.style.visibility="hidden"; //hide image
        console.log("sucess", numClick, total); //log vars and sucess
        ScoreCurrent = ScoreCurrent - obj;
        getScore();
    if (total == 0){ //remove dice when total == 0
    rollpath='images/button/roll.png';
    document.images["roll"].src = rollpath;
    path='images/dice/0.png';
    path2='images/dice/0.png';
    document.images["die1"].src = path;
    document.images["die2"].src = path2;
    }

    if(ScoreCurrent == 0){
        alert("You Shut The Box!");
        nextPlayer();
    }
} //close else
} // close lockOut
}

function nextPlayer() {
    confirmation = false;
    console.log(confirmation);
    if (ScoreCurrent == 0){
        confirmation = true;
        console.log(confirmation);
    } else if (confirm("are you sure?")){
        confirmation = true;
        console.log(confirmation);
    }
    if (confirmation == true){ //confirmation
        console.log(playerNum);
        if (playerNum == 0) {
            playerNum = 1;
            document.getElementById("player2id").style.color = "red";
       //     document.getElementById("player2id").style.font-weight = "bold";
            document.getElementById("player1id").style.color = "white";
      //      document.getElementById("player1id").style.font-weight = "normal";
            if (total == 0) {
            P1Score=P1Score+ScoreCurrent;
        $("#score").text(P1Score);
        $("#score2").text(P2Score);
            } else {
            P1Score=P1Score+ScoreCurrentRevert;
        $("#score").text(P1Score);
        $("#score2").text(P2Score);
            }
            alert("It is now Player 2's Turn.");
            console.log(P1Score, P2Score, ScoreCurrent, ScoreCurrentRevert);
            ScoreCurrent = 45;
            lockOut = 0; //lockout
            total = 0;
            console.log(P1Score, P2Score, ScoreCurrent, ScoreCurrentRevert);

            if (P1Score >= 100){
                if (P1Score < 100000) {
                    GameOverFunction(2);
                } else if (P1Score > 100100){
                    GameOverFunction(2);
                }
            }
        } 
        else {
            playerNum = 0;
            document.getElementById("player2id").style.color = "white";
   //         document.getElementById("player2id").style.font-weight = "normal";
            document.getElementById("player1id").style.color = "red";
   //         document.getElementById("player1id").style.font-weight = "bold";
            if (total == 0) {
            P2Score=P2Score+ScoreCurrent;
                    $("#score").text(P1Score);
        $("#score2").text(P2Score);
            } else {
            P2Score=P2Score+ScoreCurrentRevert;
                    $("#score").text(P1Score);
        $("#score2").text(P2Score);
            }

            alert("It is now Player 1's Turn.");
            console.log(P1Score, P2Score, ScoreCurrent, ScoreCurrentRevert);
            ScoreCurrent = 45;
            lockOut = 0; //lockout
            total = 0;
            console.log(P1Score, P2Score, ScoreCurrent, ScoreCurrentRevert);

            if (P2Score >= 100){
                if (P2Score < 100000) {
                    GameOverFunction(2);
                } else if (P2Score > 100100){
                    GameOverFunction(2);
                }
            }
}
        resetNum();
    } //close if

}
console.log("Hello World!");
//rolling the dice
function rollDice(){
    lockOut = 1;
    ScoreCurrentRevert = ScoreCurrent;
    // randomly choose dice
    if (total > 0){
        alert("Please select more tiles before rolling");
    } else {
    rollpath2 = 'images/button/rolld.png';
    document.images["roll"].src = rollpath2;
    rand = Math.floor((Math.random() * 6) + 1);
    rand2 = Math.floor((Math.random() * 6) + 1);
 // pathone='images/dice/rolling.gif';
//  pathtwo='images/dice/rolling.gif';
//  document.images["die1"].src = pathone;
  //document.images["die2"].src = pathtwo;
    //img = document.getElementById("die1")

    path='images/dice/'+rand+'.png';
    path2='images/dice/'+rand2+'.png';
    document.images["die1"].src = path;
    document.images["die2"].src = path2;
    
    //get new totals of dice
    total = rand+rand2;

    }
}

function getScore() {
    if (playerNum == 0){
        $("#score").text(ScoreCurrent + P1Score);
        $("#score2").text(P2Score);
        
    } else if (playerNum == 1) {
        $("#score2").text(P1Score);
        $("#score2").text(ScoreCurrent + P2Score);
    }
//    $("#score").text(P1Score);
//    $("#score2").text(P2Score);

};


function resetNum() {
      var imgNum = document.getElementById(1); //get image
        imgNum.style.visibility="";
        imgNum = document.getElementById(2);
        imgNum.style.visibility="";
        imgNum = document.getElementById(3);
        imgNum.style.visibility="";
        imgNum = document.getElementById(4);
        imgNum.style.visibility="";
        imgNum = document.getElementById(5);
        imgNum.style.visibility="";
        imgNum = document.getElementById(6);
        imgNum.style.visibility="";
        imgNum = document.getElementById(7);
        imgNum.style.visibility="";
        imgNum = document.getElementById(8);
        imgNum.style.visibility="";
        imgNum = document.getElementById(9);
        imgNum.style.visibility="";
        path='images/dice/0.png';
        path2='images/dice/0.png';
        document.images["die1"].src = path;
        document.images["die2"].src = path2;
        rollpath='images/button/roll.png';
        document.images["roll"].src = rollpath;
    
}


function GameOverFunction(pLost) {
    alert("Player " + pLost + " has lost!");
    alert("Player 1 had: " + P1Score + " and Player 2 had: " + P2Score);
}


 /*   tileTotal[selectCount]=obj;
    for (var i=0; i<tileTotal.length; i++) {
        tempTotal += tileTotal[i];
    };
    alert(tempTotal);

    if (tempTotal<total) {
        img.style.visibility="hidden";

        //change the array holding current tiles
        // to input a zero for the original value
        currentTiles.splice(obj-1,1,0);
        
        //increase selectCount which tracks how many tiles are selected
        selectCount ++;
    }    else if (tempTotal==total) {
        //show roll button in leftside div.
        document.getElementById("leftside").style.visibility="visible";
        img.style.visibility="hidden";

        //change the array holding current tiles
        // to input a zero for the original value
        currentTiles.splice(obj-1,1,0);

        //make our temporary tileTotal back to empty and reset selectCount to zero.  tileTotal = Array();
        selectCount=0;
    }
        
    else    {alert(tempTotal+" is a total beyond your roll.")};
}; */
    
function bugfind(obj) {
        bug = bug+1;
    if (bug == 10) {
        alert("Please stop clicing the dice. It wont do anything.");
    }
    if (bug == 20) {
        alert("1,000,000 points have been added to your score. You were told not to click the dice. I hope you are happy.");
        ScoreCurrent=ScoreCurrent+1000000;
        console.log(playerNum);
        if (playerNum == 0) {
            playerNum = 1;
            P1Score=P1Score+ScoreCurrent;
            alert("Player 1's Score was: " + P1Score);
            alert("Player 2's Score was: " + P2Score);
            alert("It is now Player 2's Turn.");
            ScoreCurrent = 45;
            console.log(P1Score, P2Score, ScoreCurrent);
        } 
        else {
            playerNum = 0;
            P2Score=P2Score+ScoreCurrent;
            alert("Player 1's Score was: "+ P1Score);
            alert("Player 2's Score was: " + P2Score);
            alert("It is now Player 1's Turn.");
            ScoreCurrent = 45;
            console.log(P1Score, P2Score, ScoreCurrent);
        }
        getScore();
        bug = 0;
    }

}
var permaLock = 0;
function meaningoflife () {
    if (permaLock == 1){

    } else {
        var promptalpha5 = prompt("what is the meaning of life?")
    if (promptalpha5 == 42) {
        document.getElementById('devtools').style.visibility= 'visible';
        console.log("Sucess!");
        alert("Sucess!")
    } else {
        permaLock = 1;
    }

}
}

function adminScore() {
    var playnum = prompt("Player number?");
    var playscore = prompt("score?");
    if (playnum == 1) {
        P1Score = playscore;
    }  else {
        P2Score = playscore;
    }
}

