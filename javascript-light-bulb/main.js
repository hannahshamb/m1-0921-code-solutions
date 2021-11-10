var $clickHandler = document.querySelector('.click-me');
var $container = document.querySelector('.container');
var clickCount = 0;

document.addEventListener('click', function (event) {
  clickCount++;
  if (clickCount % 2 !== 0) {
    $clickHandler.className = 'circle light';
    $container.className = 'container cream';
  } else {
    $clickHandler.className = 'circle translucent';
    $container.className = 'container black';
  }
});
