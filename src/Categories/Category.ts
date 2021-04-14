/* eslint-disable no-useless-escape */

import React from "react";

interface ICategory {
	ico: React.ElementType;
	color: string;
	toString: () => string;
	getNameLang: (lang: string) => string;
}

export default class Category implements ICategory {
	protected readonly name: { [langName: string]: string };
	readonly ico: React.ElementType;
	readonly color: string;

	constructor(name: { [langName: string]: string }, ico: React.ElementType, color: string) {
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
		if (!this.name["eng"]) throw new Error("English name does not exists");
		return this.name["eng"];
	}

	public getNameLang(lang: string) {
		if (!this.name[lang]) throw new Error(`Name in ${lang} language is not exists`);
		return this.name[lang];
	}
}
