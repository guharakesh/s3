function fizzBuzz(n) {
	for (var i=1; i<=n; i++) {
		if (i%3 === 0 && i%5 === 0) {
			console.log('FizzBuzz');
		} else if (i%3 === 0) {
			console.log('Fizz')
		} else if (i%5 === 0) {
			console.log('Buzz')
		} else {
			console.log(i);
		}
	}
}

// fizzBuzz(15);

function flipCoin() {
	if (Math.floor(Math.random()*2)) {
		return 'heads';
	} else {
		return 'tails';
	}
}

function flipCoinResults(n) {
	var count = 0;
	for (var i=0; i<n; i++) {
		if (flipCoin() === 'heads') {
			count++;
		}
	}
	return 'Heads: ' + count + ' Tails: ' + (n-count);
}

// console.log(flipCoinResults(100));

function sumOfMultiples(max) {
	if ((max-1) === 0) {
		return 0;
	} else if ((max-1) % 3 === 0 || (max-1) % 5 === 0) {
		return (max-1) + sumOfMultiples(max-1);
	}	else {
		return sumOfMultiples(max-1);
	}
}

// console.log(sumOfMultiples(10));

Function.prototype.curry = function() {
	var args = Array.prototype.slice.call(arguments);
	var result = this.bind(null, args[0] );
	for (var i=1; i<args.length; i++) {
		result = result.bind(null, args[i]);	
	}
	return result;
}

var sequence = function(start, end) {
	for (var i=start; i<=end; i++) {
		console.log(i);
	}
}

var sum = function(a,b,c) {
	return a + b + c;
}

var fiveTo = sequence.curry(5);
// fiveTo(10);

var plus12 = sum.curry(8,4);
// console/log(plus12(8));

function highlightArticles(inputString) {
	inputString.replace		
}

function highlightArticles(input) {
	var words = input.split(' ');

	return words.map(function(word){
		if (word.toLowerCase() === 'a' || word.toLowerCase() === 'an') {
			return '<span style="background-color: blue">' + word + '</span>';
		} else if (word.toLowerCase() === 'the') {
			return '<span style="background-color: yellow">' + word + '</span>';
		} else {
			return word;
		}
	}).join(' ');
}

function salesman() {
	function permutation(array) {
		var results = [];
		if (array.length === 1) {
			results.push(array);
		} else {
			array.forEach(function(current,index,arr){
				permutation(arr.filter(function(curr,ind){index !== ind}))
				results.push(current.concat(array.slice(0,1)));
				debugger;
			});
		}
		return results;
	}
	console.log(permutation([1,2,3,4]));
}

salesman();
