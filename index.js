//BT1
function ex1() {
    var workingdays = +document.getElementById("txtNum1").value;
    var salary = workingdays * 100000;
    document.getElementById("resultBt1").innerHTML = salary
}

//BT2
function ex2() {
    var num1 = +document.getElementById("txtNum21").value;
    var num2 = +document.getElementById("txtNum22").value;
    var num3 = +document.getElementById("txtNum23").value;
    var num4 = +document.getElementById("txtNum24").value;
    var num5 = +document.getElementById("txtNum25").value;
    var GPA = (num1 + num2 + num3 + num4 + num5) / 5;
    document.getElementById("resultBt2").innerHTML = GPA
}
//BT3
function ex3() {
    var USD = +document.getElementById("txtNum3").value;
    var VND = USD * 23500;
    document.getElementById("resultBt3").innerHTML = VND;
}

//BT4
function ex4() {
    var long = +document.getElementById("txtNum41").value;
    var width = +document.getElementById("txtNum42").value;
    var area = long * width;
    var perimeter = (long + width) * 2;
    document.getElementById("resultBt41").innerHTML = area;
    document.getElementById("resultBt42").innerHTML = perimeter;
}

//BT5
function ex5() {
    var number = +document.getElementById("txtNum5").value;
    var n1 = Math.floor(number / 10);
    var n2 = number % 10;
    var total = n1 + n2;
    document.getElementById("resultBt5").innerHTML = total;
}