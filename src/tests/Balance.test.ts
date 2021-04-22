import Balance from "../Transaction/Balance";
import { PaymentMethods } from "../Transaction/Categories/PaymentMethod";

test("Should get valid type", () => {
	const balance = new Balance(PaymentMethods["Cash"]);
	expect(balance.type).toBe("Cash");
});

test("Should get valid balance", () => {
	const balance = new Balance(PaymentMethods["Cash"]);
	expect(balance.amount).toBe(0);
});

test("Should work start balance", () => {
	const balance = new Balance(PaymentMethods["Cash"], 10);
	expect(balance.amount).toBe(10);
});

test("Should add ammount", () => {
	const balance = new Balance(PaymentMethods["Cash"]);
	balance.add(1.11);
	expect(balance.amount).toBe(1.11);
});

test("Shoud substart ammount", () => {
	const balance = new Balance(PaymentMethods["Cash"], 10);
	balance.subtract(0.99);
	expect(balance.amount).toBe(9.01);
});

test("Should work negative values", () => {
	const balance = new Balance(PaymentMethods["Cash"]);

	balance.subtract(-1.95);
	expect(balance.amount).toBe(1.95);

	balance.add(-1.41);
	expect(balance.amount).toBe(0.54);
});
