document.addEventListener('keypress', function(event){
    if (keyData[event.key]){
        keyData[event.key].sound.play();
    }
});