/* eslint-disable no-useless-escape */

import Categories from "../Categories/Categories";

test("Should return valid english category name", () => {
	expect(Categories.Groceries.getNameLang("eng")).toBe("Groceries");
});

test("Should throw error when use invalid language category name", () => {
	expect(() => Categories.Groceries.getNameLang("NEVER_USE_THIS_LANGUAGE_IN_PRODUCTION")).toThrow(
		"Name in NEVER_USE_THIS_LANGUAGE_IN_PRODUCTION language is not exists"
	);
});

test("Should work toString()", () => {
	expect(Categories.Groceries.toString()).toBe("Groceries");
});

test("Should return valid color", () => {
	expect(
		//? Color validity test, matches hex, rgb, hsl with alpha
		/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/.test(
			Categories.Groceries.color
		)
	).toBe(true);
});
