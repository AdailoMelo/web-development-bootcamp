function main(){
    var res = document.getElementById("res");
    var year = document.getElementById("year").value;
    var n_year = Number(year);
    
    if (n_year % 4 == 0) {
        if (n_year % 100 == 0) {
            if (n_year % 400 == 0) {
                res.innerHTML = `${n_year} Is a Leap year`;
            } else {
                res.innerHTML = `${n_year} Isn't a Leap year`;
            }
        } else {
            res.innerHTML = `${n_year} Is a Leap year`;
        }
    } else {
        res.innerHTML = `${n_year} Isn't a Leap year`;
    }
}