// detecting button press
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

// detecting key press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
            
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
            
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
            
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
            
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
            
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;    

        default:
            alert("wrong key");
            break;    
    }
}

// document.querySelectorAll(".drum")[0].addEventListener("click", function(){
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();
    
// })
// document.querySelectorAll(".drum")[1].addEventListener("click", function(){
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
    
// })
// document.querySelectorAll(".drum")[2].addEventListener("click", function(){
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
    
// })
// document.querySelectorAll(".drum")[3].addEventListener("click", function(){
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
    
// })
// document.querySelectorAll(".drum")[4].addEventListener("click", function(){
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
    
// })
// document.querySelectorAll(".drum")[5].addEventListener("click", function(){
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
    
// })
// document.querySelectorAll(".drum")[6].addEventListener("click", function(){
//     var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
    
// })

// document.addEventListener("keydown", function(event){
//     alert(event);
// })