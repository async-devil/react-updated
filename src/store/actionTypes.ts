import Balance from "../Transaction/Balance";
import { TransactionDetails, TransactionDetailsUnparsed } from "../Transaction/Transaction";
import Wallet from "../Transaction/Wallet";

export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";
export const CHANGE_VISIBILITY = "CHANGE_VISIBILITY";
export const SET_TRANSACTIONS = "SET_TRANSACTIONS";
export const SELECT_BALANCE = "SELECT_BALANCE";

export const actionTypes = {
	ADD_TRANSACTION,
	DELETE_TRANSACTION,
	UPDATE_TRANSACTION,
	CHANGE_VISIBILITY,
	SET_TRANSACTIONS,
	SELECT_BALANCE,
};

export type Action =
	| {
			type: "ADD_TRANSACTION";
			wallet: Wallet;
			transactionDetails: TransactionDetails | TransactionDetailsUnparsed;
	  }
	| {
			type: "UPDATE_TRANSACTION";
			wallet: Wallet;
			transactionDetails: TransactionDetails | TransactionDetailsUnparsed;
	  }
	| {
			type: "DELETE_TRANSACTION";
			wallet: Wallet;
			id: string;
	  }
	| {
			type: "CHANGE_VISIBILITY";
			state: boolean;
			id: string;
	  }
	| {
			type: "SET_TRANSACTIONS";
			transactionsDetails: TransactionDetails[] | TransactionDetailsUnparsed[];
	  }
	| {
			type: "SELECT_BALANCE";
			balance: Balance | null;
	  };
