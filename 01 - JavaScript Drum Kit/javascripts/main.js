function playSound(event) {
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    if(!audio) return //this stops the function from running all together.
    audio.currentTime = 0; //rewinds audio to the start so it plays each time you press key.
    audio.play();
    

    key.classList.add('playing');
  }


  

  function removeTransition(event){
    if(event.propertyName !== 'transform') return; //this skips it if it's not a transform
    console.log(this);
    console.log('For my beutiful Esmè');

   

    this.classList.remove('playing');
    
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  