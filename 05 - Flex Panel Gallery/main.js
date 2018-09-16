const panels = document.querySelectorAll('.panel');



function toggleOpen() {
    console.log('hello, is this thing working?');
    
    this.classList.toggle('open');
}
//!Couldn't use this with a fat arrow func but I was able to get it to work this way...
// const toggleOpen = (event) => {
//     event.target.classList.toggle('open'); 
// }
//!this fat arrow func won't work for this one.
const toggleActive = (event) => {
    if(event.propertyName.includes('flex')) {
        event.target.classList.toggle('open-active');
    } 
}

// function toggleActive(event) {
//     if(event.propertyName.includes('flex')) {
//         this.classList.toggle('open-active');
//     }
// }

//!Using forEach() to add event listener to each panel and call our toggleOpen() func
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));