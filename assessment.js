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

function salesman(points) {
	var result = [];
	var used = [];
	function permutation(input) {
		var temp;
		for (var i=0;i<input.length;i++) {
			temp = input.splice(i,1)[0];
			used.push(temp);
			if (input.length === 0) {
				result.push(used.slice());
			}
			permutation(input);
			input.splice(i,0,temp);
			used.pop();
		}
		return result;
	}
	
	function distance(start,end) {
		return Math.sqrt(Math.pow((end[1]-start[1]),2) + Math.pow((end[0]-start[0]),2));
	}

	if (points.length === 2) {
		return points;
	}

	var middle = permutation(points.slice(1,-1));
	var shortest = -1;
	var shortestPath = [];
	var temp;
	var path;

	for (var i=0;i<middle.length;i++) {
		path = [];
		temp = 0;
		path.push(points[0]);

		for (var j=0;j<middle[i].length;j++) {
			path.push(middle[i][j]);
		}
		
		path.push(points[points.length-1]);

		for (var n=1;n<path.length;n++) {
			debugger;
			temp = temp + distance(path[n-1],path[n]);
		}

		if ((temp < shortest) || (shortest < 0)) {
			shortest = temp;
			shortestPath = path;
		}
	}
	return shortestPath;
}

/*
function randNum(min,max) {
	return Math.random() * (max - min) + min;
}

function randInt(min,max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var randLength = randInt(1,21);
var points = [];
var point;

for (var i=0;i<randLength;i++) {
	point = [];
	point.push(randNum(0,100));
	point.push(randNum(0,100));
	points.push(point);
}

console.log(points);
console.log(salesman(points));
*/
