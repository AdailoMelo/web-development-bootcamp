//click

document.querySelector(".w").addEventListener("click", tocar_w)
document.querySelector(".a").addEventListener("click", tocar_a)
document.querySelector(".s").addEventListener("click", tocar_s)
document.querySelector(".d").addEventListener("click", tocar_d)
document.querySelector(".j").addEventListener("click", tocar_j)
document.querySelector(".k").addEventListener("click", tocar_k)
document.querySelector(".l").addEventListener("click", tocar_l)

//keydown

document.addEventListener('keydown', (event)=> {    
    if (event.key == "w") {
        tocar_w()
    } else if(event.key == "a") {
        tocar_a()
    } else if(event.key == "s") {
        tocar_s()
    } else if(event.key == "d") {
        tocar_d()
    } else if(event.key == "j") {
        tocar_j()
    } else if(event.key == "k") {
        tocar_k()
    } else if(event.key == "l") {
        tocar_l()
    }

    animation(event.key)
});

function tocar_w(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play()
}

function tocar_a(){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play()
}

function tocar_s(){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play()
}

function tocar_d(){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play()
}

function tocar_j(){
    var audio = new Audio("sounds/snare.mp3");
    audio.play()
}

function tocar_k(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play()
}

function tocar_l(){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play()
}

function animation(key){
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}