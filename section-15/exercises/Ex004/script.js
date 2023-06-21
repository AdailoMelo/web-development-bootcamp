function main() {
    var fibonacci = [0 , 1]
    var res = document.getElementById("res")
    var i = 0;
    var num = document.getElementById("num").value;
    num = Number(num);
    num -= 2;

    res.innerHTML = "";
    
    for (i = 0; i <= num - 1; i++) {
        fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
    }

    for (i = 0; i < fibonacci.length; i++) {
        res.innerHTML += `${fibonacci[i]} => `
    }

    res.innerHTML += "End";
}