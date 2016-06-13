console.log( 'script.js sourced' );

$( document ).ready( function() {


  //out button click
    console.log( "jQuery ready" );
    $('#submit').on('click', function(event){
      event.preventDefault();
      console.log( 'submit clicked' );
      // gather info and send to server
      startServerSideOperation();
    });
});
//attempt at clear button
var clear = function () {
  $('#clear').load('./index.html');
};
var processResponse = function( response )
{
  console.log( 'in processResponse: ' + response );
  // new p tag
  var newParagraph = document.createElement('p');
  // with out output data
  newParagraph.textContent = response;
  // empty our output div
  document.getElementById('#outputDiv').innerHTML='';
  // append newParagraph to output
  document.getElementById('#outputDiv').appendChild( newParagraph );
};
//
function startServerSideOperation()
{
  console.log( 'in startServerSideOperation' );
  // assemble object from input
  var x = $('#inputX').val();
  console.log( 'input1: ' + x );
  var y = $('#inputY').val();
  console.log( 'input2: ' + y );
  var z = $('#operation').val();
  console.log( 'input3: ' + z );

  var inputObject ={
    "x": x, "y": y, "z":z

  };
  console.log( inputObject );
  // post with ajax;
  $.ajax({
   type: "POST",
   data:"inputObject",
   url: "/pathpost",
   success: function(data){
          console.log( 'post successfull: ' + data );
          // if post is successful we've received back "data"
          // send "data" to processResponse to do something with it
          processResponse( data );
    },
    error: function(){
         console.log( 'error connecting to server' );
     }
});
}
