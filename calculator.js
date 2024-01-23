

function EnterNumber(elem) {
    document.getElementById('Answer').value += elem
}
function EnterOperator(val) {
    document.getElementById('Answer').value += val
}
function EnterEqual() {

    var x =
    document.getElementById('Answer').value;
    var y = eval(x.replace("%" , "/100"));
    document.getElementById('Answer').value = y;   
}

function EnterClear(val) {
    document.getElementById('Answer').value = ""

}
function EnterBackspace(val) {
   var Z = document.getElementById('Answer').value.slice(0,-1) 
   document.getElementById('Answer').value = Z 
}





