console.log("%c[app.js] Loaded with" , "padding:10px; background:yellow; color: black; margin: 10px;");

// $("h1").css("background-color", "green") --> sanity check

/* === Variables === */
let age = 0;
let hunger = 0;
let sleepiness = 0;
let boredom = 0;
let time = 30; 

// create constants for each level of demon to automatically move after a set amount of time
const babyDemon = {
}

// start game function
$('.start').on('click', () => {
    console.log("It Worked!");
    
    
});


const startGame = (e) => {

};

const updateTimer = () => {
    // update the time variable
    time++;

    // If the time is 0, set the time back to 30 and start a new round
    if(time === 0){
        time = 30;
        
        

}
};

// if age goes to 95, end game

// if hunger gets to 10, end game

// if sleepiness gets to 10, end game

// if boredom gets to 10, end game