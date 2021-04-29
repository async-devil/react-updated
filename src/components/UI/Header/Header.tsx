import React, { useState } from "react";

import BackupIcon from "@material-ui/icons/Backup";
import MenuIcon from "@material-ui/icons/Menu";

import Balance from "../../../Transaction/Balance";
import Wallet from "../../../Transaction/Wallet";
import BalancesCard from "./BalancesCard/BalancesCard";
import {
	StyledHeader,
	HeaderBalanceWrapper,
	Menu,
	BalanceInfo,
	Sync,
	AccountName,
	BalanceAmmount,
} from "./Header.styles";

const Header = (props: { wallet: Wallet; isCurrent: boolean }) => {
	const [selectedBalance, updateSelectedBalance] = useState<Balance | null>(null);
	const [showCardState, updateShowCardState] = useState(false);

	return (
		<StyledHeader isCurrent={props.isCurrent}>
			<HeaderBalanceWrapper className="header-wrapper">
				<Menu className="header_icon-menu header_icon">
					<MenuIcon />
				</Menu>
				<BalanceInfo className="header_balance-info">
					<div onClick={() => updateShowCardState(!showCardState)} style={{ cursor: "pointer" }}>
						<AccountName>{selectedBalance ? selectedBalance.type.name : "All"}</AccountName>
						<BalanceAmmount>
							{selectedBalance ? selectedBalance.amount : props.wallet.balanceSum}$
						</BalanceAmmount>
					</div>
					{showCardState && (
						<BalancesCard
							wallet={props.wallet}
							close={() => updateShowCardState(false)}
							selectBalance={(balance: Balance | null) => updateSelectedBalance(balance)}
						/>
					)}
				</BalanceInfo>
				<Sync className="header_icon-sync header_icon">
					<BackupIcon />
				</Sync>
			</HeaderBalanceWrapper>
		</StyledHeader>
	);
};

export default Header;
