
var numberCheck = false;

function add(char){
  if(numberCheck == false) {
    if(isNaN(char) == true){

    }else{
      document.getElementById('display').value += char;
    }
  }else{
    document.getElementById('display').value += char;
  }

  if(isNaN(char) == true){
    numberCheck = false;
  }else{
    numberCheck = true;
  }
}

function calculator() {
  var display = document.getElementById('display');
  var result = eval(display.value);

  document.getElementById('result').value = result;
}

function ac(){
  document.getElementById("display").value = "";
  document.getElementById("result").value = "";
}

S
