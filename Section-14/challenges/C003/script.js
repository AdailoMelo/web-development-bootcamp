function main(){
    var name = prompt("What's your name?");
    var fl = name.slice(0, 1);
    var rest = name.slice(1, name.length);
    fl = fl.toUpperCase();
    rest = rest.toLowerCase();
    alert("Hello " + fl + rest);
}