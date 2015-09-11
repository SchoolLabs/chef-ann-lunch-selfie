$(function() {
            $( "#accordion" ).accordion({
                collapsible: true,
                heightStyle: "content",
                active: false,
                activate: function(event, ui) {
                    
                    if($.isEmptyObject(ui.newHeader[0])){
                        //collapsing, show white text and hide fullscreen button
                        $(ui.oldHeader).children().fadeIn("fast");
                        $(ui.oldHeader).children(".fullscreen-btn").fadeOut("fast");
                    }else{
                        //expanding, hide white text and display fullscreen button
                        $(ui.newHeader).children().fadeOut("fast");
                        $(ui.newHeader).children(".fullscreen-btn").fadeIn("fast");
                        
                        $(ui.oldHeader).children().fadeIn("fast");
                        $(ui.oldHeader).children(".fullscreen-btn").fadeOut("fast");
                        
//                        scroll to the top of the newly opened header
//                        theOffset = $(ui.newHeader).offset();
//                        $('body,html').animate({ scrollTop: theOffset.top });
                    }
                    
                }
            });
        });