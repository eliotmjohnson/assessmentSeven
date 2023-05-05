// Sum Zero

const addToZero = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let x = i + 1; x < arr.length; x++) {
			if (arr[i] + arr[x] === 0) {
				return true;
			}
		}
	}
	return false;
};

// console.log(addToZero([]));
// console.log(addToZero([1]));
// console.log(addToZero([1, 2, 3]));
// console.log(addToZero([1, 2, 3, -2]));

/* Results

Time Complexity: O(n^2)

Space Complexity: O(1)

*/

// Unique Characters

const hasUniqueChars = (word) => {
	let wordSet = new Set(word); // O(1)
	let newString = [...wordSet].join(""); // O(n)

	if (newString === word) {
		return true;
	} else {
		return false;
	}
};

// console.log(hasUniqueChars("Monday"));
// console.log(hasUniqueChars("Moonday"));

/* Results 

Time Complexity: O(n)

Space Complexity: O(n)

*/

// Pangram Sentence

const isPangram = (sentence) => {
	const alpha = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	for (let i = 0; i < alpha.length; i++) {
		if (!sentence.toLowerCase().includes(alpha[i])) {
			return false;
		}
	}
	return true;
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// console.log(isPangram("I like cats, but not mice"));

/* Results

Time Complexity: O(1)

Space Complexity: O(1)

*/

// Longest Word

const findLongestWord = (wordArr) => {
	let totals = [];

	for (let i = 0; i < wordArr.length; i++) {
		totals.push(wordArr[i].length);
	}

	return Math.max(...totals);
};

// console.log(findLongestWord(["hi", "hello"]));

/* Results

Time Complexity: O(n)

Space Complexity: O(n)

*/
