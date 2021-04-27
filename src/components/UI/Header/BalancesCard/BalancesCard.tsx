import React from "react";
import Balance from "../../../../Transaction/Balance";
import Wallet from "../../../../Transaction/Wallet";
import BalanceCardItem from "./BalanceCardItem/BalanceCardItem";
import { BalancesCardTitle, BalancesCardWrapper } from "./BalancesCard.styles";

const BalancesCard = (props: {
	wallet: Wallet;
	close: () => void;
	selectBalance: (balance: Balance | null) => void;
}) => {
	let balancesArray = null;

	balancesArray = [...props.wallet.balances].map((balance) => (
		<BalanceCardItem
			balance={balance}
			selectBalance={(balance: Balance | null) => {
				props.selectBalance(balance);
				props.close();
			}}
			key={balance.type.name}
		/>
	));

	return (
		<BalancesCardWrapper className="header_balance-card-wrapper">
			<BalancesCardTitle className="header_balance-card__title">Balances filter</BalancesCardTitle>
			<BalanceCardItem
				balance={null}
				selectBalance={(balance: Balance | null) => {
					props.selectBalance(balance);
					props.close();
				}}
				allBalancesSum={props.wallet.balanceSum}
			/>
			{balancesArray}
		</BalancesCardWrapper>
	);
};

export default BalancesCard;
