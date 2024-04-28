/**
 *  We have tested `sum` and `subtract` in simple.js,
 *  but this code is pretty imperative.
 *  It'd be nice to write a little abstraction to make
 *  it read a little nicer. Let's write a simple
 *  abstraction to encapsulate this assertion.
 *
 * Task:
 *  1. Create a function called `expect` going to accept an `actual`.
 *  2. Return an object that has some assertions on it. The first one
 *     here is going to be `toBe`, and that's going to take an expected
 *     value.
 *               **BONUS**
 *  Can you add more assertions like `toEqual`, `toBeGreaterThan`, and
 *  `toBeLessThan`?
 *
 * Execute: Use `node lessons/assertion-library.js` to run the test.
 */
const { sum, subtract } = require('../math');

let result, expected;

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

expect(10).toEqual(10);
// expect(10).toEqual(11);
expect(10).toBeGreaterThan(8);
// expect(10).toBeGreaterThan(11);
expect(10).toBeLessThan(11);
// expect(10).toBeLessThan(9);

/**
 * Answer: Checkout the main branch for the answer.
 */

function expect(actual) {
	return {
		toBe: (expected) => toBe(actual, expected),
		toEqual: (expected) => toEqual(actual, expected),
		toBeGreaterThan: (expected) => toBeGreaterThan(actual, expected),
		toBeLessThan: (expected) => toBeLessThan(actual, expected),
	};
}

function toBe(actual, expected) {
	if (actual !== expected) {
		throw new Error(`Error expected: ${actual} to be: ${expected}`);
	} else {
		console.log('✅ test passed');
	}
}

function toEqual(actual, expected) {
	if (actual === expected) {
		console.log('✅ test passed');
	} else {
		throw new Error(`Error expected: ${actual} to be equal to: ${expected}`);
	}
}

function toBeGreaterThan(actual, expected) {
	if (expected > actual) {
		throw new Error(
			`Error expected: ${actual} to be greater than: ${expected}`,
		);
	} else {
		console.log('✅ test passed');
	}
}

function toBeLessThan(actual, expected) {
	if (expected < actual) {
		throw new Error(`Error expected: ${actual} to be less than: ${expected}`);
	} else {
		console.log('✅ test passed');
	}
}
