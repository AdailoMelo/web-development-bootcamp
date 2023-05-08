function test(){
    var a = "3";
    var b = "8";

    alert("The a value: " + a);
    alert("The b value: " + b);

    var change = a;
    a = b;
    b = change;

    alert("The a value: " + a);
    alert("The b value: " + b);
}