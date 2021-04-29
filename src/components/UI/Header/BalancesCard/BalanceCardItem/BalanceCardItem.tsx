import React from "react";

import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

import Balance from "../../../../../Transaction/Balance";
import {
	BalanceAmount,
	BalanceCardItemWrapper,
	BalanceIcon,
	BalanceProps,
} from "./BalanceCardItem.styles";

const BalanceCardItem = (props: {
	balance: Balance | null;
	selectBalance: (balance: Balance | null) => void;
	allBalancesSum?: number;
}) => {
	return (
		<BalanceCardItemWrapper
			className="header_balance-card__item"
			special={!props.balance}
			onClick={() => props.selectBalance(props.balance)}
		>
			<BalanceIcon
				className="header_balance-card__item__icon"
				background={props.balance ? props.balance.type.color : "#fff"}
				color={props.balance ? "#fff" : "#009989"}
			>
				{props.balance ? <props.balance.type.ico /> : <AccountBalanceWalletIcon />}
			</BalanceIcon>
			<BalanceProps className="header_balance-card__item__properties">
				<p className="header_balance-card__item__properties_name">
					{props.balance ? props.balance.type.name : "All balances"}
				</p>
				<BalanceAmount
					className="header_balance-card__item__properties_amount"
					amount={
						props.balance ? props.balance.amount : props.allBalancesSum ? props.allBalancesSum : 0
					}
				>
					{props.balance ? props.balance.amount : props.allBalancesSum}$
				</BalanceAmount>
			</BalanceProps>
		</BalanceCardItemWrapper>
	);
};

export default BalanceCardItem;
