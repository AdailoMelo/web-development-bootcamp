function main(){
    var age = prompt("How old are you?");
    lifeInWeeks(age);
}

function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        
        var years = 90 - age;
        var days = years * 365;
        var week = years * 52;
        var month = years * 12;
        
        alert(`you have ${days} days, ${week} weeks and ${month} months`);
    /*************Don't change the code below**********/
}