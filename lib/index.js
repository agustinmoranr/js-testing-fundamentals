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
	}
}

function toEqual(actual, expected) {
	if (actual !== expected) {
		throw new Error(`Error expected: ${actual} to be equal to: ${expected}`);
	}
}

function toBeGreaterThan(actual, expected) {
	if (expected > actual) {
		throw new Error(
			`Error expected: ${actual} to be greater than: ${expected}`,
		);
	}
}

function toBeLessThan(actual, expected) {
	if (expected < actual) {
		throw new Error(`Error expected: ${actual} to be less than: ${expected}`);
	}
}

async function test(message, callback) {
	try {
		await callback();
		console.log('✅ ', message);
	} catch (error) {
		console.error('🚨 ', message);
		console.error(error);
	}
}

module.exports = {
	expect,
	test,
};
