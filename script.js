let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

//html helper variables, src changes
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let numClosedDoors = 3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;

//undeclared variables, assigned in function
let openDoor1 
let openDoor2 
let openDoor3 

//lose condition
const isBot = (door) => {
    if (door.src === botDoorPath){
        return true;
    } else {
        return false;
    }
}

//failsafe/anti-cheat
const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

//win condition
const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}

//RNG for door pictures
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if( choreDoor === 0 ) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if( choreDoor === 1 ) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}

//each separate door
doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying === true){
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying === true){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying === true) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

//fires upon reset, blank slate function
const startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good Luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

//reset game
startButton.onclick = () => {

    if (currentlyPlaying === false) {
        startRound();
        }
}

//game end
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'YOU WIN!  Play again?';
    } else {
        startButton.innerHTML = 'GAME OVER!  Play again?';
    }
    currentlyPlaying = false;
}

//jfc don't forget the call the function that runs it all.
startRound();