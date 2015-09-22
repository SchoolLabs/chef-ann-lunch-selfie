var comments = ["I donated to @Chef Ann Foundation to help support more #realschoolfood like this in schools across the country. You can too at realschoolfood.org","Don’t you want your child eating this for school lunch? Join me and @Chef Ann Foundation in the fight for #realschoolfood. Realschoolfood.org","It’s time people were proud of what’s on their lunch tray. Here’s my  #realschoolfood tray, via @ChefAnnFnd. Choose yours at realschoolfood.org.","School lunches should get real. Here’s my idea of #realschoolfood, via @ChefAnnFnd what’s yours? Choose your tray at realschoolfood.org.","School lunch haters need a re-education, because this is what #realschoolfood looks like. Choose your tray at realschoolfood.org!","It’s time school lunches got better grades. #realschoolfood like this deserves an A+. Choose your tray at realschoolfood.org.","When #realschoolfood looks this good, why would anyone go back to old standards? Choose your tray at realschoolfood.org.","Wishing I could make food as good as #realschoolfood. Teach me, @ChefAnnFnd! Realschoolfood.org","When #realschoolfood looks this good… You’re gonna need a bigger tray. Choose your tray via @Chef Ann Foundation at realschoolfood.org","It’s time to stand up for our children’s health and serve them #realschoolfood like this. Choose your tray via @ChefAnnFnd at realschoolfood.org."]
            
document.getElementById("current-comment").innerHTML = comments[0];

function nextComment(){
    for(var comment = 0; comment < comments.length; comment++){
        if(document.getElementById("current-comment").innerHTML == comments[comment]){
            if(comment == comments.length-1){
                document.getElementById("current-comment").innerHTML = comments[0];
            }else{
                document.getElementById("current-comment").innerHTML = comments[comment+1];
            }
            break;
        }
    }
}
function prevComment(){
    for(var comment = 0; comment < comments.length; comment++){
        if(document.getElementById("current-comment").innerHTML == comments[comment]){
            if(comment == 0){
                document.getElementById("current-comment").innerHTML = comments[comments.length-1];
            }else{
                document.getElementById("current-comment").innerHTML = comments[comment-1];
            }
            break;
        }
    }
}