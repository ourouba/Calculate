//add
function add() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
        if(isNaN(n1) || isNaN(n2)){
            document.getElementById("Output").innerHTML = "Please enter a number ";
        }
        else{
            var output = n1 + n2;
            document.getElementById("Output").innerHTML = output;
        }
      
    }

//subtract
function subtract() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
        if(isNaN(n1) || isNaN(n2)){
            document.getElementById("Output").innerHTML = "please enter a number ";
            
              // alert("enter a number ")
        }
        else{
            var output = n1 - n2;
            document.getElementById("Output").innerHTML = output;
        }
}
//multiply
function multiply() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
        if(isNaN(n1) || isNaN(n2)){
            document.getElementById("Output").innerHTML = "Please enter a number ";
              // alert("enter a number ")
        }
        else{
            var output = n1 * n2;
            document.getElementById("Output").innerHTML = output;
          
        }
}
//divide
function divide() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
        if(isNaN(n1) || isNaN(n2)){
           document.getElementById("Output").innerHTML = "Please enter a number ";
          // alert("enter a number ")
        }
        else{
            var output = n1 / n2;
            document.getElementById("Output").innerHTML = output;
        }
}