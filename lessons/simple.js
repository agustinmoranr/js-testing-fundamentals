/**
 * We have two functions, `sum` and `subtract` ,
 * that are ready to be tested.
 *
 * Task: check if the results are the respects.
 *
 *            **BONUS**
 * Throw an error if the test fails.
 *
 *
 * Execute: Use `node lessons/simple.js` to run the test.
 */

const { sum, subtract } = require('../math');

let result, expected;

result = sum(5, 2);
expected = 7;

if (expected === result) {
	console.log('✅ sum() function works as expected.');
} else {
	throw new Error(
		`"sum() function is not working correctly expected: ${expected}, found: ${result}`,
	);
}

result = subtract(6, 2);
expected = 4;

if (expected === result) {
	console.log('✅ subtract() function works as expected.');
} else {
	throw new Error(
		`"subtract() function is not working correctly expected: ${expected}, found: ${result}`,
	);
}

/**
 * Hint: there's no magic, just the most straightforward conditional statement.
 *
 * Answer: Checkout the main branch for the answer.
 */
