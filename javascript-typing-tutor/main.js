var $allSpans = document.querySelectorAll('span');
var count = 0;

function typeWriter(event) {
  if (($allSpans[count].textContent === event.key) && (count === $allSpans.length)) {
    $allSpans[count].className = 'correct';
  } else if ($allSpans[count].textContent === event.key) {
    $allSpans[count].className = 'correct';
    $allSpans[count + 1].className = 'on-item';
    count++;
  } else if ($allSpans[count].textContent !== event.key) {
    $allSpans[count].classList.add('wrong');
  }
}

document.addEventListener('keydown', typeWriter);
