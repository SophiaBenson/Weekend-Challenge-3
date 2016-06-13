// var addition = require('./add');
// var operation = //need to reference the operation options from index.html
var calculatePath = function (var1, var2, var3) {
  if(var3 == "+"){
    var sum = Number(var1) + Number(var2);
    return(sum);
  }
  else if(var3 == "-"){
    var sub = Number(var1) - Number(var2);
    return(sub);
  }
  else if(var3 == "x"){
    var mult = Number(var1) * Number(var2);
    return(mult);
  }
  else if(var3 == "/"){
    var div = Number(var1) / Number(var2);
    return(div);
  }
  else{
    return("bionic bird is sad");
  }
  // return("Bionic Bird is Calculating: " + inputX + operation + inputY);
};
module.exports=calculatePath;
//nest modules
