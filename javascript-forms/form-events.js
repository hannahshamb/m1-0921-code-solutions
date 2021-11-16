function handleFocus(event) {
  console.log('focus');
  console.log('event target name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur');
  console.log('event target name: ', event.target.name);
}

function handleInput(event) {
  console.log('event target name: ', event.target.name);
  console.log('event target value: ', event.target.value);
}

var $inputs = document.querySelectorAll('input');
var $textArea = document.querySelector('textarea');

$inputs[0].addEventListener('focus', handleFocus);
$inputs[0].addEventListener('blur', handleBlur);
$inputs[0].addEventListener('input', handleInput);
$inputs[1].addEventListener('focus', handleFocus);
$inputs[1].addEventListener('blur', handleBlur);
$inputs[1].addEventListener('input', handleInput);
$textArea.addEventListener('input', handleInput);
