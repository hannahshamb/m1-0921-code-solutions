var $tabContainer = document.querySelector('.tab-container');

var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

function tabClicker(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabElements.length; i++) {
      if (event.target === $tabElements[i]) {
        $tabElements[i].classList.add('active');
        for (var j = 0; j < $tabElements.length; j++) {
          if (i !== j) {
            $tabElements[j].classList.remove('active');
          }
        }
      }
    }
    var dataViewAttribute = event.target.getAttribute('data-view');
    for (var k = 0; k < $viewElements.length; k++) {
      if ($viewElements[k].getAttribute('data-view') !== dataViewAttribute) {
        $viewElements[k].classList.add('hidden');
      } else { $viewElements[k].classList.remove('hidden'); }
    }
  }
}

$tabContainer.addEventListener('click', tabClicker);
