function goFullscreenMode(img){
    document.getElementById("fullscreen-meal").src = img;
    $('#fullscreen-mode').fadeIn();
    $('#header-logo').css('display','none');
}

function exitFullscreenMode(){
    $('#fullscreen-mode').fadeOut();
    $('#header-logo').css('display','block');
}