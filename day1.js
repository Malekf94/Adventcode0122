const fs = require("fs");

fs.readFile("../day1/inputData.txt", "utf-8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	let a = 0; // adding calories each elf is carrying
	let b = 0; // counting how many
	let c = ""; // we're reading from a text file so we have to add the characters together
	let f = 0; // variable for storing elf calories
	const totalCal = []; // all elf calories
	for (let i = 0; i < data.length; i++) {
		let d = parseInt(data[i]);
		if (d >= 0 && d <= 9) {
			// checking if the character is a number
			c += data[i]; //adding the string to the variable
		} else {
			let d = parseInt(c); // converting string to a number so that we can make use of them
			if (d > 0) {
				a += d;
			} else {
				b++;
			}
			if (b == 1) {
				if (a > 0) {
					f += a;
				} else {
					if (f != 0) {
						totalCal.push(f); //if the variable isnt 0 then we come to the end of the chain of food that the elf is carrying and we add that to the final array
					}
					f = 0;
				}
				a = 0;
			}
			b = 0;
			c = ""; // resetting all variables
		}
	}

	totalCal.sort(function (a, b) {
		return a - b; // function to sort the array in ascending order
	});
	totalCal.reverse(); // reversing the order to get it in descending
	let biggest = totalCal[0];
	let secondBiggest = totalCal[1];
	let thirdBiggest = totalCal[2];

	let topThree = biggest + secondBiggest + thirdBiggest;
	console.log(topThree);
	console.log(biggest);
});
