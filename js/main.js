
// DOM Elements
const time     = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name     = document.getElementById('name');
const focus    = document.getElementById('focus');

// Show Time
function showTime(){
    // let today = new Date(2020, 04, 01, 15, 33, 30);
    let today = new Date();
    let hour  = today.getHours();
    let min   = today.getMinutes();
    let sec   = today.getSeconds();

    // set AM or PM
    const AmPm = hour >= 12 ? 'PM' : 'AM';
    
    // 12hr format 
    hour = hour % 12 || 12;
    
    // Output Time 
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    // self call function
    setTimeout(showTime, 1000);
}
// Add Zeros for numbers less than 10
function addZero(number){
    return(parseInt(number, 10) < 10 ? '0' : '') + number ;
}

// set Backgroun and Greeting
function setBgAndGreet(){
    // let today = new Date(2020, 04, 01, 15, 33, 30);
    let today = new Date();
    let hour  = today.getHours();

    if(hour < 12 ){
        // Morning 
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    }else if (hour < 18 ){
        // Afternoon 
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    }else {
        // Evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
    document.body.style.backgroundSize ="cover";
}

// Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '{Your Name}';
    }else{ 
        name.textContent = localStorage.getItem('name');
    }
}
// Set Name
function setName(e){
    if(e.type === 'keypress'){
        // Make  sure enter is pressed 
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerHTML);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerHTML);
    }
}
// Get Focus 
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '{Your Focus}';
    }else {
        focus.textContent = localStorage.getItem('focus');
    }
}
// Set Focus
function setFocus(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerHTML);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerHTML);
    }
    
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// Run 
showTime();
setBgAndGreet();
getName();
getFocus()