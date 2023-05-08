function main(){
    var something = prompt("Type something");
    var something_length = something.length;
    var max = 140 - something_length;
    alert("you have written " + something_length + " characters, you have " + max + " characters left");
}