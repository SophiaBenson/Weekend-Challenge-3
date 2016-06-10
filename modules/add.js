var add= function (inputX, inputY) {
  var sum = req.query.inputX + req.query.inputY;
  return(sum);
};
module.exports=add;
