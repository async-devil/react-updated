import mainProperties from "./mainProperties";

const darkTheme = {
	colors: {
		text: {
			primary: "#fff",
			secondary: "#aaa",
			special: "#bfbfbf",
			expense: "rgb(255, 99, 71)",
			income: "rgb(124, 252, 0)",
		},
		action: {
			hover: "#2e2e2e",
		},
		background: {
			default: "#444",
			paper: "#363636",
			menu: "#262626",
			menuHighlighted: "#3a3a3a",
		},
		divider: "#444",
	},
	...mainProperties,
};

export default darkTheme;
