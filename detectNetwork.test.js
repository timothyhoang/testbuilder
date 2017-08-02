/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

/* 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

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

var runTestsForCard = function(cardName, prefixes, lengths) {
  var should = chai.should();
  for (var i = 0; i < prefixes.length; i++) {
    for (var j = 0; j < lengths.length; j++) {
      var prefix = prefixes[i];
      var length = lengths[j];
      (function(prefix, length, cardName) {
        it(`has a prefix of ${prefix} and a length of ${length}`, function() {
          detectNetwork(prefix + (new Array(length + 1 - prefix.length).join('0'))).should.equal(cardName);
        });
      })(prefix, length, cardName);
    }
  }
};

describe('Diner\'s Club', function() {
  var prefixes = ['38', '39'];
  var lengths = [14];
  runTestsForCard('Diner\'s Club', prefixes, lengths);
});

describe('American Express', function() {
  var prefixes = ['34', '37'];
  var lengths = [15];
  runTestsForCard('American Express', prefixes, lengths);
});

describe('Visa', function() {
  var prefixes = ['4'];
  var lengths = [13, 16, 19];
  runTestsForCard('Visa', prefixes, lengths);
});

describe('MasterCard', function() {
  var prefixes = ['51', '52', '53', '54', '55'];
  var lengths = [16];
  runTestsForCard('MasterCard', prefixes, lengths);
});

describe('Discover', function() {
  var prefixes = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  var lengths = [16, 19];
  runTestsForCard('Discover', prefixes, lengths);
});

describe('Maestro', function() {
  var prefixes = ['5018', '5020', '5038', '6304'];
  var lengths = [12, 13, 14, 15, 16, 17, 18, 19];
  runTestsForCard('Maestro', prefixes, lengths);
});

describe('China UnionPay', function() {
  var prefixes = getChinaUnionPayPrefixes();
  var lengths = [16, 17, 18, 19];
  runTestsForCard('China UnionPay', prefixes, lengths);
});

describe('should support Switch', function() {
  var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var lengths = [16, 18, 19];
  runTestsForCard('Switch', prefixes, lengths);
});
