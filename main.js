// let dope = document.querySelector('.number_button')
// dope.addEventListener('click', function clickedNumber() {
//   var me = this
//   var test = +(me.value)
//   console.log(test)
// });


// function clickedNumber(e) {
//   // console.log( number_button.value)
//   console.log(e.target.value)
// }

// document.querySelectorAll('.number_button').forEach(number_button => {number_button.addEventListener('click', function(e){console.log(e.target.value)})})

var populate = []




////========== RETURNS VALUE OF BUTTON CLICKED ==========////
document.querySelectorAll('.number_button').forEach(number_button =>
  number_button.addEventListener('click', function(e) {
    ////========== PUSHES VALUE INTO AN ARRAY ==========////
    populate.push(e.target.value)
    ////========== JOINS VALUES INTO READABLE FORMAT ==========////
    document.getElementById('input').innerHTML = populate.join("")
  }));

////========== JOINS VALUES INTO READABLE FORMAT ==========////
document.getElementById('equals').addEventListener('click', function() {
  var result = (eval(document.getElementById('input').innerHTML))
  document.getElementById('input').innerHTML = result;
  populate = [result];
});

document.getElementById('clear').addEventListener('click', function() {
  document.getElementById('input').innerHTML = "";
  populate = [];
});


// var showMath = populate.join("")









// console.log(+document.getElementById('two').value + 1)
