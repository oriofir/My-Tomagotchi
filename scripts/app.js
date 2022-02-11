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
    setInterval(updateTimer, 500)

    
    

    // timers for levels
    // setInterval(ageLevel, 2000);
    setInterval(hungerLevel, 1000);
    setInterval(sleepLevel, 2000);
    setInterval(boredomLevel, 2400);
    // setInterval(imageCycle, 2000);
    imageCycle;
/* imageBaby
imageTeen
imageAdult
imageSenior  */ 
});

const ageLevel= (num) => {
    $('#age').text(`Age: ${age}`);
    if(this > 10){
        clearInterval(this);
    }
    if(age > 10 && age <= 20 ){
};
};

const ageDeath = () => {
    if(age === 10 && age === 20 && age === 30){
        $('#age').text('I GROW!') 
        $('#age').css('background-color', 'red')
    } else if(age === 25 && age === 35 && age === 45){
        $('#age').text('I AM A DEMON, YOU CANNOT KILL ME!')
        $('#age').css('background-color', 'red')
    } else if(age === 40 && age === 50 && age === 55 && age === 60){
        $('#age').text('I AM IMMORTAL AND FEAST ON THE BLOOD OF THE INNOCENT!')
        $('#age').css('background-color', 'red')
    } else if(hunger === level[9] || sleepiness === level[9] || boredom === level[9]){
        clearInterval(ageLevel)
        $('#age').text('DEATH!!')
        $('#age').css('background-color', 'red')
    }
    imageCycle();
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
    console.log(hunger)
    // create a loop to 10
    // for(let i = 0; i < level.length; i++){
        // an if statement that stops the loop
        if(hunger < level[9]){
            hunger += 1;
    // accessing the DOM to show the looping numbers
    $('#hunger-level').text(`Hunger: ${hunger}`);
    // stopping the looping number with a boolean
        } else if(hunger === level[9]){
            $('#hunger-level').text('Death by hunger!!')
            $('#age').text('DEATH!!')
            $('#age').css('background-color', 'red')
        }


};

const sleepLevel = () => {
    
    // create a loop to 10
    // for(let i = 0; i < level.length; i++){
        // an if statement that stops the array at 10
        if(sleepiness < level[9]){
            sleepiness += 1;
         // accessing the DOM to show the looping numbers
        $('#sleepiness-level').text(`Sleepiness: ${sleepiness}`);
        } else if (sleepiness === level[9]){
            $('#sleepiness-level').text('Death by fatigue!!');
            $('#age').text('DEATH!!')
            $('#age').css('background-color', 'red')
        } 
    
// }

};

const boredomLevel = () => {
    
    // create a loop to 10
    // for(let i = 0; i < level.length; i++){
        // an if statement that stops the array at 10
        if(boredom < level[9]){
            boredom += 1;
    
    // accessing the DOM to show the looping numbers
    $('#boredom-level').text(`Boredom: ${boredom}`);
} else if(boredom === level[9]){
    $('#boredom-level').text(`Death by boredom!!`);
    $('#age').text('DEATH!!')
    $('#age').css('background-color', 'red')
}

};

$('#feed').on('click', () =>{
    console.log(hunger, hunger <= level[7]);
    if(hunger > level[0] && hunger <= level[7]){
        hunger--;
    } else if(hunger < level[0]){
        hunger === level[0]
   }
    if (hunger < level[9]){
   $('#hunger-level').text(`Hunger: ${hunger}`);
    } else {
        $('#hunger-level').text(`Death by hunger!!`);
    }
   if (hunger === level[9]){
   $('#feed').off('click', () => {
       $('#feed').hide();
    })
 }
 $('#feed').css('animate__bounce', '0.5s');

});




$('#soul-suck').on('click', () =>{
    console.log("It Worked!");
    if(sleepiness > level[0] && sleepiness <= level[7]){
        sleepiness--;
    } else if(sleepiness < level[0]){
        sleepiness === level[0];
    } 
    if (sleepiness < level[9]){
        $('#sleepiness-level').text(`Sleepiness: ${sleepiness}`);
    } else {
        $('#sleepiness-level').text(`Death by fatigue!!`);
    }
    if (sleepiness === level[9]){
        $('#soul-suck').off('click', () => {
            $('#soul-suck').hide();
         })
      }
     });



$('#murder').on('click', () =>{
    console.log("It Worked!");
    if(boredom > level[0] && boredom <= level[7]){
        boredom--;
    } else if(boredom < level[0]){
        boredom === level[0];
    } 
    if (boredom < level[9]){
        $('#boredom-level').text(`Boredom: ${boredom}`);
    } else {
        $('#boredom-level').text(`Death by boredom!!`);
    }
    if (boredom === level[9]){
        $('#muder').off('click', () => {
            $('#murder').hide();
         })
      }
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
        // setInterval(ageDeath, 3000);
        // hunger++
        // sleepiness++
        // boredom++
    } ;

/* cycling through images */

const imageCycle = () => {
    // console.log('image cycle running!')
    
    // teen demon
    if(age > 10 && age < 18){
        // console.log("age is greater than 5")
    $('img').attr("src", "https://c.tenor.com/XFxjYA5cMWkAAAAC/devil-satan.gif")
   
    // adult demon

    } else if (age > 18 && age < 25) {
    $('img').attr("src", "https://c.tenor.com/klaSh-3DkeAAAAAC/red-devil.gif")
    
// senior demon
    } else if (age > 25 && age < 60) {
        $('img').attr("src", "https://c.tenor.com/zmLTHkbjCYoAAAAd/nioh2-monster.gif") 
    }
};

// copied from dom events notes
document.querySelector("#commentButton").addEventListener("click", function(event){
    // prevent default
    // lets us prevent the default submission of a form
    event.preventDefault();

    // this will stop the parent event trigger
    event.stopPropagation();

    // get user input
    const userInput = document.querySelector("#commentInput").value

    // create an element?
    const newComment = document.createElement("h3");
    newComment.textContent = userInput;

    // place element on page
    document.querySelector("h3").append(newComment); //this takes in a node

    document.querySelector("#commentInput").value = "";

})
// if age goes to 70, end game

// if hunger gets to 10, end game

// if sleepiness gets to 10, end game

// if boredom gets to 10, end game

// 