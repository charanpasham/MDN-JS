document.addEventListener("DOMContentLoaded", function(){
    function createParagraph(){
       var para = document.createElement('p'); 
       para.textContent = "You clicked the button"; 
       document.body.appendChild(para);

    }
    var button = document.querySelectorAll('button');
    for(var i = 0; i < button.length; i++){
        button[i].addEventListener('click',createParagraph);
    }
});