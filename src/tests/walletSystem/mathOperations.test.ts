import * as math from "../../store/walletSystem/MathOperations";

describe("Add tests", () => {
	test("Should correctly add positive ints", () => {
		expect(math.add(1, 2)).toBe(3);
	});

	test("Should correctly add positive floats", () => {
		expect(math.add(1.91, 2.03)).toBe(3.94);
	});

	test("Should correctly add negative ints", () => {
		expect(math.add(-1, -2)).toBe(-3);
	});

	test("Should correctly add negative floats", () => {
		expect(math.add(-1.96, -2.01)).toBe(-3.97);
	});
});

describe("Subtract tests", () => {
	test("Should correctly subtract positive ints", () => {
		expect(math.subtract(2, 1)).toBe(1);
	});

	test("Should correctly subtract positive floats", () => {
		expect(math.subtract(3.04, 2.03)).toBe(1.01);
	});

	test("Should correctly subtract negative ints", () => {
		expect(math.subtract(-1, -2)).toBe(1);
	});

	test("Should correctly subtract negative floats", () => {
		expect(math.subtract(-1.96, -2.01)).toBe(0.05);
	});
});
