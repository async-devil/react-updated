import { Action } from "../store/actionTypes";
import * as actionTypes from "../store/actionTypes";
import { State } from "../store/store";
import Wallet from "../Transaction/Wallet";

export function reducer(
	state: State = {
		wallet: new Wallet(),
		isOpen: {
			state: false,
			id: "0",
		},
		isSet: false,
		selectedBalance: null,
	},
	action: Action
) {
	switch (action.type) {
		case actionTypes.SET_TRANSACTIONS:
			if (state.isSet === true) return state;

			const wallet = state.wallet;
			action.transactionsDetails.forEach((transaction) => wallet.createTransaction(transaction));
			return { ...state, isSet: true, wallet };

		case actionTypes.ADD_TRANSACTION:
			state.wallet.createTransaction(action.transactionDetails);
			return { ...state };

		case actionTypes.UPDATE_TRANSACTION:
			state.wallet.updateTransactionByID(action.transactionDetails.id, action.transactionDetails);
			return { ...state };

		case actionTypes.DELETE_TRANSACTION:
			state.wallet.deleteTransactionByID(action.id);
			return state;

		case actionTypes.CHANGE_VISIBILITY:
			if (state.isOpen.state && action.state) return state;
			if (!state.isOpen.state && !action.state) return state;

			//? ID is need to be to prevent opening all controllers
			const newIsOpenState = {
				state: action.state,
				id: action.id,
			};

			if (newIsOpenState.state) document.body.style.overflow = "hidden";
			//? Disable scroll
			else document.body.style.overflow = "unset"; //? Enable scroll

			return { ...state, isOpen: newIsOpenState };

		case actionTypes.SELECT_BALANCE:
			return { ...state, selectedBalance: action.balance };

		default:
			return state;
	}
}
