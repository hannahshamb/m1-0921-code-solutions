var $contactForm = document.querySelector('#contact-form');
console.log($contactForm);

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var objectOfValues = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log(objectOfValues);
  $contactForm.reset();
});
