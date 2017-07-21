////========== LOADS WINDOW FUNCTION ==========////
window.onload = function() {
  console.log('loaded')

  var result = (eval(document.getElementById('input').innerHTML))

  ////========== POPULATES VALUES IN WINDOW  ==========////
  document.querySelectorAll('.number_button').forEach(number_button =>
    number_button.addEventListener('click', function(e) {
      document.getElementById('input').innerHTML += e.target.value
    }));

  ////========== EQUATION FUNCTION ==========////
  function Newequation(clickedElement, equation, x) {
    document.getElementById(clickedElement).addEventListener('click', function() {
      var result = (eval(document.getElementById('input').innerHTML))
      document.getElementById('input').innerHTML = equation(+result, x);
    });
  }

  ////========== EQUATIONS ==========////
  //------ Square Root
  Newequation('sqrt', Math.sqrt)
  //------ Squared
  Newequation('square', Math.pow, 2)
  //------ Sin
  Newequation('sin', Math.sin)
  //------ Cos
  Newequation('cos', Math.cos)
  //------ Tan
  Newequation('tan', Math.tan)
  //------ Pi
  Newequation('pie', () => Math.PI)

  ////========== CLEARS INPUT ==========////
  Newequation('clear', () => "")
  ////========== EVALUATES INPUT ==========////
  Newequation('equals', eval)
  ////========== DELETE ONE CHARACTER ==========////
  document.getElementById('delete').addEventListener('click', function() {
    (document.getElementById('input').innerHTML) = (document.getElementById('input').innerHTML).slice(0, -1)
  });

}
