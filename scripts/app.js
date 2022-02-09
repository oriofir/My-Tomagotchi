console.log("%c[app.js] Loaded with" , "padding:10px; background:yellow; color: black; margin: 10px;");

// $("h1").css("background-color", "green") --> sanity check

// 

/* === Global Variables === */
let age = 0;
let hunger = 1;
let sleepiness = 1;
let boredom = 1;
let time = 0; 

// level array

const level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* const startGame = (e) => {
    // when button is pushed parameters start going up
}; */

// const livingCycles

// create constants for each level of demon to automatically move after a set amount of time
// const demon = () => {
    // is a baby for 30 seconds
    // is a teenager for 30 seconds
    // is an adult for 30 seconds
    // is a senior for 30 seconds

// };



// start game function
$('.start').on('click', () => {
    console.log("It Worked!");
    setInterval(hungerLevel, 1000);
    setInterval(updateTimer, 1000);
    setInterval(sleepLevel, 1000);
    setInterval(boredomLevel, 1000);
});

const hungerLevel = () => {
    
    // create a loop to 10
    // for(let i = 0; i < level.length; i++){
        // an if statement that stops the loop
        if(hunger !== level[9]){
            hunger++;
        // } else {
        //     return false;
        // }
        }
    
    // accessing the DOM to show the looping numbers
    $('#hunger-level').text(`Hunger: ${hunger}`);
    // stopping the looping number with a boolean
    
// }

};

const sleepLevel = () => {
    
    // create a loop to 10
    // for(let i = 0; i < level.length; i++){
        // an if statement that stops the array at 10
        if(sleepiness !== level[9]){
            sleepiness++;
        }
    
    // accessing the DOM to show the looping numbers
    $('#sleepiness-level').text(`Sleepiness: ${sleepiness}`);
    // stopping the looping number with a boolean
    
// }

};

const boredomLevel = () => {
    
    // create a loop to 10
    // for(let i = 0; i < level.length; i++){
        // an if statement that stops the array at 10
        if(boredom !== level[9]){
            boredom++;
        }
    
    // accessing the DOM to show the looping numbers
    $('#boredom-level').text(`Boredom: ${boredom}`);
    // stopping the looping number with a boolean
    
// }

};

$('#feed').on('click', () =>{
    console.log("It Worked!");
    hunger--
    $('#hunger-level').text(`Hunger: ${hunger}`);

});

$('#soul-suck').on('click', () =>{
    console.log("It Worked!");
    sleepiness--;
    $('#sleepiness-level').text(`Sleepiness: ${sleepiness}`);

});

$('#murder').on('click', () =>{
    console.log("It Worked!");
    boredom--;
    $('#boredom-level').text(`Boredom: ${boredom}`);
    // each

});



const updateTimer = () => {
    // update the time variable
    time++;

    // update the DOM with the new time
    $('#timer').text('timer: ' + time);

    // If the time gets to 10, add 1 to hunger
    if(time === 0){
        time = 10;
        
    }
// hungerLevel();
};


// if age goes to 95, end game

// if hunger gets to 10, end game

// if sleepiness gets to 10, end game

// if boredom gets to 10, end game