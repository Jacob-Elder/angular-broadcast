angular.module('SearchBroadcastApp')
.filter('reverse', function() {
    return function(input) {
      return input.reverse();
    }
}).filter('pluralize', function() {
    return function(word, amount, plural) {
      // use the custom plural word if it is provided, otherwise assume adding "s"
      plural = plural || word + "s"
      if (amount === 1) {
        return amount + " " + word;
      }
      return amount + " " + plural;
    }
}).filter('enumerate', function() {
  return function(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
      result.push({index: i, val: list[i]});
    }
    return result;
  }
})
