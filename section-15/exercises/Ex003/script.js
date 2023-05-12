var res = document.getElementById("res");
function main(){
    var list = ['Angela', 'Ben', 'Jenn', 'Michael', 'Chloe'];
    choice = Math.random() * (list.length);
    choice = Math.floor(choice);
    res.innerHTML = list[choice];
}