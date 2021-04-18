/* eslint-disable no-useless-escape */

import React from "react";

class Category {
	readonly name: string;
	readonly ico: React.ElementType;
	readonly color: string;

	constructor(name: string, ico: React.ElementType, color: string) {
		this.name = name;
		this.ico = ico;
		if (
			//? Color validity test, matches hex, rgb, hsl with alpha
			!/^(#[0-9a-fA-F]{3}|#(?:[0-9a-fA-F]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/.test(
				color
			)
		)
			throw new Error(`Invalid color: ${color}`);
		this.color = color;
	}

	public toString() {
		return this.name;
	}
}

export default Category;
