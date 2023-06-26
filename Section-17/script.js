function main(){
    const p1 = Math.floor(Math.random() * 6);
    const p2 = Math.floor(Math.random() * 6);
    roll(p1, p2)
}

function roll(p1, p2){
    const win = document.getElementById("winner");
    const d1 = document.querySelector(".img1");
    const d2 = document.querySelector(".img2")

    if (p1 > p2) {
        //P1 Wins
        win.innerHTML = `Player 1 wins`;
    } else if (p1 == p2) {
        //Empate
        win.innerHTML = `No winner`;
    } else {
        //P2 Wins
        win.innerHTML = `Player 2 wins`;
    }

    d1.setAttribute("src", `images/dice${p1 + 1}.png`);
    d2.setAttribute("src", `images/dice${p2 + 1}.png`);
}

main()