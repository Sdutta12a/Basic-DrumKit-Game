// Here if we add handleClick() with (), as soon as the webpage is refreshed it'll show the alert. But we didn't want that.we want that whenever the button is getting clicked, then only the alert will be shown. A better way is to crate a anonymus function which will do the same task.
var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<noOfDrumButtons; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){ 
    // alert("I got clicked!");
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    // this.style.color= "white";
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);


});
}
document.addEventListener("keypress", function(event){
// alert("Key is being pressed!");
makeSound(event.key);
});
function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();    
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            default:
        }    

}