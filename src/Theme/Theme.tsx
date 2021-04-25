import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export type ThemeType = {
	fontSizes: {
		large: string;
		preLarge: string;
		big: string;
		title: string;
	};
	height: {
		header: string;
		footer: string;
	};
	colors: {
		text: {
			primary: string;
			secondary: string;
			special: string;
			expense: string;
			income: string;
		};
		action: {
			hover: string;
		};
		background: {
			default: string;
			paper: string;
			menu: string;
			menuHighlighted: string;
		};
		divider: string;
	};
};

const Theme = ({ children, theme }: { children: ReactNode; theme: ThemeType }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
