//Loops 1

for (let i=0;i<=20;i++) {
	if (i%2 === 0) {
		console.log(i + " is even.");
	}
	else {
		console.log(i + " is odd.");
	}
}

//Loops 2
let msg;
for (let i=0;i<=100;i++) {
	msg = '';
	if (i%3 === 0) {
		msg += "Fizz";
	}
	if (i%5 === 0) {
		msg += "Buzz";
	}
	if (i%3 != 0 && i%5 != 0) {
		msg = i;
	}
	console.log(msg);
}

//Loop 3
for (let pattern = "x";pattern.length<=5;pattern+="x") {
	console.log(pattern);
}

//Loop 4
for (let i=99;i>0;i--) {
	console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, "+ (i-1) + " bottles of beer on the wall.");
}
console.log("We need more beer!");