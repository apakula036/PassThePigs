let playerArray = [];

/*function doEverything(){
    addPlayer()
}*/
function addPlayer(){
    let playerInputName = document.getElementById('playerName').value;
    
    if(playerInputName.length < 1) {
        alert("Use a real name!");
        return;
    } else if (testForSameName(playerInputName) === true){
        alert("You entered the same player twice!");
        return;
    }
    playerArray.push(playerInputName.toString());

    // Create input for name to store
    let playerHolderDiv = document.createElement('div');
    let playerHolderDivId = playerInputName + "_divholder";
    playerHolderDiv.id = playerHolderDivId;
    document.getElementById("players").appendChild(playerHolderDiv);

    // Create name placeholder input field
    let playerNameInput = document.createElement('input');
    playerNameInput.value = playerInputName;
    playerNameInput.id = playerInputName + "_name_" + playerArray.length;
    document.getElementById(playerHolderDivId).appendChild(playerNameInput);
    document.getElementById('playerName').value = "";
    
    // Add input to store points
    let playerPointsInput = document.createElement('input');
    playerPointsInput.setAttribute('type', 'number');
    let newPlayerPointsId = playerInputName + "_points_" + playerArray.length;
    playerPointsInput.setAttribute("class", "points");
    playerPointsInput.id = newPlayerPointsId;
    playerPointsInput.value = 0;
    document.getElementById(playerHolderDivId).appendChild(playerPointsInput);

    // add 1 button 
    let playerAddPointsButton = document.createElement('button');
    playerAddPointsButton.innerHTML = "+1";
    playerAddPointsButton.setAttribute('onClick', "setPoints(" + newPlayerPointsId + ", 1)");
    document.getElementById(playerHolderDivId).appendChild(playerAddPointsButton);
    
    // add 5 button 
    let playerAddPointsButtonFive = document.createElement('button');
    playerAddPointsButtonFive.innerHTML = "+5";
    playerAddPointsButtonFive.setAttribute('onClick', "setPoints(" + newPlayerPointsId + ", 5)");
    document.getElementById(playerHolderDivId).appendChild(playerAddPointsButtonFive);
    
    // add 10 button 
    let playerAddPointsButtonTen = document.createElement('button');
    playerAddPointsButtonTen.innerHTML = "+10";
    playerAddPointsButtonTen.setAttribute('onClick', "setPoints(" + newPlayerPointsId + ", 10)");
    document.getElementById(playerHolderDivId).appendChild(playerAddPointsButtonTen);
    
    // add 15 button 
    let playerAddPointsButtonFifteen = document.createElement('button');
    playerAddPointsButtonFifteen.innerHTML = "+15";
    playerAddPointsButtonFifteen.setAttribute('onClick', "setPoints(" + newPlayerPointsId + ", 15)");
    document.getElementById(playerHolderDivId).appendChild(playerAddPointsButtonFifteen);
    
    // add 20 button 
    let playerAddPointsButtonTwenty = document.createElement('button');
    playerAddPointsButtonTwenty.innerHTML = "+20";
    playerAddPointsButtonTwenty.setAttribute('onClick', "setPoints(" + newPlayerPointsId + ", 20)");
    document.getElementById(playerHolderDivId).appendChild(playerAddPointsButtonTwenty);
    
    //clear score
    let clearScoreButton = document.createElement('button');
    clearScoreButton.innerHTML = "Clear Score";
    clearScoreButton.setAttribute("class", "clear"); 
    clearScoreButton.setAttribute('onClick', "clearScore(" + newPlayerPointsId + ")");
    document.getElementById(playerHolderDivId).appendChild(clearScoreButton);
    
    
    //Add removePlayer button 
    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove Player";
    removeButton.setAttribute("class", "remove");
    removeButton.setAttribute('onClick', "removePlayer(" + playerHolderDivId + ")");
    document.getElementById(playerHolderDivId).appendChild(removeButton);
    
}
function testForSameName(currentName){
    console.log(playerArray);
    for(i=0; i< playerArray.length; i++){
        console.log(playerArray[i]);
        if(currentName === playerArray[i])
            return true;
    }
}
function clearScore(playerInputId){
    document.getElementById(playerInputId.id).value = 0;
}

function setPoints(playerInputId, points){
    var usersPoints = parseInt(document.getElementById(playerInputId.id).value);
    usersPoints += points;
    document.getElementById(playerInputId.id).value = usersPoints;
}
function removePlayer(playerHolderDivId){
    playerHolderDivId.remove();
    
}

function resetGame(){
    playerArray.splice(0, playerArray.length);
    let playersTotal = document.getElementById("players");
    playersTotal.innerHTML = "";
}