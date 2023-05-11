function main(){
    var res = document.getElementById("res")
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var numw = Number(weight)
    var numh = Number(height)
    var bmi = Math.floor(numw / (numh ** 2));

    res.innerHTML = `Your BMI is: ${bmi}`;

    if (bmi <= 18.5) {
        res.innerHTML += ", so you are underweight"
    } else if (bmi <= 24) {
        res.innerHTML += ", so you have a normal weight"
    } else if (bmi > 24) {
        res.innerHTML += ", so you are overweight"
    }
}