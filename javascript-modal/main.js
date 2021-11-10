var $container = document.querySelector('.container');
var $modal = document.querySelectorAll('.modal');
var $closeMod = document.querySelector('.close-mod');
var $openMod = document.querySelector('.open-mod');

function toggleOpen(event) {
  $container.classList.remove('toggle');
  $modal[0].classList.remove('toggle');
  $modal[1].classList.remove('toggle');
  $modal[2].classList.remove('toggle');
}

$openMod.addEventListener('click', toggleOpen);

function toggleClose(event) {
  $container.classList.add('toggle');
  $modal[0].classList.add('toggle');
  $modal[1].classList.add('toggle');
  $modal[2].classList.add('toggle');
}

$closeMod.addEventListener('click', toggleClose);
