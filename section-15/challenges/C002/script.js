function main(){
    var res = document.getElementById("res");
    var p1 = document.getElementById("p1n").value;
    var p2 = document.getElementById("p2n").value;
    var chance = Math.random() * 100;
    chance = Math.floor(chance) + 1;
    res.innerHTML = `
    <h1>Love calculator results</h1>
    <h2>These are the results of the calculation:</h2>
    <h3>${p1} &hearts; ${p2}</h3>
    <h3>${chance} %</h3>`;

    if (chance > 60) {
        res.innerHTML += `<P class="chance">You have a good chance with this person</p>`;
    } else {
        res.innerHTML += `<p class="chance">You don't have a really good chance with this person</p>`
    }
}