window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-keys="${e.keyCode}"]`);
    if(!audio){ return}
    else{
    audio.play()}
    audio.currentTime = 0; 
    key.classList.add('playing');
    
});

function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return
    }
    this.classList.remove('playing'); 
}

const keys = document.querySelectorAll('.key');
keys.forEach(keys => keys.addEventListener('transitionend', removeTransition));