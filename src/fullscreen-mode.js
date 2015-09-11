function goFullscreenMode(img){
    document.getElementById("fullscreen-meal").src = img;
    $('#fullscreen-mode').fadeIn();
}

function exitFullscreenMode(){
    $('#fullscreen-mode').fadeOut();
}