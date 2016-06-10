var addition = require('./add');
var operation = //need to reference the operation options from index.html
var calculatePath = function (inputX, inputY, operation) {
  if(operation == "+"){
    return("bionic bird says the answer is: " + addition());
  }
  else{
    return("bionic bird is sad");
  }
  // return("Bionic Bird is Calculating: " + inputX + operation + inputY);
};
module.exports=calculatePath;
//nest modules
