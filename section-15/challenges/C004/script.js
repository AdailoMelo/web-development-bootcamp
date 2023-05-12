function main(){
    var res = document.getElementById("res");
    var cont = 99;
    while (cont != 0) {
        res.innerHTML += `<p>${cont} bottles of beer on the wall, ${cont} bottles of beer. <br>Take one down and pass it around, ${cont - 1} bottles of beer on the wall.</p>`;
        cont--;
    }
}