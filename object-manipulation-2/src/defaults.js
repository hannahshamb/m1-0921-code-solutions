/* exported defaults */
function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);
  var concatArr = targetKeys.concat(sourceKeys);
  var allKeysSet = new Set(concatArr);
  var allKeys = Array.from(allKeysSet);
  var add;
  for (var i = 0; i < allKeys.length; i++) {
    add = true;
    for (var tKeys in target) {
      if (tKeys === allKeys[i]) {
        add = false;
      }
    }
    if (add) {
      target[allKeys[i]] = source[allKeys[i]];
    }
  }
}
