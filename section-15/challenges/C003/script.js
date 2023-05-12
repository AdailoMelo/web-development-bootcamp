var list = [];
var cont = 1;
function main(){
    var res = document.getElementById("res");
    
    if (cont % 3 == 0 && cont % 5 == 0){
        list.push("FizzBuzz");
    } else if (cont % 3 == 0) {
        list.push("Fizz");
    } else if (cont % 5 == 0) {
        list.push("Buzz");
    } else {
        list.push(cont);
    }

    cont++;
    res.innerHTML = list;
}
