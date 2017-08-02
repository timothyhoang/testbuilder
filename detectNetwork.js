// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var getChinaUnionPayPrefixes = function() {
  var prefixes = [];
  for (var i = 622126; i <= 622925; i++) {
    prefixes.push(i.toString());
  }
  for (var i = 624; i <= 626; i++) {
    prefixes.push(i.toString());
  }
  for (var i = 6282; i <= 6288; i++) {
    prefixes.push(i.toString());
  }
  return prefixes;
};

var networks = [
  {
    name: 'China UnionPay',
    prefixes: getChinaUnionPayPrefixes(),
    lengths: [16, 17, 18, 19]
  },
  {
    name: 'Switch',
    prefixes: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
    lengths: [16, 18, 19]
  },
  {
    name: 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  },
  {
    name: 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    name: 'Visa',
    prefixes: ['4'],
    lengths: [13, 16, 19]
  },
  {
    name: 'MasterCard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    name: 'Discover',
    prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    lengths: [16, 19]
  },
  {
    name: 'Maestro',
    prefixes: ['5018', '5020', '5038', '6304'],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  }
];

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  for (var i = 0; i < networks.length; i++) {
    var prefixes = networks[i].prefixes;
    var lengths = networks[i].lengths;
    for (var j = 0; j < prefixes.length; j++) {
      if (prefixes[j] === cardNumber.slice(0, prefixes[j].length) && lengths.includes(cardNumber.length)) {
        return networks[i].name;
      }
    }
  }
};
