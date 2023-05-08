function characters(){
    var text = prompt("Write something (max: 140 characters)");
    alert(text.slice(0, 141));
}