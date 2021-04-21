import mainProperties from "./mainProperties";

const darkTheme = {
	colors: {
		text: {
			primary: "#fff",
			secondary: "rgb(211, 211, 211)",
			special: "rgb(220, 220, 220)",
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
		},
		divider: "#444",
	},
	...mainProperties,
};

export default darkTheme;
