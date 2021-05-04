import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import FaceIcon from "@material-ui/icons/Face";
import HomeIcon from "@material-ui/icons/Home";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PetsIcon from "@material-ui/icons/Pets";
import PhoneIcon from "@material-ui/icons/Phone";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import SchoolIcon from "@material-ui/icons/School";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SmokingRoomsIcon from "@material-ui/icons/SmokingRooms";
import TheatersIcon from "@material-ui/icons/Theaters";
import WifiIcon from "@material-ui/icons/Wifi";

export type IconsName =
	| "More"
	| "Restaurant"
	| "ShoppingBasket"
	| "Movie"
	| "ShoppingBag"
	| "Hospital"
	| "Bus"
	| "Gift"
	| "Cash"
	| "Card"
	| "Atm"
	| "Education"
	| "Family"
	| "Phone"
	| "Airplane"
	| "Home"
	| "Gas"
	| "Cigarette"
	| "Wifi"
	| "Pet";

export const Icons: { [name in IconsName]: React.ElementType } = {
	More: MoreHorizIcon,
	Restaurant: RestaurantIcon,
	ShoppingBasket: ShoppingBasketIcon,
	Movie: TheatersIcon,
	ShoppingBag: LocalMallIcon,
	Hospital: LocalHospitalIcon,
	Bus: DirectionsBusIcon,
	Gift: CardGiftcardIcon,
	Cash: AccountBalanceWalletIcon,
	Card: CreditCardIcon,
	Atm: LocalAtmIcon,
	Education: SchoolIcon,
	Family: FaceIcon,
	Phone: PhoneIcon,
	Airplane: AirplanemodeActiveIcon,
	Home: HomeIcon,
	Gas: LocalGasStationIcon,
	Cigarette: SmokingRoomsIcon,
	Wifi: WifiIcon,
	Pet: PetsIcon,
};
