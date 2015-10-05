var comments = ["30.4 mill kids eat school lunch in the US, we need to serve them #realschoolfood. Join the campaign @ realschoolfood.org","It's time schools stopped serving highly processed, heat and serve food. I support #realschoolfood that's cooked from scratch. You can too at www.realschoolfood.org","I donated to Chef Ann Foundation to help support #realschoolfood in schools across the country. You can too at realschoolfood.org","Show your support for #realschoolfood by posting a selfie like I did, and Mamma Chia will donate $1 towards developing healthy school food recipes!","Don’t you want your child eating this for school lunch? Join me and Chef Ann Foundation in the fight for #realschoolfood. Realschoolfood.org","School lunches should get real. Here’s my idea of #realschoolfood. Choose your tray at realschoolfood.org.","School lunch haters need a re-education, because this is what #realschoolfood looks like. Choose your tray at realschoolfood.org!","It’s time school lunches got better grades. #realschoolfood like this deserves an A+. Choose your tray at realschoolfood.org.","When #realschoolfood looks this good, why would anyone go back to old standards? Choose your tray at realschoolfood.org.","It’s time to stand up for our children’s health and serve them #realschoolfood like this. Choose your tray via Chef Ann Foundation at realschoolfood.org."]
            
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