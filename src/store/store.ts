import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";

import { reducer } from "../reducers/main.reducer";
import Balance from "../Transaction/Balance";
import Wallet from "../Transaction/Wallet";

export type State = {
	wallet: Wallet;
	isOpen: {
		state: boolean;
		id: string;
	};
	isSet: boolean;
	selectedBalance: Balance | null;
};

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
