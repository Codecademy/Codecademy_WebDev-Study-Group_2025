function doStuff(){
  var v = document.getElementById("inputValue").value;
  var p = document.getElementById("period").value;
  var t = 0;
  if(p=="monthly"){
    t = v / 12;
  }else if(p=="weekly"){
    t = v / 52;
  }else{
    t = v;
  }
  document.getElementById("output").innerText = t;
}
