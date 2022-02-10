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
    setInterval(updateTimer, 1000)

    
    

    // timers for levels
    // setInterval(ageLevel, 2000);
    setInterval(hungerLevel, 2000);
    setInterval(sleepLevel, 3000);
    setInterval(boredomLevel, 2500);
    // setInterval(ageDeath, 2000);
});

const ageLevel= (num) => {
    $('#age').text(`Age: ${age}`);
    if(this > 10){
        clearInterval(this);
    }
    
};

const ageDeath = () => {
    if(hunger === level[9] || sleepiness === level[9] || boredom === level[9]){
        clearInterval(ageLevel())
        $('#age').text('DEATH!!')
        $('#age').css('background-color', 'red')
    } else if(age === 10 || age === 20 || age === 30){
        $('#age').text('I GROW!') 
        $('#age').css('background-color', 'red')
    } else if(age === 25 || age === 35 || age === 45){
        $('#age').text('I AM A DEMON, YOU CANNOT KILL ME!')
        $('#age').css('background-color', 'red')
    } else if(age === 40 || age === 50 || age === 55 || age === 60){
        $('#age').text('I AM IMMORTAL AND FEAST ON THE BLOOD OF THE INNOCENT!')
        $('#age').css('background-color', 'red')
    }
};

/*   const ageLevel = () => {
      console.log(timer)
      if (timer < 5){
        timer++
      } if(timer > 5){ 
      clearInterval(runTime);
    
    }
    const runTime = setInterval(ageLevel, 1000)
    $('#age-level').text(`Age: ${runTime}`)
};
 */
  
const hungerLevel = () => {
    
    // create a loop to 10
    // for(let i = 0; i < level.length; i++){
        // an if statement that stops the loop
        if(hunger !== level[9]){
            hunger++;
    // accessing the DOM to show the looping numbers
    $('#hunger-level').text(`Hunger: ${hunger}`);
    // stopping the looping number with a boolean
        } else if(hunger === level[9]){
            $('#hunger-level').text('Death by hunger!!')
        }


};

const sleepLevel = () => {
    
    // create a loop to 10
    // for(let i = 0; i < level.length; i++){
        // an if statement that stops the array at 10
        if(sleepiness !== level[9]){
            sleepiness++;
         // accessing the DOM to show the looping numbers
        $('#sleepiness-level').text(`Sleepiness: ${sleepiness}`);
        } else if (sleepiness === level[9]){
            $('#sleepiness-level').text('Death by fatigue!!');
        } 
    
// }

};

const boredomLevel = () => {
    
    // create a loop to 10
    // for(let i = 0; i < level.length; i++){
        // an if statement that stops the array at 10
        if(boredom !== level[9]){
            boredom++;
    
    // accessing the DOM to show the looping numbers
    $('#boredom-level').text(`Boredom: ${boredom}`);
} else if(boredom === level[9]){
    $('#boredom-level').text(`Death by boredom!!`);
}

};

$('#feed').on('click', () =>{
    console.log("It Worked!");
    if(hunger > level[0]){
        hunger--;
    } else if(hunger < level[0]){
        hunger === level[0]
    } else if (hunger === level[9]){
        document.getElementById('#feed').disabled = true;   
    }
    $('#hunger-level').text(`Hunger: ${hunger}`);

});

$('#soul-suck').on('click', () =>{
    console.log("It Worked!");
    if(sleepiness > level[0]){
        sleepiness--;
    } else if(sleepiness < level[0]){
        sleepiness === level[0];
    };    
    $('#sleepiness-level').text(`Sleepiness: ${sleepiness}`);

});

$('#murder').on('click', () =>{
    console.log("It Worked!");
    if(boredom > level[0]){
        boredom--;
    } else if(boredom < level[0]){
        boredom === level[0];
    } 
    
    $('#boredom-level').text(`Boredom: ${boredom}`);
    // make an event unable to click murder anymore

});



const updateTimer = () => {
    // update the time variable
    time++;

    // update the DOM with the new time
    $('#timer').text('timer: ' + time);

    // If the time gets to 10, add age
        age++
        ageLevel();
        ageDeath();
        setInterval(ageDeath, 3000);
        
    
        // hunger++
        // sleepiness++
        // boredom++
    } ;
// hungerLevel();



// if age goes to 70, end game

// if hunger gets to 10, end game

// if sleepiness gets to 10, end game

// if boredom gets to 10, end game

// 